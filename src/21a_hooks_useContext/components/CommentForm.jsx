import React, { useState } from "react";

// Presentation Component - No interaction with store or model
const CommentForm = (props) => {
    const [comment, setComment] = useState({ author: '', text: ''});

    const onSubmit = (event) => {
        event.preventDefault();    // To avoid page reload
        props.onSave(comment);
    }
    return (
            <form>
                <h1>Add Comment</h1>
                <label>
                    Author:
                    <input type="text" onInput={e => setComment({...comment, author: e.target.value})} defaultValue={comment.author} />
                </label>
                <br/><br/>
                <label>
                    Comment Text:
                    <input type="text" onInput={e => setComment({...comment, text: e.target.value})} defaultValue={comment.text} />
                </label>
                <br/><br/>
                <input type="submit" value="Save" onClick={(e) => onSubmit(e)} />
            </form>
        );
}

export default CommentForm;