import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";


const Navigation = () => {
  const { logout  } = useUserContext()
  const userData = localStorage.getItem('user')
  const user = JSON.parse(userData)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/')
  }

  const routes = [
    { path: "/", name: "Login", hidden: !!user },
    // { path: "/logout", name: "Logout", hidden: !user },
    { path: "/register", name: "Register", hidden: !!user },
    { path: "/verify-email", name: "Verify Email", hidden: true },
    { path: "/user-verified", name: "User Verified", hidden: true },
    {
      path: "/request-reset-password",
      name: "Request Password Reset",
      hidden: true,
    },
    { path: "/reset-password", name: "Reset Password", hidden: true },
    { path: "/map", name: "Hyr", hidden: !user },
    { path: "/ongoing", name: "Pågående", hidden: !user }
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
        { user && (
          <button className="blue-button"
          onClick={handleLogout}
          >
            Logout
          </button>
        )}
    </nav>
  );
};

export default Navigation;
