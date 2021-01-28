import createSageMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import {rootReducer} from './rootReducer';
import { configureStore  } from '@reduxjs/toolkit'


const sagaMiddleware = createSageMiddleware();

const store = configureStore({
    reducer: rootReducer,
    // middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
    middleware: [sagaMiddleware],

})

sagaMiddleware.run(rootSaga);
export default store;