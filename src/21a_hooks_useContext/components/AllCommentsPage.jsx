import React, { useContext, useEffect } from "react";
import { CommentContext } from "./CommentContext";
import CommentApi from "../data/CommentApi";
import CommentList from "./CommentList";
import { Link } from "react-router-dom";

const AllCommentsPage = () => {
    const commentContextVal = useContext(CommentContext);

    useEffect(() => {
        async function fetchData() {
            const initialComments = await CommentApi.getAllComments();
            commentContextVal.initComments(initialComments);
        }
        fetchData();
    }, []);

    return (
        <>
            <h1>Comments - Context API (useContext)</h1>
            <CommentList />
            <br/>
            <Link to="/addComment">Add Comment</Link>
        </>
    );
    
}

export default AllCommentsPage;
// AllCommentsPage.contextType = CommentContext;