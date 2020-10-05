import React from 'react';
import ReactDOM from 'react-dom';


import App from './bootstrap/app';

import './assets/styles/main.scss';

const wrapper = document.getElementById('container');
wrapper ? ReactDOM.render(<App />, wrapper) : false;
