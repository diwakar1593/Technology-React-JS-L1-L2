import React, {useContext} from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IssuesContext } from "../context/IssuesContext";
import { Link } from "react-router-dom";

export default function IssueDetail() {
    const { id } = useParams();
    const { issues } = useContext(IssuesContext);
    const navigate = useNavigate();

    const issue = issues.find((issue) => String( issue.id ) === id);

    if (!issue) {
        return <p>Issue not found</p>;
    }

    return (
        <>
            <h2>Issue Details</h2>
            <p>
            <strong>Issue Description:</strong> {issue.description}
            </p>
            <Link to="/issues">Back</Link>

        </>
    );
}