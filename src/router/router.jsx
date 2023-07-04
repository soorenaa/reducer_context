import { createBrowserRouter } from "react-router-dom";


// import { Search, ImageBox } from "../components/index";
// import MainLayout from "../layout/MainLayoute";
import App from "../App";
import SinglePost from "../components/singlepost/SinglePost";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App pageTitle={'صفحه اصلی'} />,
        errorElement: <h2>گشتم نبود نگرد نیست </h2>,
    },
    {
        path: "/singlepost/:id",
        element: <SinglePost />
    }
]);