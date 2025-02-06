import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Page/Home/Home/Home";
import ProjectDetails from "../Page/Shared/ProjectDetails/ProjectDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'page/:id',
                element: <ProjectDetails />,


            }
        ]
    }
])