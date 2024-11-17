import { memo } from "react";
import { appendNumber } from "./hoc/number.hoc";

function ChildComp({ randomNumber, count1, inc1 }) {
  console.log("ChildComp");
  return (
    <>
      <button onClick={inc1}>INC1 {count1}</button>
      <h1>Hello {randomNumber}</h1>
    </>
  );
}

// export default memo(ChildComp);
export default memo(appendNumber(ChildComp));

// Pure Comp => will re-render on on state or props will get change
// HOC => memo

// Context API
// Redux
