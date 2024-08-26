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
import { LifeCycle } from "./Components/lifeCyle/LifeCycle";
import { TheoeyQuestion } from "./Components/Theory/TheoeyQuestion";
import UseCallBackP from "./Components/useCallBack/UseCallBackP";
import UseMemo from "./Components/useMemo/UseMemo";
import Counter from "./Components/CustomHook/Counter";
import CounterComponent from "./Components/UseReducer/CounterComponent";
import { TicTacToe } from "./Components/tic-tac-toe/TicTacToe";
import { DynamicDropDwon } from "./Components/dynamicDropDwon/DynamicDropDwon";
import StockPrice from "./Components/stock Price/StockPrice";

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
        <li>
          <Link to="/LifeCyleMethod">Life Cycle Method</Link>
        </li>
        <li>
          <Link to="/TheoeyQuestion">Theory Question</Link>
        </li>
        <li>
          <Link to="/UseCallBack">UseCallBack</Link>
        </li>
        <li>
          <Link to="/UseMemo">UseMemo</Link>
        </li>
        <li>
          <Link to="/CustomHook">CustomHook</Link>
        </li>
        <li>
          <Link to="/UseReducerHook">UseReducerHook</Link>
        </li>
        <li>
          <Link to="/TicTacToe">Tic-Tac-Toe</Link>
        </li>
        <li>
          <Link to="/DynamicDropDown">Dynamic DropDown</Link>
        </li>
        <li>
          <Link to="/StockPrice">Stock Price</Link>
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
          <Route path="/LifeCyleMethod" element={<LifeCycle />} />
          <Route path="/TheoeyQuestion" element={<TheoeyQuestion />} />
          <Route path="/UseCallBack" element={<UseCallBackP />} />
          <Route path="/UseMemo" element={<UseMemo />} />
          <Route path="/CustomHook" element={<Counter />} />
          <Route path="/UseReducerHook" element={<CounterComponent />} />
          <Route path="/TicTacToe" element={<TicTacToe />} />
          <Route path="/DynamicDropDown" element={<DynamicDropDwon />} />
          <Route path="/StockPrice" element={<StockPrice />} />
        </Routes>
      </globalInfor.Provider>
    </Router>
  );
}

export default App;
