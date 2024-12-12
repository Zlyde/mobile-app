import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const routes = [
    { path: "/", name: "Login", hidden: false },
    { path: "/logout", name: "Logout", hidden: true },
    { path: "/register", name: "Register", hidden: true },
    { path: "/verify-email", name: "Verify Email", hidden: true },
    { path: "/user-verified", name: "User Verified", hidden: true },
    {
      path: "/request-reset-password",
      name: "Request Password Reset",
      hidden: true,
    },
    { path: "/reset-password", name: "Reset Password", hidden: true },
    { path: "/map", name: "Karta", hidden: false },
    { path: "/rent-bike", name: "Hyr", hidden: false },
    { path: "/return-bike", name: "Avsluta", hidden: false },
  ];

  return (
    <nav className="bottom-nav">
      {routes
        .filter((route) => !route.hidden)
        .map((route) => (
          <Link key={route.path} to={route.path}>
            {route.name}
          </Link>
        ))}
    </nav>
  );
};

export default Navigation;
