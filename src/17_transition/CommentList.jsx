import React from "react";
import Comment from './Comment';

export default class CommentList extends React.Component {
    render() {
        const commentNodes = this.props.comments.map( comment => {
            return (
                <Comment key={comment.id} id={comment.id} author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Author</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {commentNodes}
                    </tbody>
                </table>
            </div>
        );
    }
}