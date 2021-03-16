import {createStore, compose, applyMiddleware} from "redux";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga'
import reducer from "./reducers";

const composeEnhancers = compose
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, composeEnhancers(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga)

export default  store