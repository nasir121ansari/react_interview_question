import React, { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Fetch_data_from_url from "./Components/fethData/Fetch_data_from_url";
import { Counter_incr_decr } from "./Components/counter/Counter_incr_decr";
import { Form } from "./Components/submitForm/Form";
import { DataPassing } from "./Components/passData/DataPassing";
import { ConextApi } from "./Components/contextApi/ConextApi";
import { ToDOList } from "./Components/todoList/ToDOList";

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
        <li>
          <Link to="/form">Create a form and submit</Link>
        </li>
        <li>
          <Link to="/dataPassing">
            Pass Data from parent to child and child to parent
          </Link>
        </li>
        <li>
          <Link to="/contextApi">
            Context api and useContext hooks to solve props drilling issu
          </Link>
        </li>
        <li>
          <Link to="/Todolist">Todo List</Link>
        </li>
      </ol>
    </div>
  );
}
export const globalInfor = createContext();
function App() {
  const [data, setData] = useState("data coming from app.js");
  return (
    <Router>
      <globalInfor.Provider className="App" value={{ data, setData }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fetch-data" element={<Fetch_data_from_url />} />
          <Route path="/counter" element={<Counter_incr_decr />} />
          <Route path="/form" element={<Form />} />
          <Route path="/dataPassing" element={<DataPassing />} />
          <Route path="/contextApi" element={<ConextApi />} />
          <Route path="/Todolist" element={<ToDOList />} />
        </Routes>
      </globalInfor.Provider>
    </Router>
  );
}

export default App;
