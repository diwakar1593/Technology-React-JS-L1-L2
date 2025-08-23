import React from "react";

// React Class Component demonstrating STATE and CONTROLLED COMPONENTS
export default class App extends React.Component {
    constructor(props) {
        super(props);
        // Initializing the component state
        this.state = {
            empname: 'Ram', // Stores employee name
            bManager: false // Boolean to indicate if the user is a Manager
        };
    }

/**
     * handleTextInput
     * ----------------
     * Event handler for the text input field.
     * It updates 'empname' in the state when the user types in the input box.
     * We use 'setState' method to update state in React.
     */
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
    /**
     * handleCheckbox (Correct Way)
     * -----------------------------
     * Updates the 'bManager' value based on the previous state.
     * Why use previous state? Because state updates in React are asynchronous.
     * If you use 'this.state' directly, there might be cases where state is not updated as expected.
     */
    handleCheckbox() {
        this.setState((prevState) =>  ({
            bManager: !prevState.bManager
        }));
    }

    render() {
// Using ternary operator to decide the role text based on 'bManager' value
        let role = this.state.bManager ? "Manager" : "Employee"; 

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