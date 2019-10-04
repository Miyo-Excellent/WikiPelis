// Dependencies
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

// Root Reducer
import rootReducer from './reducers';

const initialState = {};

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const middleware = [];

if (process.env.NODE_ENV === 'development') {
  middleware.push(thunk);
}

export default createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleware))
);
