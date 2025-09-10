import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CommentApi from "../data/CommentApi";

import CommentForm from "./CommentForm";
import { CommentContext } from "./CommentContext";

// Container Component
const AddCommentPage = () => {
    const navigate = useNavigate();
    const commentContextVal = useContext(CommentContext);

    const saveComment = async (comment) => {
        // F2:
        const newComment = await CommentApi.saveComment(comment);
        commentContextVal.addComment(newComment);
        navigate('/');
    }

    return <CommentForm onSave={(comment) => saveComment(comment)} />;
}

export default AddCommentPage;