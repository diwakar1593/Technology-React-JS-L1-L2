import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
    addItem = (itemName) => {
        this.setState(prevState => {
            return { items: [...prevState.items, this.props.isUpper ? itemName.toUpperCase() : itemName ] };
        })
    }
    render () {
        return (
            <div>
                { this.props.children( this.state.items, this.addItem )}
            </div>
        )
    }
}

export default Item