import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import { Creators as usuariosActions } from "../ducks/usuarios";

export function* listRequest(action) {
  try {
    const { data } = yield call(api.get, `/user`);

    yield put(usuariosActions.listSuccess(data));
  } catch (error) {
    usuariosActions.listFailure(error);
  }
}
