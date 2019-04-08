import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";

import Header from './components/header';
import Footer from './components/footer';
import Home from './views/home';
import About from './views/about';
import NotFound from './views/not-found';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
          <Header />
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route  path="/about" component={About}/>
              <Route   component={NotFound}/>
          </Switch>
          <Footer />
      </Router>
    );
  }
}

export default App;
