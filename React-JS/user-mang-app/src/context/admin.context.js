import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

let AdminContext = createContext();
const BASE_URL = `http://localhost:3001/`;

export function useAdminContext() {
  return useContext(AdminContext);
}

export function AdminContextProvider(props) {
  let { children } = props;
  let navigate = useNavigate();
  let [newUserDetails, setNewUserDetails] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "Nashik",
    password: "",
  });

  let [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  let handelInput = (event) => {
    let { value, name } = event.target;
    setNewUserDetails({ ...newUserDetails, [name]: value });
  };

  let saveRecord = async () => {
    try {
      let url = BASE_URL + "users";
      let response = await axios.post(url, newUserDetails);
      Swal.fire({
        title: "Success",
        text: "Registration done successfully.",
        icon: "success",
        confirmButtonText: "Ok",
      }).then(() => {
        navigate("/login");
      });
    } catch (error) {
      console.error(error.response.data);
    }
  };

  let shared = {
    newUserDetails,
    handelInput,
    saveRecord,
    userLogin,
    setUserLogin,
  };
  return (
    <AdminContext.Provider value={shared}>{children}</AdminContext.Provider>
  );
}

// CREATE => POST
// READ => GET
// UPDATE => PUT
// DELETE => DELETE
