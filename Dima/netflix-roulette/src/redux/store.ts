import { rootReducer } from '../rootReducer';
import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootSaga from "../rootSaga";

const composeEnhansers = composeWithDevTools;

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhansers(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;