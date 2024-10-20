import { call, put } from "redux-saga/effects";
import { saveUserService } from "./service";
import { updateUserState } from "../redux/user.reducer";

export function* saveUserHandler(action) {
  try {
    yield call(saveUserService, { ...action.payload });
    yield put(updateUserState(true));
  } catch (error) {
    console.error(error);
  }
}
