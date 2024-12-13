import { Box, Button, Flex, Grid, HStack, Heading, Image,Text, VStack } from "@chakra-ui/react";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { globalProvider } from "../context/AppContext";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
    const { user, setUser } = useContext(globalProvider);
   
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchProfile() {
            setLoading(true);
            let usertoken = localStorage.getItem("usertoken")
                ? JSON.parse(localStorage.getItem("usertoken"))
                : null;
            console.log(usertoken);
            if (usertoken) {
                try {
                    const { data } = await axios.get("http://localhost:5001/api/users/profile", {
                        headers: {
                            Authorization: `Bearer ${usertoken}`
                        }
                    });
                    setUser(data);
                    setLoading(false);
                } catch (error) {
                    console.log(error.response.message);
                    setLoading(false);
                }
            }
        }
        fetchProfile();
    }, []);

    const renderRoleContent = () => {
        if (!user) return "loading...";
        console.log(user.role);
        switch (user.role) {
            case "ROLE_STAGIAIRE":
                return Stagiareprofile();
            case "ROLE_GESTIONNAIRE":
                return Gestionnaireprofile(); 
            case "ROLE_ENCADRANT":
                return Encadrantprofile();
            default:
                return <Text>Role not recognized.</Text>;
        }
    };

    return (
        <HStack w={"full"} flexDirection={"column"} justifyContent={"center"} justifyItems={"center"}>
            <Heading>Welcome</Heading>
            <Box>
                <Text>{!loading && user ? user.nomComplete : "loading..."}</Text>
                {renderRoleContent()}
                
            </Box>
        </HStack>
    );
}
function Stagiareprofile(){
    return(
        
        
        <Flex margin={'100px'} mt={'50px'} gap={'100px'}>

            <Image w={'50%'} src="/Images/Profile.jpg" />
            <Box>
            <Heading>Bonjour Etudiant Que voulez-vous faire ?</Heading>
            <Grid margin='50px' gap={'10px'}  justifyItems={'flex-start'} templateColumns="repeat(2, 1fr)" >
                <Button as={Link} to="/profile/annoncerstage" w={"100%"} rounded={'2xl'} colorPalette="cyan" variant="solid" >Annoncer un stage</Button>
                <Button as={Link} to="/profile/modifiercompte" w={"100%"} rounded={'2xl'} colorPalette="cyan" variant="solid" >Modifier mon compte</Button>    
                <Button as={Link} to="/profile/demandersoutenance" w={"100%"} rounded={'2xl'} colorPalette="cyan" variant="solid" >Demander soutenance</Button>  
                <Button as={Link} to="/profile/messages" w={"100%"} rounded={'2xl'} colorPalette="cyan" variant="solid" >Boite de messagerie</Button>  
                <Button colorPalette="orange" variant="subtle" rounded={'2xl'}
                    onClick={() => {
                        LogOut();
                    }}
                >
                    LogOut
                </Button>
            </Grid></Box>




        </Flex>
       
        
    );
}
function Encadrantprofile(){
    return(

        <Text>Welcome,Encadrant! Manage your tasks here.</Text>
    );
}
function Gestionnaireprofile(){
    return(

        <Text>Welcome,Gestionnaire! Supervise and review here.</Text>
    );
}
function LogOut(navigate){
    
    localStorage.clear();
    navigate("/");
}

export default Profile;
