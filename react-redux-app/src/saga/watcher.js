import { takeLatest } from "redux-saga/effects";
import { getData } from "../redux/user.reducer";
import { getDataHandler } from "./handler";

export function* getDataWatcher() {
  console.log("watcher");
  yield takeLatest(getData.type, getDataHandler);
}
