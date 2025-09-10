import React from "react";

export default class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    onDelete(event) {
        event.preventDefault();
        this.props.onDelete(this.props.id);
    }

    render() {
        return (
            <tr>
                <td>{this.props.author.toUpperCase()}</td>
                <td>{this.props.children}</td>
                <td><a href="about:blank" onClick={(e) => this.onDelete(event)}>Delete</a></td>
            </tr>
        );
    }
}