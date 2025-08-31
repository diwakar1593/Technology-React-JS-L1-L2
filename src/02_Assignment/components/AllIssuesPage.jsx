import React from "react";
import IssuesList from "./IssuesList";
import IssuesApi from "../data/IssuesApi";

export default class AllIssuesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: []
        };
    }
    componentDidMount() {
        this.setState({ issues: IssuesApi.getAllIssues() });
    }
    render() {
        return (
            <>
                <h1>Issue List</h1>
                <IssuesList issues = { this.state.issues } />
            </>
        );
    }
}