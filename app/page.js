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
  <script src="https://cdn.anychart.com/releases/v8/js/anychart-base.min.js"></script>
  <script src="https://cdn.anychart.com/releases/v8/js/anychart-tag-cloud.min.js"></script>
  return (
    <Row className="wcloud-bg">
      <Col>
        <h2 style={{ marginTop: "60px" }}>Word Cloud</h2>
          <div class="ligne">
              <div class="intro primaire">
               <h2>Verlan les plus fr&eacute;quents</h2>
                  <p>
                      <a title="verlan Cimer" href="/conjugaison/verbe/acheter.html" class="t18">cimer</a>
                      <a title="verlan chelou" href="/conjugaison/verbe/acheter.html" class="t18">chelou</a>
                      <a title="verlan ouf" href="/conjugaison/verbe/acheter.html" class="t18">ouf</a>
                      <a title="verlan zarbi" href="/conjugaison/verbe/acheter.html" class="t18">zarbi</a>
                      <a title="verlan keufs" href="/conjugaison/verbe/acheter.html" class="t18">keufs</a>
                      <a title="verlan meuf" href="/conjugaison/verbe/acheter.html" class="t18">meuf</a>
                      <a title="verlan keum" href="/conjugaison/verbe/acheter.html" class="t18">keum</a>
                      <a title="verlan cefran" href="/conjugaison/verbe/acheter.html" class="t18">cefran</a>
                      <a title="verlan teuf" href="/conjugaison/verbe/acheter.html" class="t18">teuf</a>
                      <a title="verlan cheum" href="/conjugaison/verbe/acheter.html" class="t18">cheum</a>
                  </p>
              </div>
          </div>
      </Col>
      <Col style={{ height: "100%" }}>
        <div className="search-card">
          <h4>단어</h4>
        </div>
      </Col>
    </Row>
  );
}
