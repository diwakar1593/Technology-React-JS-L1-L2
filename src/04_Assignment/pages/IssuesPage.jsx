import React from "react";
import IssuesList from "../components/IssuesList";
import { Link } from "react-router-dom";

export default function IssuesPage() {
  return (
    <>
      <h2>Issues List</h2>
      <IssuesList />
      <br />
      <Link to="/add-issue">Add Issue</Link>
    </>
  );
}