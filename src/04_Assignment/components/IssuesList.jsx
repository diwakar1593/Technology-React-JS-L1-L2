import React, {useContext} from "react";
import { IssuesContext } from "../context/IssuesContext";
import { useNavigate } from "react-router-dom";

export default function IssuesList() {
    const { issues } = useContext(IssuesContext);
    const navigate = useNavigate();

    const handleView = (id) => {
        if(window.confirm("Are you sure you want to view details?")) {
            navigate(`/issues/${id}`);
        }
    };

      if (!issues || issues.length === 0) {
            return <p>No issues found.</p>;
        }
        
    return (
        <table border="1">
            <thead >
                <tr>
                    <th>Issue Description</th>
                    <th>Severity</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {issues.map((issue) => (
                    <tr key = {issue.id}>
                        <td>
                            <a 
                                href="#" 
                                onClick={(e) => { e.preventDefault(); handleView(issue.id); }} 
                                >
                                {issue.description}
                            </a>
                        </td>
                        <td>{issue.severity}</td>
                        <td>{issue.status}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
