import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AppContext";
import { Spinner } from "@chakra-ui/react";

const PublicRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) return <Spinner color="blue.500" borderWidth="4px" />;
  return isAuthenticated ? <Navigate to="/" /> : children;
};

export default PublicRoute;
