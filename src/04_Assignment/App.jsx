import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import IssuesPage from "./pages/IssuesPage";
import IssueDetail from "./pages/IssueDetail";
import About from "./pages/About";
import AddIssue from "./pages/AddIssue";
import { IssuesProvider } from "./context/IssuesContext";

// Navigation Component
function Navigation() {
  const location = useLocation();

  return (
    <nav style={{ marginBottom: "20px" }}>
      <Link
        to="/about"
        style={{
          marginRight: "10px",
          color: location.pathname === "/about" ? "red" : "black",
        }}
      >
        About
      </Link>
      <Link
        to="/issues"
        style={{
          marginRight: "10px",
          color: location.pathname.startsWith("/issues") ? "red" : "black",
        }}
      >
        Issues
      </Link>
    </nav>
  );
}

export default function App() {
  return (
    <IssuesProvider>
      <Router>
        <>
          <Navigation />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/issues" element={<IssuesPage />} />
            <Route path="/issues/:id" element={<IssueDetail />} />
            <Route path="/add-issue" element={<AddIssue />} />
          </Routes>
        </>
      </Router>
    </IssuesProvider>
  );
}
