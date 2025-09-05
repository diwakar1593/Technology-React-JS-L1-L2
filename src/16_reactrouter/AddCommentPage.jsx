// Implementation using functional component / React Hooks is much simpler

import React from "react";
import { useNavigate } from 'react-router-dom';     // useNavigate is a React Hook provided by react-router-dom
import CommentForm from './CommentForm';
import CommentApi from './data/CommentApi';


// Container Component is one which interacts with model
// easier one - follow this.

export default () => {
    const navigate = useNavigate();

    const saveComment = (comment) => {
        CommentApi.saveComment(comment); // saving data into model
        navigate('/');
    }
    return (
        <CommentForm onSave={(data) => saveComment(data)} />
    )
}