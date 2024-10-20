import { all } from "redux-saga/effects";
import { saveUserWatcher } from "./watcher";

export function* rootSaga() {
  const watcherList = [saveUserWatcher()];
  yield all(watcherList);
}
