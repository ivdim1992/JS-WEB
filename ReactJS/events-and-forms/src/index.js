import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Counter from './components/counter';
import RandomList from './components/random-list';
import StarWarsPeopleList from './components/star-wars-people-list';
import * as serviceWorker from './serviceWorker';

let initialCount = 10;

class App extends React.Component {
    state = {
        randomList: [1, 2, 3, 4],
        page: 1,
        isLoading:false
    }

    setNextPage = (event) => {
    
        this.setState((prevState) => ({
            page: prevState.page + 1,
        }));
    }
    render() {
        const { randomList, page, isLoading } = this.state;

        if(isLoading) {
            return <span>Loading..</span>
        }
        return (
            <React.Fragment>
                <StarWarsPeopleList page={page} />,
                <button onClick={this.setNextPage}>Load next page</button>
                {/* <RandomList randomList={randomList} /> */}
            </React.Fragment>
        )
    }

    componentDidMount() {
        // this.setState((prevState) => ({
        //     randomList: [...prevState.randomList, 5],
        // }))

        setTimeout(() => {
           this.setState({
            isLoading:true,
           })
        },20000)
    }

}



ReactDOM.render(
    <App />,
    document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
