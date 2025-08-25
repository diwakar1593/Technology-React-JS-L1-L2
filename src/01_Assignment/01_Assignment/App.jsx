import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    // INITIALIZING STATE WITH A DEFAULT COUNT VAULE OF 0
    this.state = {
      count: 0,
    };
  }

  // METHOD TO INCREMENT THE COUNTER VAULE BY 1
  incrementCounter = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // METHOD TO DECREMENT THE COUNTER VAULE BY 1
  decrementCounter = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <>
        <h1>Counter Demo</h1>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.incrementCounter}>Increment Counter</button>
        <button onClick={this.decrementCounter}>Decrement Counter</button>
      </>
    );
  }
}
