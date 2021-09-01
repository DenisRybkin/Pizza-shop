import { createStore, compose, applyMiddleware } from 'redux';
import {rooReducer} from "./reducers";
import thunk from 'redux-thunk'

const composeEnhancers =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rooReducer, composeEnhancers(applyMiddleware(thunk)));

window.store = store;