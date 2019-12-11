import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';
import { createStore } from 'redux';
import { featuresReducer } from './reducers/featuresReducer'
import { Provider } from 'react-redux'

const store = createStore(featuresReducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);
