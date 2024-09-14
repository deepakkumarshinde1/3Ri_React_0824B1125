import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  return (
    <>
      <main className="container-fluid">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/new-registration" element={<Registration />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
