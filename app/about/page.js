import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";

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

export default function About() {
  return (
    <div className="app">
      <Header />
      <div
        className="about-card"
        style={{
          margin: "auto",
          marginTop: 50,
        }}
      >
        <h1 style={{ textAlign: "left", margin: 30 }}>
          Qu'est-ce que le verlan ?
        </h1>
        <div style={{ border: "1px solid black", marginTop: 30 }}></div>
        <Container>
          <Row>
            <Col>
              <img src="/verlan.gif" style={{ marginTop: 50 }} />
            </Col>
            <Col>
              <h3 style={{ marginTop: 30 }}>
                C'est une forme d’argot que formé en inversant les syllabes d’un
                mot
              </h3>
              <p></p>
              <p>
                단어를 음절 단위로 나누어 순서를 바꾸는 프랑스의 은어를
                의미합니다. <br />
                보통 두 음절의 단어로부터 파생되며 두 음절 이상이 verlan으로
                사용되는 경우는 음운축약 등의 이유로 실제로는 두 음절로 발음되는
                경우입니다.
                <p>
                  12세기 프랑스 음유시인 Béroul의 소설에서도 찾아볼 수 있는
                  프랑스인들의 오랜 언어습관입니다.
                </p>
                <p>
                  이후 여러 문학에서도 verlan을 확인할 수 있으나 그 빈도가 잦지
                  않았고 최근 젊은 세대에 널리 퍼지게 된 것은 1990년대 힙합이
                  유행하면서였습니다. <br />
                  90년대에는 이민2세들 사이에서 폭력적인 언어로 유행하였으나
                  현재는 그 의미가 퇴색되어 단순히 유행어의 역할을 하고
                  있습니다.
                </p>
              </p>
              <h4 style={{ marginTop: 30 }}>
                {" "}
                à l'envers[lɑ̃vɛʁ] : 반대로 [lɑ̃ / vɛʁ] -- [vɛʁ / lɑ̃]
              </h4>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        style={{
          border: "1px solid black",
          marginTop: 50,
          textAlign: "center",
        }}
      ></div>
      <p>CopyRight~~~</p>
    </div>
  );
}
