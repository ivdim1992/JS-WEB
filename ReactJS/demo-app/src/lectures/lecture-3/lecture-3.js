import React, { Fragment,Component } from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
    constructor(props){
        super(props);

        this.state = {
            count: 0,
        }
        this.updateCounter = this.updateCounter.bind(this);
        this.resetCounter = this.resetCounter.bind(this);
        
    }
    
     updateCounter() {
        this.setState({
            count: this.state.count + 1,
        }, () => {
            const updateCount = this.state.count;
            window.localStorage.setItem('count', `${updateCount}`);
        });
    }

    resetCounter() {
        this.setState({
            count: 0
        })
    }

    render() {
       let {count} = this.state;
      
       return(
         
           <div>
               <span>{count}</span><br />
               <button onClick={this.updateCounter}>+</button><br />
               <button onClick={this.resetCounter}>Reset</button>
           </div>
       )
    }
}