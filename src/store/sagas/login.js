import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { login } from "../../services/auth";

import { Creators as LoginActions } from "../ducks/login";

export function* loginAttempt(action) {
  try {
    const { data } = yield call(api.post, `/auth`, action.payload.user);

    const usuario = {
      id: data.user.id,
      nome: data.user.nome,
      email: data.user.email,
      token: data.token
    };

    login(usuario.token);

    yield put(LoginActions.loginSuccess(usuario));
  } catch (error) {
    if (error.response) {
      yield put(
        LoginActions.loginFailure(
          `Código erro: ${error.response.status} - Mensagem: ${
            error.response.data.error
          }`
        )
      );
    } else {
      yield put(LoginActions.loginFailure(`Erro ao conectar com servidor`));
    }
  }
}
