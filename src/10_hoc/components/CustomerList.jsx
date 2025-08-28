import React, { Component } from "react";
import withItem from "./withItem";

class CustomerList extends Component {
    constructor(props) {
        super(props);
        this.refName = React.createRef();
    }
    render() {
        const { items, addItem, heading } = this.props;     // Destructuring concept
        let itemList = items.map((item, index) => (
            <li key={index}>{item}</li>
        ))
        return(
            <>
                <h2>{ heading }</h2>
                <label>
                    Enter customer name:
                    <input type="text" ref={ this.refName } />
                </label>
                <button onClick={() => addItem(this.refName.current.value)}>Add Employee (HOC)</button>
                <ul>
                    {itemList}
                </ul>
            </>
        );
    }
}

export default withItem(CustomerList, 0)