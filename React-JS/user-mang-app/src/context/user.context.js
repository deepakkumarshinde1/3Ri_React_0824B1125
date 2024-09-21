// create a context

import { createContext, useContext, useState } from "react";

let UserContext = createContext();

// create a hook
export function useUserContext() {
  return useContext(UserContext);
}

// provider
export function UserContextProvider(props) {
  let { children } = props;
  let [userList, setUserList] = useState([]);
  let getData = async () => {
    let url = `https://jsonplaceholder.typicode.com/users`;

    let response = await fetch(url);
    let data = await response.json();

    setUserList(data);
  };
  let shared = { userList, getData, setUserList };
  return <UserContext.Provider value={shared}>{children}</UserContext.Provider>;
}
