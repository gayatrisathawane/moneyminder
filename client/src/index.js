import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './view/Home/Home.js'
import Signup from './view/Signup/Signup.js'
import Login from './view/Login/Login.js'
import Mytransaction from './view/Mytransaction/Mytransaction.js'
import Addtransacation from './view/Addtransaction/Addtransacation';



const router = createBrowserRouter([
  {
    path: "/",
    element:<Home/>,
  },
  {
    path: "/signup",
    element:<Signup/>

  },
  {
    path: "/login",
    element:<Login/>

  },
  {
    path: "/mytransacation",
    element:<Mytransaction/>

  },
  {
    path: "/addtransaction",
    element:<Addtransacation/>

  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);


