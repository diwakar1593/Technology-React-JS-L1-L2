import React from "react";

export default class Comment extends React.Component {
    render() {
        return (
            <tr>
                <td>{ this.props.author }</td>
                <td>{ this.props.children }</td>
            </tr>
        );
    }
}