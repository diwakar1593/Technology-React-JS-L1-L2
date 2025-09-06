import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import BootstrapPage from "./components/BootstrapPage";
import ReactstrapPage from "./components/ReactstrapPage";
import ReactbootstrapPage from "./components/ReactbootstrapPage";

class Links extends React.Component {
    render() {
        return (
            <nav>
                <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })} to="/" >
                    Using bootstrap.css
                </NavLink>
                <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })} to="/reactstrap" >
                    Using reactstrap
                </NavLink>
                <NavLink style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })} to="/reactbootstrap" >
                    Using react-bootstrap
                </NavLink>
            </nav>
        );
    }
}

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Links />
                    <Routes>
                        <Route path="/" element={<BootstrapPage />} />
                        <Route path="/reactstrap" element={<ReactstrapPage />} />
                        <Route path="/reactbootstrap" element={<ReactbootstrapPage />} />
                    </Routes>
                </div>
            </Router>
        );
    }
}