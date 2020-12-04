import { createStore, applyMiddleware} from 'redux';
import createSageMiddleware from 'redux-saga';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootSaga from './rootSaga';
import {rootReducer} from './rootReducer';




const composeEnhancers = composeWithDevTools({trace:true});

const sagaMiddleware = createSageMiddleware();


const store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
export default store;




