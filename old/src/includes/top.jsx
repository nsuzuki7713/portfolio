import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import axios from "axios";
import Header from "./Header";

function App() {
  const baseURL = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com";
  const [post, setpost] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}/threads`).then((response) => {
      setpost(response.data);
    });
  }, []);

  const threadsList = post.map((number) => (
    <li key={number.id}>
      <div className="threadList">
        <Link to={`/thread/${number.id}`} state={{ state: number.title }}>
          {number.title}
        </Link>
      </div>
    </li>
  ));

  return (
    <div>
      <Header />
      <div className="container">
        <p className="title">新着スレッド</p>
        <div className="threads">
          <ul>{threadsList}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;