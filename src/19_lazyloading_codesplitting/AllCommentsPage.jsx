import React from "react";
import CommentList from "./CommentList";
import CommentApi from './data/CommentApi';

export default class AllCommentsPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        this.setState({ comments: CommentApi.getAllComments() });
    }

    render() {
        return (
            <div>
                <h1>Comments</h1>
                <CommentList comments={ this.state.comments } />
            </div>
        );
    }
}