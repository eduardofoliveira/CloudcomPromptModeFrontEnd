import { all, takeLatest } from "redux-saga/effects";

import { Types as LoginTypes } from "../ducks/login";
import { Types as UsuariosTypes } from "../ducks/usuarios";
import { loginAttempt } from "./login";
import { listRequest } from "./usuarios";

export default function* rootSaga() {
  yield all([takeLatest(LoginTypes.LOGIN_REQUEST, loginAttempt)]);
  yield all([takeLatest(UsuariosTypes.LIST_REQUEST, listRequest)]);
}
