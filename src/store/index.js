import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import reducers from "./ducks";
import sagas from "./sagas";

const middlewares = [];

const sagasMiddleware = createSagaMiddleware();

middlewares.push(sagasMiddleware);

const store = createStore(reducers, applyMiddleware(...middlewares));

sagasMiddleware.run(sagas);

export default store;
