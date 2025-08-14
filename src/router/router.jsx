import { createBrowserRouter } from "react-router"
import Home from "../pages/Home/Home"
import Root from "../root/Root"
import Project from "../pages/Project/Project"
import ProjectDetails from "../pages/Project/ProjectDetails"


const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        // errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
            },
            {
                path: "projects",
                Component: Project,
            },
            {
                path: "projects/:name",
                Component: ProjectDetails,
            },

        ]
    },
])

export default router