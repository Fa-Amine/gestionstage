import React, { useContext } from "react";
import { AuthContext } from "../context/AppContext";
import { Button } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";

const LogoutButton = () => {
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("usertoken");
    setIsAuthenticated(false);
    window.location.href = "/login";
  };

  return <Button leftIcon={<FiLogOut />} onClick={handleLogout}>Logout</Button>;
};

export default LogoutButton;
