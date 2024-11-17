import logo from "./logo.svg";
import "./App.css";
import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import ChildComp from "./ChildComp";
// memory
// useMemo useCallback

// memorize data => useMemo
// memorize a function => useCallback

// child to parent
// useRef useImperativeHandel

// lifecycle
// useEffect useLayoutEffect
function App() {
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(10);
  let inc = () => {
    setCount(1 + count);
  };
  let inc1 = useCallback(() => {
    setCount1(1 + count1);
  }, [count1]);

  // count1 is a event => create a random number + count1  2243567

  

  return (
    <>
      <center>
        <button onClick={inc}>INC {count}</button>
        &nbsp;&nbsp;&nbsp;
        <ChildComp inc1={inc1} count1={count1} />
      </center>
    </>
  );
}
// parent -> child if we pass function , on parent re-render that function is re-created
export default App;
