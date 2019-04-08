import React, { Component } from 'react';
// import logo from './logo.svg';
import './HouseDetails.css';

function HouseDetails(props) {
    return (
        <div className="HouseDetails">
            <h2>{props.type}</h2>
            <div className="image">
                <img src={props.imageUrl} />
            </div>
            <p>Description: {props.desription}</p>
            <p>Price: {props.price}$</p>
        </div>
    )
}

export default HouseDetails;