import {
    createBrowserRouter,
  
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import ErrorPage from "../pages/errorpage/ErrorPage";
import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import Dashboard from "../layouts/dashboard/Dashboard";
import Cart from "../pages/dashboard/cart/Cart";
import AddTask from "../pages/addTask/AddTask";
import UserDashboard from "../pages/dashboard/userDashboard/UserDashboard";
import PrivateRoute from "./PrivateRoute";
import UpdateTask from "../pages/UpdateTask";
  
  
 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
         
        },
        {
          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path: '/about',
          element:<About></About>
        },
        
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
  
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children:[
        {
          path:'userdashboard',
          element:<PrivateRoute><UserDashboard></UserDashboard></PrivateRoute>
        },
        {
          path:'addtask',
          element:<PrivateRoute><AddTask></AddTask></PrivateRoute>

        },
        {
          path: '/updatetask/:Id',
          element: <PrivateRoute><UpdateTask></UpdateTask></PrivateRoute>,
          loader: ({ params }) => fetch(`server-site-task-management-platform.vercel.app/addtask/${params.Id}`)
  
        },

      ]
    }
  
  ]);
  export default router;