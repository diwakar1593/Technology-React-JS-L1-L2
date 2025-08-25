import React from "react";
import './App.css';

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Raj"
        };
        console.log("constructor called");
    }

    UNSAFE_componentWillMount() {   // This is DEPRECATED and should not be used anymore.
        console.log("component will mount - DEPRECATED, should not be used");
    }

    componentDidMount() {   // Getting data from backend server - do it here
        console.log("component did mount");
    }

    UNSAFE_componentWillUpdate() {  // This is DEPRECATED and should not be used anymore.
        console.log("component will update - DEPRECATED, should not be used");
    }

    componentDidUpdate() {
        console.log("component did update");
    }

    componentWillUnmount(){
        console.log("component will unmount");
    }

    handleTextInput(event) {
        this.setState({ name: event.target.value });
    }

    render() {
        console.log("Inside render method ...");
        return (
            <>
                <h2>My Component</h2>
                <div id="demo-container">
                    <h3>CSS in React</h3>
                </div>
                <input type="text" defaultValue={ this.state.name } onInput={(e) => this.handleTextInput(e)} /><br /><br />
            </>
        );
    }
}
        

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            show: true
        };
    }

    handleButtonClick() {
        this.setState((prevState) => ({
            show: !prevState.show
        }));
    }
    
    render() {
        return (
            <>
                <h2>Component Lifecycle demo</h2>
                <button onClick={() => this.handleButtonClick()}>{this.state.show ? "Hide" : "Show"}MyComponent</button>
                { this.state.show && <MyComponent /> }
            </>
        );
    }
}