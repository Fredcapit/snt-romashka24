import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { reducer } from './reducer';
import { validateEmail } from './middleware/emailValidation';
import { email_send_timer } from './middleware/email_sent/middleware'
export const history = createBrowserHistory()
export default function configureStore(initialState) {


  const middleware = [
    routerMiddleware(history),
    thunk

  ];

  // In development, use the browser's Redux dev tools extension if installed
  const enhancers = [];
  const isDevelopment = process.env.NODE_ENV === 'development';
  if (isDevelopment && typeof window !== 'undefined' && window.devToolsExtension) {
    enhancers.push(window.devToolsExtension());
  }

  const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    reducer,
  });

  return createStore(
    rootReducer(history),
    initialState,
    compose(
      applyMiddleware(...middleware), ...enhancers)
  );

}
