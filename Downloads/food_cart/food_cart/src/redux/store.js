import {createStore , applyMiddleware , compose} from 'redux';
import appReducer from  './appReducer';
import {persistStore} from 'redux-persist'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(appReducer , composeEnhancers(applyMiddleware()))

const persistor = persistStore(store);

export default (store,persistor)