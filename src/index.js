import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import {searchFriends} from './js/reducers'

//create the store also import reducer functions, createStore, Provider and connect

const store = createStore(searchFriends)
ReactDOM.render(<App store= {store}/>, document.getElementById('root'));
registerServiceWorker();
