import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Proptypes from 'prop-types'
import Greeting from './Greeting'
Greeting.Proptypes = {
    name: Proptypes.string
}


ReactDOM.render(<Greeting name={2}   b={2} time='before mountin'/>, document.getElementById('root'));


