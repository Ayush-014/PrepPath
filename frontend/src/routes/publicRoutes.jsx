import React from "react";
import "../index.css";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import AuthRedirect from "../pages/auth/AuthRedirect";
import Home from "../components/common/Home";
import ContactUs from "../components/common/ContactUs";
import AboutUs from "../components/common/AboutUs";


const publicRoutes = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/signup",
    element: (
      <AuthRedirect>
        <Signup />
      </AuthRedirect>
    )
  },
  {
    path: "/login",
    element: (
      <AuthRedirect>
        <Login />
      </AuthRedirect>
    )
  },
  {
    path: "/ContactUs",
    element: (
        <ContactUs />
    )
  },
  {
  path: "/AboutUs",
  element: <AboutUs />
}
,
  {
    path: "*",
    element: (
      <div className="text-center mt-20 text-xl font-semibold">
        404 - Page Not Found
      </div>
    )
  }
];

export default publicRoutes;
