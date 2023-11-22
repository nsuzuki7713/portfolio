import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Toppage from "./Toppage";
import NewThreads from "./NewThreads";
import Comment from "./Comment";


function App() {

    return (
      <Routes>
        <Route exact path="/" element={<Toppage/>} />
        <Route exact path="/new" element={<NewThreads />} />
        <Route path="/thread/:thread_id"  element={<Comment />}  />
      </Routes>
  );
}

export default App;