import React from "react";
import { Suspense, lazy } from "react"; //  React 16 onwards
import { createBrowserRouter, NavLink, Outlet, RouterProvider, Navigate } from "react-router-dom";
import AboutPage from "./AboutPage";    //  eagerly loading - main chunk
// import AllCommentsPage from "./AllCommentsPage";    //  eagerly loading - main chunk
const AllCommentsPage = lazy(() => import('./AllCommentsPage'));

const MainNavigation = () => {
    return (
        <nav>
            <NavLink end className={({ isActive }) => "nav-link" + (isActive ? " active " : "" )} to="/" >
                About
            </NavLink>
            <NavLink className={({ isActive }) => "nav-link" + ( isActive ? "active" : "" )} to="/comments" >
                Comments
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
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <AboutPage />
            },
            {
                path: "/comments",
                element:
                    <React.Suspense fallback={<h1>Loading, please wait...</h1>}>
                        <AllCommentsPage />
                    </React.Suspense>
            },
        ]
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