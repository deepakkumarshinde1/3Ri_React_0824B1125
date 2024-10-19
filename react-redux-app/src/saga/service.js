import axios from "axios";

export function getDataService() {
  console.log("service");
  let url = "http://localhost:3001/users";
  return axios.get(url);
}
