
import React, { Component } from 'react';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';
/* eslint-disable no-unused-vars */
import Styles from '../Stylesheets/style.css';
/* eslint-enable no-unused-vars */

import ShoppingCartApp from './ShoppingCartApp';

const reducer = combineReducers(reducers);
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
    render() {
        return (
            <div className='container'>
            <Provider store={store}>
            <ShoppingCartApp />
            </Provider>
            </div>
    );
    }
}

