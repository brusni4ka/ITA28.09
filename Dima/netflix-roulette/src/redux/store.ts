import { rootReducer } from '../rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "../rootSaga";
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';


const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],

})

sagaMiddleware.run(rootSaga);

export default store;