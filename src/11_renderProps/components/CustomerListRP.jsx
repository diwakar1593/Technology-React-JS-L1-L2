import React, { Component } from 'react';

class CustomerListRP extends Component {
    constructor(props){
        super(props);
        this.refName = React.createRef();
    }
    render() {
        const { items, addItem } = this.props;
        let itemList = items.map(( item, index ) => (
            <li key={index}>{ item }</li>
        ))
        return (
            <>
                <h2>{this.props.heading}</h2>
                <label>
                    Enter customer name:
                    <input type='text' ref={this.refName} />
                </label>
                <button onClick={() => addItem(this.refName.current.value)}>Add Customer (RP)</button>
                <ul>
                    {itemList}
                </ul>
            </>
        )
    }
}

export default CustomerListRP