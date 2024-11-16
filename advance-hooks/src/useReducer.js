import logo from "./logo.svg";
import "./App.css";
import { useReducer, useState } from "react";
// state
// useState useReducer

// memory
// useMemo useCallback

// child to parent
// useRef useImperativeHandel

// lifecycle
// useEffect useLayoutEffect
let counters = {
  count1: 0,
  count: 0,
};
let reducer = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case "incOne":
      return { ...state, count: state.count + 1 };
    case "incTwo":
      return { ...state, count1: state.count1 + 1 };
    default:
      return { ...state };
  }
};
function App() {
  let [state, dispatch] = useReducer(reducer, { ...counters });
  let inc = () => {
    dispatch({
      type: "incOne",
    });
  };
  let inc1 = () => {
    dispatch({
      type: "incTwo",
    });
  };
  return (
    <>
      <center>
        <button onClick={inc}>INC {state.count}</button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={inc1}>INC1 {state.count1}</button>
      </center>
    </>
  );
}

export default App;
