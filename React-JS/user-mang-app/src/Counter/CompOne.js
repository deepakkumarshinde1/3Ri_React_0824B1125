import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CompTwo() {
  let navigate = useNavigate();
  useEffect(() => {
    console.log("comp-2 mounted");

    return () => {
      console.log("comp-2 unmounted");
    };
  });

  return (
    <>
      <h1>Comp-2</h1>
    </>
  );
}

export default CompTwo;
