import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllCommentsPage from "./components/AllCommentsPage";
import AddCommentpage from "./components/AddCommentpage";
import { CommentProvider } from "./components/CommentContext";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AllCommentsPage/>
    },
    {
        path: "/addComment",
        element: <AddCommentpage/>
    }
]);

export default class App extends React.Component {
    render() {
        return (
            <CommentProvider>
                <RouterProvider router={router} />
            </CommentProvider>
        )
    }
}