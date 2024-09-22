import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import UserList from "./components/UserList";
import AddNewUser from "./components/AddNewUser";
import { UserContextProvider } from "./context/user.context";
import { AdminContextProvider } from "./context/admin.context";

function App() {
  return (
    <>
      <AdminContextProvider>
        <UserContextProvider>
          <main className="container-fluid">
            <Routes>
              <Route path="/" element={<Navigate to="/user-list" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/new-registration" element={<Registration />} />
              <Route path="/user-list" element={<UserList />} />
              <Route path="/new-user" element={<AddNewUser />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </UserContextProvider>
      </AdminContextProvider>
    </>
  );
}

export default App;
