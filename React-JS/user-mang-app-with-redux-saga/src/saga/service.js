import axios from "axios";

const BASE_URL = `http://localhost:3001/`;
export function saveUserService(newUserDetails) {
  let url = BASE_URL + "users";
  return axios.post(url, newUserDetails);
}
