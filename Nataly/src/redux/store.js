import {createStore, applyMiddleware, compose} from "redux"
import CreateSagaMiddleware from 'redux-saga';

import logger from 'redux-logger';

import rootSaga  from "./rootSaga"
import rootReducer from "./rootReducer"

// import { RootState } from "./rootReducer"


const sagaMiddleware = CreateSagaMiddleware();

const middlewares = [logger, sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

export const store = createStore(
    rootReducer, 
    applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga);


