import React from "react";
import AboutPage from './AboutPage';
import AllCommentPage from "./AllCommentsPage";
import CommentDetailpage from "./CommentDetailPage";
import { createBrowserRouter, Outlet, RouterProvider, Navigate, NavLink } from "react-router-dom";

const MainNavigation = () => {
    return (
        <nav>
            <NavLink end className={({ isActive }) => "nav-link" + (isActive ? " active " : "" )}  to="/" >
                Comments
            </NavLink>
            <NavLink className={({ isActive }) => "nav-link" + (isActive ? " active " : "" )} to="/about" >
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
    )
}

const router = createBrowserRouter([
    {
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <AllCommentPage />
            },
            {
                path: "/comment/:id",
                element: <CommentDetailpage />
            },
            {
                path: "/about",
                element: <AboutPage />
            }
        ]
    }
])

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App;