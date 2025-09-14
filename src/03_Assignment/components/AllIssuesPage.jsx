import React from "react";
import IssuesApi from "../data/IssuesApi";
import IssueList from "./IssueList";

class AllIssuesPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: []
        };
    }

    async componentDidMount() {
        try {
            const issues = await IssuesApi.getAllIssues();
            this.setState({ issues });
        } catch (error) {
            console.log("Error loading issues: ", error);
        }
    }

    render() {
        return (
            <>
                <h3>Issue List</h3>
                <IssueList issues={this.state.issues} />
            </>
        );
    }
}

export default AllIssuesPage