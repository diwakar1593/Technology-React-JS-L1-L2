import React from "react";

const Comment = (props) => {
    const onDelete = (event) => {
        event.preventDefault();
        props.onDelete(props.id);
    }

    return (
        <tr>
            <td>{props.author.toUpperCase()}</td>
            <td>{props.children}</td>
            <td><a href="about:blank" onClick={(e) => onDelete(e)}>Delete</a></td>
        </tr>
    );
}
export default Comment;