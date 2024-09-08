import { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";
import { CounterContextProvider } from "./context/counter.context";

function App() {
  return (
    <>
      <main className="container-fluid">
        <CounterContextProvider>
          <Input />
          <List />
        </CounterContextProvider>
      </main>
    </>
  );
}

// export
export default App;
