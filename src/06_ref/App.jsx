import React from "react";

// ref concept (Uncontrolled components)
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.refName = React.createRef();
    }
    retrieve() {
        let name = this.refName.current.value;
        alert("Retrieved name from text box: " + name);
        this.refName.current.focus();
    }
    render() {
        return (
            <>
                <h2>Ref Demo</h2>
                <label>Enter your name:
                    <input type="text" ref={this.refName} /><br /><br />
                </label>
                <button onClick={() => this.retrieve()} >Retrieve name and display</button>
            </>
        );
    }
}