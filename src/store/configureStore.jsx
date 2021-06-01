import { routerMiddleware } from 'connected-react-router';

import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import {reducer}  from './reducer';
import { validateEmail} from './middleware/emailValidation';
import { email_send_timer } from './middleware/email_sent/middleware'

export default function configureStore(initialState) {
  
  
  const middleware = [
    thunk,
    validateEmail,
    email_send_timer
  ];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
  }

  const rootReducer = () =>combineReducers({
    reducer,
  });

  return createStore(
    rootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware), ...enhancers)
  );
  
}
