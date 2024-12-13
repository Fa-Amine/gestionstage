import { Box, Button, HStack, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { globalProvider } from "../context/AppContext";
import { useNavigate } from "react-router-dom";

export default function Stagiaireprofile(){
    return ( 
        <HStack w={"full"} flexDirection={"column"} justifyContent={"center"} justifyItems={"center"}>
            <Heading>
                    welcome
            </Heading>
            <Box>
                <Text>{
                        !loading && user ? user.nomComplete + " " +user.role : "loading..." 
                    }
                    </Text>
                    <Button onClick={()=>{
                        localStorage.clear();
                        navigate("/");
                        
                    }}>LogOut</Button>
            </Box>
        </HStack>

    );
}
