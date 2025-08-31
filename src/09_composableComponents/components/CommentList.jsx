import React from "react";
import Comment from "./Comment";

export default class CommentList extends React.Component {
    render() {
        let commentNotes = this.props.comments.map(comment => (
            <Comment key={comment.id} author={comment.author}>
            {comment.text}
            </Comment>
        ));
        return (
            <>
                <table border="1" >
                    <thead>
                        <tr>
                            <th>Author</th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {commentNotes}
                    </tbody>
                </table>
            </>
        );
    }
}