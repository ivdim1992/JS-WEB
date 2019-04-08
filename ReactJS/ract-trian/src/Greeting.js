import React, { Component } from 'react';
import PropTypes from 'prop-types'
// import './App.css';


function Hero() {
    return (
        <div className="row"> 
            <div className="jumbotron col-10 offset-1">
                <h1>Author Quiz</h1>
                <p>Select the book written by the author shown</p>
            </div>
        </div>
    )
}

function Turn({author,books}) {
    return (
    <div className="row turn" style={{backgroundColor:"white"}}>
        <div className="col-4 offset-1">
            <img  src={author.imageUrl} className="authorImage" alt="author"/>
        </div>
        <div className="col-6">
            {books.map((b) => <p>{b.title}</p>)}
        </div>
    </div>
    )
}

function Continue() {
    return null;
}

function Footer() {
    return (
        <div className="row" id="footer"> 
            <div className="col-12">
                <p className="text-muted credit">All images are form ....</p>
            </div>
        </div>
    )
}

class Greeting extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Hero />
                <Turn />
                <Continue/>
                <Footer/>
            </div>
        )
    }
}
Greeting.propTypes = {
    name: PropTypes.string
  };

export default Greeting;
