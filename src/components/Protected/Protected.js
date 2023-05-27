import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  if (!isLoggedIn) {
   
    return <Navigate to="/login" />;
  }
  
  return children;
}

export default ProtectedRoute;
