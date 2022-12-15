import React from "react";

export class Hello extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            text : "Слава Україні!"
        }   
    }
    componentDidMount(){
        this.handleClick.setState(alert("Открылся"));
    }
    componentWillUnmount(){
        this.handleClick.setState(alert("Закрылся"));
    }
    handleClick = () => {
        alert(this.state.text);
    }
    render (){
        return(
            <div>
                <button onClick={this.handleClick}>Натисни мене!</button>
            </div>
        )
    }
    
}