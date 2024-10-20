import { takeLatest } from "redux-saga/effects";
import { saveUser } from "../redux/user.reducer";
import { saveUserHandler } from "./handler";

export function* saveUserWatcher() {
  yield takeLatest(saveUser.type, saveUserHandler);
}
