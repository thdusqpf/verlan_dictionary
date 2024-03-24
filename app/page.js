import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button } from "react-bootstrap";
import SearchArea from "./SearchArea";

export default async function Home() {
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "150" }}>Search</h1>
      <SearchArea />
      <WordCloud />
    </>
  );
}

function WordCloud() {
  return (
    <Row className="wcloud-bg">
      <Col>
        <h2 style={{ marginTop: "60px" }}>Word Cloud</h2>
        <Button variant="dark" className="black-btn">
          Save
        </Button>
      </Col>
      <Col style={{ height: "100%" }}>
        <div className="search-card">
          <h4>단어</h4>
        </div>
      </Col>
    </Row>
  );
}
