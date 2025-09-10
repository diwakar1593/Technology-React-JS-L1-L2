import React from "react";
import Comment from "./Comment";
import CommentApi from "../data/CommentApi";
import { CommentContext } from "./CommentContext";

const CommentList = () => {
    const commentContextVal = useContext(CommentContext);
    const deleteComment = async (id) => {
        await CommentApi.deleteComment(id);
        commentContextVal.deleteComment(id);
    }

    const getCommentNodes = () => {
        const commentNodes = commentContextVal && commentContextVal.comments.map(comment => {
            return (
                <Comment key={comment.id} id={comment.id} author={comment.author} onDelete{(id) => deleteComment(id)}>
                    {comment.text}
                </Comment>
            )
        })
        return commentNodes;
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Comment</th>
                    </tr>
                </thead>
                <tbody>
                    <CommentConsumer>
                        {getCommentNodes(commentContextVal)}
                    </CommentConsumer>
                </tbody>
            </table>
        </div>
    );
}
export default CommentList;