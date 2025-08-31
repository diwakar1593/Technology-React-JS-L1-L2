import React from "react";
import Issue from "./Issue";

export default class IssuesList extends React.Component {
    render() {
        let issueRows = this.props.issues.map(issues => (
            <Issue 
                key = {issues.id} 
                id = {issues.id}
                description = {issues.description}
                severity = {issues.severity}
                status = {issues.status}
            />
        ));
        return (
            <>
                <table border="1">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Issue Description</th>
                            <th>Severity</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {issueRows}
                    </tbody>
                </table>
            </>
        );
    }
}