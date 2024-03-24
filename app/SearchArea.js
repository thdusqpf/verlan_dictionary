"use client";

import { useRouter } from "next/router";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";

export default function SearchArea() {
  const [keyword, setKeyword] = useState("");
  return (
    <div className="search-box">
      <div className="search-bg">
        <form method="POST" action={"/api/search"}>
          <input
            name="keyword"
            className="search-input"
            placeholder="Enter search keyword"
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          ></input>
          <BsSearch className="icon" size={25} type="submit" />
        </form>
      </div>
      <div style={{ clear: "both" }}></div>
    </div>
  );
}
