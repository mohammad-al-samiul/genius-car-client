/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  let location = useLocation();
  if (loading) {
    return <div>loading...</div>;
  }
  if(!user && user?.uid){
    return <Navigate to={'/login'} state={{ from: location }} replace />
  }
  return children;
};

export default PrivateRoutes;
