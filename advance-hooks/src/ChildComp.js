import { memo } from "react";

function ChildComp({ randomNumber, count1, inc1 }) {
  console.log("ChildComp");
  return (
    <>
      <button onClick={inc1}>INC1 {count1}</button>
      <h1>Hello {randomNumber}</h1>
    </>
  );
}

export default memo(ChildComp);

// Pure Comp => will re-render on on state or props will get change
// HOC => memo

// Context API
// Redux
