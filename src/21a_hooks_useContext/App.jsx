import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AllCommentsPage from "./components/AllCommentsPage";
import AddCommentPage from "./components/AddCommentpage";
import { CommentProvider } from "./components/CommentContext";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AllCommentsPage/>
    },
    {
        path: "/addComment",
        element: <AddCommentPage/>
    }
]);

const App = () => {
    return (
        <CommentProvider>
            <RouterProvider router={router} />
        </CommentProvider>
    )
}
export default App;