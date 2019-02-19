import React from 'react';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import * as serviceWorker from './serviceWorker';


// function Nav(props) {

//     const { className, children, replaceAll } = props;
//     console.log(props)

//     const navItems = replaceAll
//         ? { children }
//         : [
//             <a href="/">Home</a>
//             , children
//         ];

//     return (
//         <nav className={className}>
//             {navItems}
//         </nav>

//     );
// }

// function Header(props) {
//     const headerClass = 'header';
//     const headerNavClass = `${headerClass}-navigation`

//     return (
//         <header>
//             < Nav className={headerNavClass}>
//                 <a href="#">About</a>
//                 <a href="#">Contact</a>
//             </ Nav>
//         </header>
//     );
// }

// function Footer(props) {
//     const footerClass = 'footer';
//     const footerNavClass = `${footerClass}-navigation`

//     return (
//         <footer>
//             <Nav className={footerNavClass} />
//         </footer>
//     )
// }

// function HeaderAndFooter() {
//     return (
//         <Fragment>
//             <Header />
//             <Footer />
//         </Fragment>
//     );
// }

// function NavWithStrings(props) {
//     const {items} = props;
// console.log(props)
// console.log(props.id)
//     if(!items){
//         return 'No items';
//     }

//     return (
//         <nav>
//             <ul>
//                    {
//                        items.map(item => (
//                            <li>
//                                <a href="#">{item}</a>
//                            </li>
//                        ))
//                    }
//             </ul>
//         </nav>
//     )
// }

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        this.updateCounter = this.updateCounter.bind(this)
    }

    
     updateCounter() {
        this.setState({
            count: this.state.count + 1
        });
      };


    render() {
       const {count} = this.state;


        return (
            <div>
                <span>{count}</span>
                <button onClick={this.updateCounter}>+</button>
            </div>
        )
    }
}

ReactDOM.render(
    <Counter  />,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();