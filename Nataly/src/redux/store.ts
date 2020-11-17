import {createStore, applyMiddleware} from "redux"
import CreateSagaMiddleware from 'redux-saga';

import rootSaga  from "./rootSaga"

import rootReducer from "./rootReducer"



const sagaMiddleware = CreateSagaMiddleware();


export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
    rootReducer, 
     applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga);