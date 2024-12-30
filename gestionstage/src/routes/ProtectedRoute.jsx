import { useContext } from "react";
import { AuthContext } from "../context/AppContext";
import { Navigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";

const ProtectedRoute = ({ children, roles }) => {
    const { isAuthenticated, user, loading } = useContext(AuthContext);
  
    if (loading) return <Spinner color="blue.500" borderWidth="4px" />;
    if (!isAuthenticated) return <Navigate to="/login" />;
    if (roles && !roles.includes(user.role)) return <Navigate to="/unauthorized" />;
  
    return children;
};

export default ProtectedRoute;