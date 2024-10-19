import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./counter.reducer";
import UserSlice from "./user.reducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "../saga/rootSaga";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    counter: CounterSlice.reducer,
    users: UserSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
