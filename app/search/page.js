import "bootstrap/dist/css/bootstrap.min.css";
import { connectDB } from "@/util/database";
import { Row, Col } from "react-bootstrap";
import SearchBar from "../SearchBar";

let result_text = {};
let example_text = {};

const Header = () => {
  return (
    <header>
      <h1>Verlan Dictionary</h1>
      <div className="skyline">
        <img src="/verlan_background.png" className="background-img" />
      </div>
    </header>
  );
};

export default async function Search(props) {
  if (!props.searchParams || !props.searchParams.keyword) {
    return (
      <div className="app">
        <Header />
        <SearchBar />
        <h2 style={{ textAlign: "center" }}>궁금한 Verlan을 검색해보세요!</h2>
      </div>
    );
  }

  function levenshteinDistance(s1, s2) {
    const len1 = s1.length,
      len2 = s2.length;
    let cost = 0;
    let matrix = Array.from({ length: len1 + 1 }, () => []);

    // 초기 행과 열 설정
    for (let i = 0; i <= len1; i++) matrix[i][0] = i;
    for (let j = 0; j <= len2; j++) matrix[0][j] = j;

    // 행렬 채우기
    for (let i = 1; i <= len1; i++) {
      for (let j = 1; j <= len2; j++) {
        // 문자가 같으면 비용은 0, 다르면 1
        cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
        matrix[i][j] = Math.min(
          matrix[i - 1][j] + 1, // 삭제
          matrix[i][j - 1] + 1, // 삽입
          matrix[i - 1][j - 1] + cost // 대체
        );
      }
    }

    return matrix[len1][len2];
  }

  //검색어 소문자로 변환
  const lower_keyword = props.searchParams.keyword.toLowerCase();
  console.log("lower:", lower_keyword);

  //db에서 검색어와 일치하는 데이터 가져오기
  const db = (await connectDB).db("forum");
  let keyword = await db
    .collection("dictionary")
    .findOne({ Verlan: lower_keyword }, { Verlan: 1, Original: 1, Example: 1 });

  // keyword가 비어있지 않으면(db에 일치하는 단어가 존재하면)
  if (keyword != null) {
    const url =
      "https://n0t7a0ppp8.execute-api.ap-northeast-2.amazonaws.com/dev/translate_function/translate";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ text: keyword.Original }),
    };

    const options2 = {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ text: keyword.Example }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log("result:", result);
      result_text = result;

      const response2 = await fetch(url, options2);
      const result2 = await response2.json();
      console.log("result2:", result2);
      example_text = result2;
    } catch (error) {
      console.error(error);
    }
  } else {
    if (props.searchParams.keyword.length >= 1) {
      let distances = [];
      //const query = { Verlan: { $regex: props.searchParams.keyword } };

      // 레벤슈타인 거리 알고리즘 적용을 위해 db에 있는 모든 데이터 불러오기
      const result2 = await db.collection("dictionary").find().toArray();
      console.log("database length:", result2.length);

      for (let i = 0; i < result2.length; ++i) {
        let distance = levenshteinDistance(lower_keyword, result2[i].Verlan);

        if (result2[i].Verlan.length == distance) {
          distance = Infinity;
        }

        if (result2[i].Verlan.startsWith(lower_keyword[0])) {
          distance -= 1;
          console.log("startsWith Test");
        }
        distances.push({
          word: result2[i].Verlan,
          distance: distance,
        });
        console.log("word", result2[i].Verlan, "distance", distance);
      }
      distances.sort((a, b) => a.distance - b.distance);
      const minDistance = distances[0].distance;
      const closestWords = distances.filter(
        (item) => item.distance === minDistance
      );
      console.log("Closest words:", closestWords);
      return (
        <div className="app">
          <Header />
          <h1 style={{ textAlign: "center", marginTop: 30 }}>
            입력한 단어: {lower_keyword}
          </h1>
          <h2 style={{ textAlign: "center", marginTop: 30 }}>
            아래 단어일 가능성이 있습니다.
          </h2>
          {closestWords.map((keyword, i) => (
            <div className="about-card" key={i}>
              <h2 style={{ textAlign: "left", marginLeft: 30, color: "red" }}>
                {keyword.word}
              </h2>
            </div>
          ))}
          <h1 style={{ textAlign: "center", marginTop: "50px" }}>
            Find More Word
          </h1>
          <SearchBar />
        </div>
      );
    } else {
      console.log("no words");
      return (
        <div className="app">
          <Header />
          <h2 style={{ textAlign: "center", marginTop: 30 }}>
            검색 결과가 없습니다.
          </h2>
          <h2 style={{ textAlign: "center", marginTop: 30 }}>
            단어를 다시 입력해주세요.
          </h2>
          <SearchBar />
        </div>
      );
    }
  }

  return (
    <div className="app">
      <Header />
      <h1 style={{ marginTop: "50px", textAlign: "center" }}>Search Result</h1>
      <div
        className="about-card"
        style={{ margin: "auto", width: "60%", marginLeft: 250, marginTop: 30 }}
      >
        {keyword && (
          <h2 style={{ textAlign: "left", marginLeft: 30 }}>
            {keyword.Verlan}
          </h2>
        )}

        <div style={{ border: "1px solid black" }}></div>
        <Row>
          <Col
            style={{
              padding: "20",
              textAlign: "center",
            }}
          >
            <h2 style={{ marginTop: "60px" }}>Definition</h2>
            <p>Korean: {result_text}</p>
          </Col>
          <Col>
            <h2 style={{ marginTop: 30 }}>예문</h2>
            {keyword && <p>{keyword.Example}</p>}
            <p>{example_text}</p>
          </Col>
        </Row>
      </div>

      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        Find Another Word
      </h1>
      <SearchBar />
    </div>
  );
}
