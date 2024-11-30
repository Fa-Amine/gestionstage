import { Box, Button, HStack, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { globalProvider } from "../context/AppContext";

function Profile() {
    const {user, setUser} = useContext(globalProvider);
    const [loading, setLoading] = useState(false);
    useEffect( () => {
        async function fetchProfile() {
            setLoading(true);
            let usertoken = localStorage.getItem("usertoken") ? JSON.parse(localStorage.getItem("usertoken")) : null;
            console.log(usertoken);
            if (usertoken) {
                try {
                    const { data } = await axios.get("http://localhost:5001/api/users/profile",
                    {
                        headers:{
                            Authorization:`Bearer ${usertoken}`
                        }
                    }
                    )
                setUser(data);

                setLoading(false);
                } catch (error) {
                    console.log(error.response.message);
                }
            }
        }
        fetchProfile();
    }
    ,[]
    )
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
                    }}>LogOut</Button>
            </Box>
        </HStack>

    );
}

export default Profile;