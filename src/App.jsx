import React from 'react';
import  Navbar  from "./components/navbar/Navbar";
import  Footer  from "./components/footer/Footer";
import  Add  from "./pages/add/Add";
import  Home  from "./pages/home/Home";
import  MyGigs  from "./pages/myGigs/MyGigs";
import  Gigs  from "./pages/gigs/gigs";
import  Gig  from "./pages/gig/Gig";
import  Orders  from "./pages/orders/Orders";
import  Messages  from "./pages/messages/Messages";
import  Message  from "./pages/message/Message";
import  Login  from "./pages/login/Login";
import  Register  from "./pages/register/Register";
import  "./App.scss"
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";



function App() {

  const Layout = ()=> {

    return(
    <div>
  
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>
  )}

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
     children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/gigs",
        element: <Gigs/>
      },
      {
        path: "/gig/:id",
        element: <Gig/>
      },
      {
        path: "/orders",
        element: <Orders/>
      },
      {
        path: "/add",
        element: <Add/>
      },
      {
        path: "/messages",
        element: <Messages/>
      },
      {
        path: "/message/:id",
        element: <Message/>
      },
      {
        path: "/mygigs",
        element: <MyGigs/>
      }
      ,
      {
        path: "/login",
        element: <Login/>
      }
      ,
      {
        path: "/register",
        element: <Register/>
      }
     ]
    },
  ]);
  
  return (
    <div>
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
