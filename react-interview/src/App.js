import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Fetch_data_from_url from "./Components/Fetch_data_from_url";

function Home() {
  return (
    <div className="main-container">
      <h1 className="">React Interview Question</h1>
      <ol>
        <li>
          <Link to="/fetch-data">Fetch Data from Url and display that</Link>
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
