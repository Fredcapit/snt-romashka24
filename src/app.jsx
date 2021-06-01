

import '@/sass/main.sass'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import App from './components/App/container';

const initialState = window.initialReduxState;
const store = configureStore(initialState);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
           <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


