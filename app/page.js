import React from "react";
import SearchBar from "./SearchBar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
// Header Component
const Header = () => {
  return (
    <header>
      <h1>Verlan Dictionary</h1>
      <div className="skyline">
        <img src="/verlan_background.png" className="background-img" />
      </div>
      <SearchBar />
    </header>
  );
};

// InverseVerlan Component
const InverseVerlan = () => {
  return (
    <div className="inverse-verlan">
      <h2>Qu'est-ce que le verlan ?</h2>
    </div>
  );
};

// VerlansInfo Component
const VerlansInfo = () => {
  return (
    <div className="verlans-info">
      <Row>
        <Col
          style={{
            padding: "20",
            textAlign: "center",
          }}
        >
          <img src="/verlan.gif" />
        </Col>
        <Col>
          <div
            className="search-card"
            style={{ textAlign: "center", marginTop: "150px" }}
          >
            <p>Si vous voulez savoir plus sur les verlans, cliquer ici !</p>
            <p>더 알고싶으면 여기를 클릭하세요.</p>
            <button>
              <Link
                href={"/about"}
                style={{ textDecoration: "none", color: "white" }}
              >
                sur les verlans
              </Link>
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

// MostFrequent Component
const MostFrequent = () => {
  return (
    <div className="most-frequent">
      <section id="frequent-section">
        <Row>
          <Col
            style={{
              padding: "20",
              textAlign: "center",
            }}
          >
            <h3 style={{ marginTop: 150 }}>les plus frequents</h3>
          </Col>
          <Col>
            <div className="search-card" style={{ height: 300 }}>
              <p style={{ position: "relative" }}>
                <a
                  title="verlan Cimer"
                  href="/search?keyword=cimer"
                  class="wordcloud1"
                  style={{ textDecoration: "none" }}
                >
                  cimer
                </a>
              </p>
              <p>
                <a
                  title="verlan rotteca"
                  href="/search?keyword=rotteca"
                  class="wordcloud2"
                  style={{ textDecoration: "none" }}
                >
                  rotteca
                </a>
              </p>
              <p>
                <a
                  title="verlan ouf"
                  href="/search?keyword=ouf"
                  class="wordcloud3"
                  style={{ textDecoration: "none" }}
                >
                  ouf
                </a>
              </p>
              <p>
                <a
                  title="verlan zarbi"
                  href="/search?keyword=zarbi"
                  class="wordcloud4"
                  style={{ textDecoration: "none" }}
                >
                  zarbi
                </a>
              </p>
              <p>
                <a
                  title="verlan keufs"
                  href="/search?keyword=Keuf"
                  class="wordcloud5"
                  style={{ textDecoration: "none" }}
                >
                  keufs
                </a>
              </p>
              <p>
                <a
                  title="verlan meuf"
                  href="/search?keyword=Meuf"
                  class="wordcloud6"
                  style={{ textDecoration: "none" }}
                >
                  meuf
                </a>
              </p>
              <p>
                <a
                  title="verlan cefran"
                  href="/search?keyword=cefran"
                  class="wordcloud8"
                  style={{ textDecoration: "none" }}
                >
                  cefran
                </a>
              </p>

              <p>
                <a
                  title="verlan cheum"
                  href="/search?keyword=cheum"
                  class="wordcloud10"
                  style={{ textDecoration: "none" }}
                >
                  cheum
                </a>
              </p>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

// App Component
const App = () => {
  return (
    <div className="app">
      <Header />
      <InverseVerlan />
      <VerlansInfo />
      <MostFrequent />
    </div>
  );
};

export default App;
