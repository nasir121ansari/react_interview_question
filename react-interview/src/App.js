import React, { createContext, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SlideShow from "./Components/IamgeSlider/SlideShow";
import Weather from "./Components/Weather/Weather";

// Lazy loading each component to improve performance
const Form = lazy(() => import("./Components/submitForm/Form"));
const DataPassing = lazy(() => import("./Components/passData/DataPassing"));
const ConextApi = lazy(() => import("./Components/contextApi/ConextApi"));
const ToDOList = lazy(() => import("./Components/todoList/ToDOList"));
const LifeCycle = lazy(() => import("./Components/lifeCyle/LifeCycle"));
const TheoeyQuestion = lazy(() => import("./Components/Theory/TheoeyQuestion"));
const UseCallBackP = lazy(() => import("./Components/useCallBack/UseCallBackP"));
const UseMemo = lazy(() => import("./Components/useMemo/UseMemo"));
const Counter = lazy(() => import("./Components/CustomHook/Counter"));
const CounterComponent = lazy(() => import("./Components/UseReducer/CounterComponent"));
const TicTacToe = lazy(() => import("./Components/tic-tac-toe/TicTacToe"));
const DynamicDropDwon = lazy(() => import("./Components/dynamicDropDwon/DynamicDropDwon"));
const StockPrice = lazy(() => import("./Components/stock Price/StockPrice"));
const LoadMore = lazy(() => import("./Components/LoadMore/LoadMore"));
const DigitalWatch = lazy(() => import("./Components/Digitalwatch/DigitalWatch"));
const SearchFunctinality = lazy(() => import("./Components/serchFunctionality/SearchFunctinality"));
const ReduxCounter = lazy(() => import("./Components/ReduxCounter/ReduxCounter"));
const Ques20 = lazy(() => import("./Components/Que20/Ques20"));
const Pagination = lazy(() => import("./Components/Pagination/Pagination"));
const InfiniteScroll = lazy(() => import("./Components/infiniteScroll/InfiniteScroll"));

function Home() {
  return (
    <div className="main-container">
      <h1>React Interview Question</h1>
      <ol>
        <li><Link to="/form">Create a form and submit</Link></li>
        <li><Link to="/dataPassing">Pass Data from parent to child and child to parent</Link></li>
        <li><Link to="/contextApi">Context API and useContext to solve props drilling</Link></li>
        <li><Link to="/Todolist">Todo List</Link></li>
        <li><Link to="/LifeCyleMethod">Life Cycle Method</Link></li>
        <li><Link to="/TheoeyQuestion">Theory Question</Link></li>
        <li><Link to="/UseCallBack">UseCallBack</Link></li>
        <li><Link to="/UseMemo">UseMemo</Link></li>
        <li><Link to="/CustomHook">CustomHook</Link></li>
        <li><Link to="/UseReducerHook">UseReducerHook</Link></li>
        <li><Link to="/TicTacToe">Tic-Tac-Toe</Link></li>
        <li><Link to="/DynamicDropDown">Dynamic DropDown</Link></li>
        <li><Link to="/StockPrice">Stock Price</Link></li>
        <li><Link to="/LoadMore">Load more</Link></li>
        <li><Link to="/DigitalWatch">Digital Watch</Link></li>
        <li><Link to="/SearchFunctinality">Search Functionality</Link></li>
        <li><Link to="/ReduxExample">Redux Example</Link></li>
        <li><Link to="/Question20">Question 20</Link></li>
        <li><Link to="/Pagination">Pagination</Link></li>
        <li><Link to="/InfiniteScroll">Infinite Scroll</Link></li>
        <li><Link to="/IamgeSilder">Iamge Silder</Link></li>
        <li><Link to="/Weather">Weather</Link></li>
      </ol>
    </div>
  );
}

export const globalInfor = createContext();

const folders = {
  DNEG: {},
  Lionsgate: {
    Audio: { test: {} },
    "Best Selling Promo": {},
    "For Review": {},
    Graphics: {},
    Idents: {},
    Output: {},
    Projects: {},
    "Rough Cuts": {},
    Source: {},
    TX: {},
  },
  Paramount: { para: [1, 2, 3] },
  JIO: { jio1: ["a", "bc"] },
  Live: {},
  Shows: {},
  Movies: {},
};

function App() {
  const [data, setData] = useState("data coming from app.js");

  return (
    <Router>
      <globalInfor.Provider className="App" value={{ data, setData }}>
        {/* Suspense provides a fallback UI until the lazy-loaded components are ready */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
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
            <Route path="/DynamicDropDown" element={<DynamicDropDwon data={folders}/>} />
            <Route path="/StockPrice" element={<StockPrice />} />
            <Route path="/LoadMore" element={<LoadMore />} />
            <Route path="/DigitalWatch" element={<DigitalWatch />} />
            <Route path="/SearchFunctinality" element={<SearchFunctinality />} />
            <Route path="/ReduxExample" element={<ReduxCounter />} />
            <Route path="/Question20" element={<Ques20 />} />
            <Route path="/Pagination" element={<Pagination />} />
            <Route path="/InfiniteScroll" element={<InfiniteScroll />} />
            <Route path="/IamgeSilder" element={<SlideShow />} />
            <Route path="/Weather" element={<Weather />} />
            
          </Routes>
        </Suspense>
      </globalInfor.Provider>
    </Router>
  );
}

export default App;
