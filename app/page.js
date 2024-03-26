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
          <div class="ligne">
              <div class="intro primaire">
                <div class="chart-area">
                  <div id="container" style="width:100%; height:100%;"></div>
                </div>
               
                <h2>Verlan les plus fr&eacute;quents</h2>
                  <div className="wordcloud_section">
                    <span className="wordcloud_name"> Word Cloud </span>
                      <p>
                          <a title="verlan Cimer" href="/conjugaison/verbe/acheter.html" class="wordcloud1">cimer</a>
                          <a title="verlan chelou" href="/conjugaison/verbe/acheter.html" class="wordcloud2">chelou</a>
                          <a title="verlan ouf" href="/conjugaison/verbe/acheter.html" class="wordcloud3">ouf</a>
                          <a title="verlan zarbi" href="/conjugaison/verbe/acheter.html" class="wordcloud4">zarbi</a>
                          <a title="verlan keufs" href="/conjugaison/verbe/acheter.html" class="wordcloud5">keufs</a>
                          <a title="verlan meuf" href="/conjugaison/verbe/acheter.html" class="wordcloud6">meuf</a>
                          <a title="verlan keum" href="/conjugaison/verbe/acheter.html" class="wordcloud7">keum</a>
                          <a title="verlan cefran" href="/conjugaison/verbe/acheter.html" class="wordcloud8">cefran</a>
                          <a title="verlan teuf" href="/conjugaison/verbe/acheter.html" class="wordcloud9">teuf</a>
                          <a title="verlan cheum" href="/conjugaison/verbe/acheter.html" class="wordcloud10">cheum</a>
                      </p>
                  </div>
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
