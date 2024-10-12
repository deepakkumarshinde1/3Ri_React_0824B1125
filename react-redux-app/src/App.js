import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { increment } from "./redux/counter.reducer";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  let incCount = () => {
    dispatch(increment());
  };
  return (
    <center>
      <button onClick={incCount}>INC {count}</button>
    </center>
  );
}

export default App;
