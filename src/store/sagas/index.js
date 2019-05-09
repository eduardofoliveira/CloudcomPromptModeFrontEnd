import { all, takeLatest } from "redux-saga/effects";

import { Types as LoginTypes } from "../ducks/login";
import { loginAttempt } from "./login";

export default function* rootSaga() {
  yield all([takeLatest(LoginTypes.LOGIN_REQUEST, loginAttempt)]);
}
