import React from "react";
import { createBrowserRouter, NavLink, Outlet, RouterProvider, Navigate } from "react-router-dom";
import AllCommentsPage from "./AllCommentsPage";
import AboutPage from "./About";
import AddCommentPage from "./AddCommentPage";
import CommentDetailPage from "./CommentDetailPage";
import NotFoundPage from "./NotFound";

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
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <AllCommentsPage />
            },
            {
                path: "/addComment",
                element: <AddCommentPage />
            },
            {
                path: "/comment/:id",
                element: <CommentDetailPage />
            },
            {
                path: "/about",
                element: <AboutPage />
            },
            {
                path: "/about-wipro",
                element: <Navigate to="/about" replace />
            },
            {
                path: "*",
                element: <NotFoundPage />
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