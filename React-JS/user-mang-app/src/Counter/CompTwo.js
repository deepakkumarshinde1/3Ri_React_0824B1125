import { useEffect } from "react";

function CompOne() {
  useEffect(() => {
    console.log("comp-1 mounted");

    return () => {
      console.log("comp-1 unmounted");
    };
  });
  return (
    <>
      <h1>Comp-1</h1>
    </>
  );
}

export default CompOne;
