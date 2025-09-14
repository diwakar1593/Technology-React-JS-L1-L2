import React from "react";
import AllIssuesPage from "./components/AllIssuesPage";
import { BrowserRouter, Link, Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About";

// Functional component for navigation
function Navigation() {
    const location = useLocation();

    return (
        <nav>
            <Link 
                to="/"
                style={{
                    marginRight: "10px",
                    color: location.pathname === "/" ? "red" : "black"
                }}
            >
                About
            </Link>
            <Link 
                to="/issues"
                style={{
                    color: location.pathname === "/issues" ? "red" : "black"
                }}
            >
                Issues
            </Link>
        </nav>        
    );
}

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <>
                    <Navigation />
                    <Routes>
                        <Route path="/" element={<About/>} />
                        <Route path="/issues" element={<AllIssuesPage />} />
                    </Routes>
                </>
            </BrowserRouter>
        );
    }
}

export default App;