import React from "react";
import CommentList from "./CommentList";
import CommentApi from "../data/CommentApi";

// Server
export default class AllCommentsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }

    
    // ES2017 async await approach
    async componentDidMount() {
        const data = await CommentApi.getAllComments();
        this.setState({ comments: data });
    }
    /*

    componentDidMount() {
        CommentApi.getAllComments() // this is async call going to backend server for data
            .then(data => this.setState({ comments: data}))
    }
            */

    render() {
        return (
            <>
                <h1>Comments</h1>
                <CommentList comments={this.state.comments} />
            </>
        );
    }
}