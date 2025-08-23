import React from "react";

export default class Counter extends React.Component {
    constructor(props) {
        super(props);

        // Initializing state with a default count value of 0
        this.state = {
            count: 0
        };
    }

  /**
   * incrementCounter
   * ----------------
   * Method to increase the count by 1.
   * setState() updates the state and re-renders the component.
   */
    incrementCounter = () => {
        this.setState({count: this.state.count +1});
    };

  /**
   * decrementCounter
   * ----------------
   * Method to decrease the count by 1.
   * Each click will update the state and re-render the counter.
   */
    decrementCounter = () => {
        this.setState({count: this.state.count - 1});
    };

    render() {
        return (
            <>
                {/* Heading for the component */}
                <h1>Counter Demo</h1>
                {/* Displaying the current counter value */}
                <h2>Counter: {this.state.count}</h2>
                {/* Increment button - Increases count by 1 */}
                <button onClick={this.incrementCounter}>Increment Counter</button>
                {/* Decrement button - Decreases count by 1 */}
                <button onClick={this.decrementCounter}>Decrement Counter</button>
            </>
        );
    }
}