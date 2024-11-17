import logo from "./logo.svg";
import "./App.css";
import ChildComp from "./ChildComp";
import { useRef, useState } from "react";
import Input from "./Input";
function App() {
  let [input, setInput] = useState("");
  let inputRef = useRef(null);

  let handelEvent = () => {
    console.log("clicked");
    inputRef.current.setValue("shinde");
  };
  return (
    <>
      <Input ref={inputRef} input={input} setInput={setInput} />
      <button onClick={handelEvent}>Click</button>
    </>
  );
}
// parent -> child if we pass function , on parent re-render that function is re-created
export default App;
