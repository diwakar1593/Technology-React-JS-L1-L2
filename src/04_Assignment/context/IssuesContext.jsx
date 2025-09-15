import React, { createContext, useEffect, useState } from "react";
import IssuesApi from "../api/IssuesApi";

export const IssuesContext = createContext();

export const IssuesProvider = ({ children }) => {
    const [issues, setIssues] = useState([]);

    useEffect(() => {
        loadIssues();
    }, []);

    const loadIssues = async () => {
        try {
            const data = await IssuesApi.getAllIssues();
            console.log("Fetched issues from API:", data);
            setIssues(data);
        } catch (err) {
            console.error("Failed to fetch issues", err);
        }
    };

    const addIssue = async (issue) => {
        try {
            await IssuesApi.saveIssue(issue);   // POST new issue
            await loadIssues();                 // Force GET latest issues
        } catch (err) {
            console.error("Failed to add issue", err);
        }
    };

    return (
        <IssuesContext.Provider value={{ issues, addIssue }}>
            {children}
        </IssuesContext.Provider>
    );
};
