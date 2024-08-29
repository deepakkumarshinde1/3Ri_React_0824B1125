// import (optional)
// import React from "react";

import Input from "./components/Input";
import List from "./components/List";

// logic class
// class App1 extends React.Component {
//   constructor() {
//     super();
//   }

//   render() {
//     return <>Hello</>;
//   }
// }

function App() {
  let text = "Its Awesome";
  let number = 21;
  return (
    <>
      <main className="container-fluid">
        <Input />
        <List />
      </main>
    </>
  );
}

// export
export default App;
