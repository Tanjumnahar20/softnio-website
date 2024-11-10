
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path:'/',
          element:<Home></Home>

        },
        // {
        //   path: "/contact",
        //   element: <ContactUs />,
        // },
        // {
        //   path: "/blogs",
        //   element: <Blogs />,
        // },
     
      ],
    },
   ]);

export default router;