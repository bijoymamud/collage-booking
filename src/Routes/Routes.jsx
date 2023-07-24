import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../../src/Pages/Home/Home/Home";
import Main from "../Layouts/Main";
import Admission from "../Pages/Admission/Admission";
import Collage from "../Pages/CollageCollection/Collage";
import CollageDetails from "../Pages/CollageDetails/CollageDetails";
import Register from "../Pages/Register/Register";
import LogIn from "../Pages/login/LogIn";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/collage",
        element: <Collage></Collage>
      },

      {
        // path: "/collagedetails/:id",
        // element: <CollageDetails></CollageDetails>,
        // loader: ({ params }) => fetch(`https://collage-booking-server-five.vercel.app/collage${params.id}`)

        path: "/collagedetails/:id",
        element: <CollageDetails></CollageDetails>,
        loader: ({ params }) => fetch(`https://collage-booking-server-five.vercel.app/collage/${params.id}`)
      },
      {
        path: '/admission',
        element: <Admission></Admission>,

      },

      {
        path: '/login',
        element: <LogIn></LogIn>
      },
      {
        path: '/signIn',
        element: <Register></Register>
      }
    ]
  },
]);