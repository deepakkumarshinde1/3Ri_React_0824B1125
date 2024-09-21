import { useState } from "react";
import CompOne from "./CompTwo";
import CompTwo from "./CompOne";

function Counter() {
  let [toggle, setToggle] = useState(true);

  return (
    <>
      <button onClick={() => setToggle(!toggle)}>Toggle Comp</button>
      {toggle == true ? <CompOne /> : <CompTwo />}
    </>
  );
}

export default Counter;
