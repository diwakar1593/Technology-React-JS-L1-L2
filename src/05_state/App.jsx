import React from "react";

// State concept (Also, Controlled Components used here)
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            empname: 'Ram',
            bManager: false
        };
    }

    handleTextInput(e) {
        this.setState({ empname: e.target.value }) // To setState, we are providing object as parameter
    }

    // Wrong way - 90% cases it will work, some cases it will not work
/*
    handleCheckbox() {
        this.setState({ bManager: !this.state.bManager })
    }
*/

    // Correct way for setting state based on previous state value = Through Arrow function
    handleCheckbox() {
        this.setState((prevState) =>  ({
            bManager: !prevState.bManager
        }));
    }

    render() {
        let role = this.state.bManager ? "Manager" : "Employee"; //  ternary operator

        return (
            <>
                <h2>State Demo</h2>
                <div>
                    <label>
                        Employee Name:
                        <input type="text" onInput={(e) => this.handleTextInput(e)} defaultValue={this.state.empname} />
                    </label>
                    <label>
                        <input type="checkbox" onChange={() => this.handleCheckbox()} defaultChecked={this.state.bManager} />
                        Manager
                    </label>
                </div>
                <p>{this.state.empname} is {role}</p>
            </>
        );
    }
}