import React, { Component } from 'react';
// import logo from './logo.svg';
import './Street.css';

// import houses from './data/houses';


class Street extends Component {
    constructor(props){
        super(props)
    }
   render() {
       return (
           <div className="street" onMouseEnter={() => this.props.streetHoverEvent(this.props.id)}>
                <p className="street-info">{this.props.location}</p>
           </div>
       )
   }
}

export default Street;