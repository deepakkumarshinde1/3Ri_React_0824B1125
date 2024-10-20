import { Navigate, Route, Routes } from "react-router-dom";
import Registration from "./components/Registration";

function App() {
  return (
    <>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={<Navigate to="/new-registration" />} />
          <Route path="/new-registration" element={<Registration />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
