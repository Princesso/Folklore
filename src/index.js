import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider, connect} from 'react-redux'
import store from './js/store'


ReactDOM.render(<App store= {store}/>, document.getElementById('root'));
registerServiceWorker();
