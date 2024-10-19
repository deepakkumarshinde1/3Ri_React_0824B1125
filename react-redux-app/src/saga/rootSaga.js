import { all } from "redux-saga/effects";
import { getDataWatcher } from "./watcher";

export function* rootSaga() {
  console.log("rootSaga");
  let watcherArray = [getDataWatcher()];
  yield all(watcherArray);
}
