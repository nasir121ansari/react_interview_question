import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Fetch_data_from_url from "./Components/fethData/Fetch_data_from_url";
import { Counter_incr_decr } from "./Components/counter/Counter_incr_decr";

function Home() {
  return (
    <div className="main-container">
      <h1 className="">React Interview Question</h1>
      <ol>
        <li>
          <Link to="/fetch-data">Fetch Data from Url and display that</Link>
        </li>
        <li>
          <Link to="/counter">Counter Increment and Decrement</Link>
        </li>
      </ol>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fetch-data" element={<Fetch_data_from_url />} />
          <Route path="/counter" element={<Counter_incr_decr />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
