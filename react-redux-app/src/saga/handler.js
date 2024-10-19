import { call, put } from "redux-saga/effects";
import { getDataService } from "./service";
import { saveUserList } from "../redux/user.reducer";

export function* getDataHandler() {
  console.log("handler");
  let response = yield call(getDataService);
  console.log("saving data");
  yield put(saveUserList(response.data)); // dispatch
}
