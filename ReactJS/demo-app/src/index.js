import React, { Fragment, Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import getPeople from './services/star-wars';

import lowerCaseAndSort from './utilities/string-utils';
const data = ['Germany', 'Bulgaria', 'America', 'Serbia'];
const modifiedData = lowerCaseAndSort(data);
console.log(modifiedData);

// const books = [
//     {
//         bookId: 1,
//         title: 'Lord of the rings',
//         author: 'James'
//     },
//     {
//         bookId: 2,
//         title: 'Harry Potter',
//         author: 'Frank'
//     },
//     {
//         bookId: 3,
//         title: 'Inferno',
//         author: 'Dan Brawn'
//     },
// ];

// function BookList(props) {
//     const { books } = props;
//     return (
//         <ul>
//             {books.map(b => (
//                 <li>
//                     <h5>Title: {b.title}</h5>
//                     <h6>Author: {b.author}</h6>
//                 </li>
//             ))}
//       </ul>
//     )
// }


// class StarWarsPeople extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             people: [],
//         }
//     }

//     render() {
//         const people = this.state.people;

//         if (!people.length) {
//             return <div>Loading...</div>
//         }
//         return (
//             <ul>
//                 {
//                     people.map(p => {
//                         return <li>{p.name}</li>
//                     })
//                 }
//             </ul>
//         )
//     }

//     componentDidMount() {
//         getPeople()
//             .then((people) => {
//                 this.setState({
//                     people,
//                 })
//             })
//     }
// }

ReactDOM.render(
    <div>Hello</div>,
    document.getElementById('root'));




