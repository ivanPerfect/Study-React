import React from 'react';

export class ClickCounter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        // this.handleClick = this.handleClick.bind(this)
    }
    handleClick = () => {
        this.setState({count: this.state.count + 1})
    }
    handleClick2 = () => {
        this.setState({count: this.state.count - 1})
    }
    render(){
        return(
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.handleClick}>Increment</button> <br></br>
                <button onClick={this.handleClick2}>subtraction</button>
            </div>
        );
    }
}