import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './components/App'
import s from '../src/redux/store'
import {Provider} from 'react-redux'
//How in the world are we going to trick components into think the store is a prop

ReactDOM.render(<Provider store={s}><App /></Provider>, document.getElementById('root'));
