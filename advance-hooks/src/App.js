import { useState } from "react";

function App() {
  let [visible, setVisible] = useState("block");

  return (
    <>
      <center>
        <h1 style={{ display: visible }} data-testid="h1-element">
          Hello
        </h1>
        <p>This is para</p>
        <p>This is para</p>
        <button onClick={() => setVisible("none")}>Hide 1</button>
      </center>
    </>
  );
}
// parent -> child if we pass function , on parent re-render that function is re-created
export default App;
