import { createBrowserRouter } from "react-router"


import Home from "../pages/Home/Home"
import Root from "../root/Root"
import About from "../pages/About/About"



const router = createBrowserRouter([
    {
        path: "/",
        Component:Root,
        // errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                index:true,
                path:'/',
                Component:Home,  
            },
              
        ]
      },
])

export default router