import React from "react";
import { createBrowserRouter, NavLink, Outlet, RouterProvider } from "react-router-dom";

const MainNavigation = () => {
    return (
        <nav>
            <NavLink end style={({ isActive }) => ({ color: isActive ? 'red' : 'black' })} to="/" >
                Comments
            </NavLink>
            <NavLink className={({ isActive }) => "nav-link" + ( isActive ? "active" : "" )} to="/about" >
                About
            </NavLink>
        </nav>
    );
}

const Layout = () => {
    return (
        <>
            <MainNavigation />
            <Outlet />
        </>
    );
}

const router = createBrowserRouter([
    {
        element: <Layout />
    }
])

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;