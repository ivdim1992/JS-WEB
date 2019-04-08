import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
let logoText = 'Logo placeholder';

const handleNav = (event) => {
    event.preventDefault();
    const targetEl = event.target.innerHTML;
    
    logoText = targetEl;
    renderApp();
}

const Logo = () => {
    return (
        <div>
            <h1>{logoText}</h1>
        </div>
    )
    
}

const Navigation= () =>{
    const className = 'site-nav';
    const linkClassName = `${className}_nav-link`
  
    return (
        < React.Fragment>
        <nav className={className}>
                  <ul>
                      <li><a  className={linkClassName}  href="#" onClick={handleNav}>Home</a></li>
                      <li><a  className={linkClassName}  href="#" onClick={handleNav}>About</a></li>
                      <li><a  className={linkClassName} href="#" onClick={handleNav}>Contact</a></li>
                  </ul>
              </nav> ,
              <div>This is the second div</div>
         </React.Fragment>
    ) 
}
// const Hello = () => React.createElement('div', {id:'some-id'}, 'Hello');


const Header  = () => {
    return (
        <header>
            <Logo />
            <Navigation />
        </header>
    ) 
}

ReactDOM.render(<Header />,
    document.getElementById('root'));