import axios from "axios";
import { createContext, useContext, useState } from "react";

let AdminContext = createContext();
const BASE_URL = `http://64.227.149.129:3000/`;
export function useAdminContext() {
  return useContext(AdminContext);
}

export function AdminContextProvider(props) {
  let { children } = props;
  let [newUserDetails, setNewUserDetails] = useState({
    name: "",
    mobile: "",
    email: "",
    address: "Nashik",
    password: "",
  });

  let handelInput = (event) => {
    let { value, name } = event.target;
    setNewUserDetails({ ...newUserDetails, [name]: value });
  };

  let saveRecord = async () => {
    try {
      let url = BASE_URL + "admin/add";
      let response = await axios.post(url, newUserDetails);
      console.log(response.data);
    } catch (error) {
      console.error(error.response.data);
    }
  };

  let shared = { newUserDetails, handelInput, saveRecord };
  return (
    <AdminContext.Provider value={shared}>{children}</AdminContext.Provider>
  );
}

// CREATE => POST
// READ => GET
// UPDATE => PUT
// DELETE => DELETE
