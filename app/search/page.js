import SearchArea from "../SearchArea";
import "bootstrap/dist/css/bootstrap.min.css";
import { connectDB } from "@/util/database";
import { Button, Row, Col } from "react-bootstrap";

let result_text = {};

export default async function Search(props) {
  const db = (await connectDB).db("forum");
  let keyword = await db
    .collection("dictionary")
    .findOne({ Verlan: props.searchParams.keyword });
  console.log("result is:", keyword);
  console.log("props:", props);
  console.log("props:", props.searchParams.keyword);

  const url = "https://deepl-translator.p.rapidapi.com/translate";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": process.env.X_RapidAPI_Key,
      "X-RapidAPI-Host": "deepl-translator.p.rapidapi.com",
    },
    body: JSON.stringify({
      text: keyword.Original,
      source: "FR",
      target: "KO",
    }),
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    console.log(typeof result);
    result_text = result;
  } catch (error) {
    console.error(error);
  }
  console.log("r", result_text);

  return (
    <div style={{ border: "1px solid black" }}>
      <h1 style={{ marginTop: "100px", textAlign: "center" }}>Search Result</h1>

      <Row>
        <Col
          style={{
            padding: "20",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginTop: "60px" }}>Definition</h2>
          <Button variant="dark" className="black-btn">
            add my note
          </Button>
        </Col>
        <Col>
          <div className="search-card">
            <h4>{keyword.Verlan}</h4>
            {result_text.alternative_texts.map((a, i) => (
              <p key={i}>Original: {a}</p>
            ))}
          </div>
        </Col>
      </Row>

      <div className="search-box">
        <h1>Find Another Word</h1>
        <SearchArea />
      </div>
    </div>
  );
}
