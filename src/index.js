import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {middleware as fetchMiddleware} from 'react-redux-fetch'
// import thunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/app';
import './index.css';

const store = applyMiddleware(fetchMiddleware)(createStore);

ReactDOM.render(
    <Provider store={store(reducers)}>
        <App />
    </Provider>,
    document.querySelector('.container')
);