import React, { Component } from 'react';
// import logo from './logo.svg';
import './House.css';

function House(props) {
    return (
            <div className="House">
                    <img src={props.imageUrl}></img>
            </div>
    )
}

export default House;