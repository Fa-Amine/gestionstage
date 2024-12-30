import { Badge, Box, Button, Flex, FormControl, FormLabel, Grid, Heading,Image,Input,Text, VStack } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import LogoutButton from "../components/LogoutButton";
import LinkProfile from "../components/ui/LinkProfile";

function Profile() {
    const { user, setUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);

    const renderRoleContent = () => {
        if (!user) return "loading...";
        switch (user.role) {
            case "ROLE_STAGIAIRE":
                return Stagiareprofile();
            case "ROLE_ADMIN":
                return Gestionnaireprofile(); 
            case "ROLE_ENCADRANT":
                return Encadrantprofile();
            default:
                return <Text>Role not recognized.</Text>;
        }
    };

    return (
        <Box minHeight={400} w={"90%"} margin={"auto"} p={10}>
            <Flex w={"full"} justifyContent={"space-between"} alignItems={"center"}> 
            <Heading fontSize={40}>
                <Text>Profile {user.role == "ROLE_STAGIAIRE" ? "Stagiaire" : user.role == "ROLE_ADMIN" ? "Gestionnaire" : "Encadrant" }</Text>
                {
                    user.role == "ROLE_STAGIAIRE" ? 
                    <Badge colorPalette={user.accStatus ? "green" : "orange"}>
                        {user.accStatus ? "Compte validé" : "Compte non-validé"}
                    </Badge>
                    : ""
                }
            </Heading>
            <LogoutButton />
            </Flex>
            {renderRoleContent()}
        </Box>
                
    );
}

function Stagiareprofile(){
    const {user} = useContext(AuthContext);
    return(
        <>
            <Flex w={"full"} mt={10} h={"100vh"} alignItems={"flex-start"} justifyContent={"space-around"} gap={6}>
                {/* <Box> */}
                <VStack flex={1}>
                    <FormControl>
                        <FormLabel>ID</FormLabel>
                        <Input readOnly value={user.id}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Nom Complet</FormLabel>
                        <Input readOnly value={user.nomComplete}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Numéro Etudiant</FormLabel>
                        <Input readOnly value={user.n_Etudiant}/>
                    </FormControl>
                </VStack>
                {/* </Box> */}
                <Grid flex={1} h={"31.5%"} templateColumns="repeat(1, 1fr)" gap="6">
                    <LinkProfile role={"ROLE_STAGIAIRE"}  textContent={"Gérer un stage"} iconSrc={"stagiaire.png"} />
                    <LinkProfile pathname={"/declarerStage"} role={"ROLE_STAGIAIRE"}  textContent={"Déclarer un stage"} iconSrc={"traineeship.png"} />
                </Grid>
            </Flex>
        </>
        );
}

function Encadrantprofile(){
    const {user} = useContext(AuthContext);

    return(
        <>
            <Flex w={"full"} mt={10} h={"100vh"} alignItems={"flex-start"} justifyContent={"space-around"} gap={6}>
                {/* <Box> */}
                <VStack flex={1} >
                    <FormControl>
                        <FormLabel>ID</FormLabel>
                        <Input readOnly value={user.id}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Nom Complet</FormLabel>
                        <Input readOnly value={user.nomComplete}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input readOnly value={user.email}/>
                    </FormControl>
                </VStack>
                {/* </Box> */}
                    <Grid flex={1} h={"15%"} templateColumns="repeat(1, 1fr)" gap="6">
                        <LinkProfile role={"ROLE_ENCADRANT"}  textContent={"Suivre un stage"} iconSrc={"stagiaire.png"} />
                    {/* <LinkProfile role={"ROLE_ENCADRANT"}  textContent={"Déclarer un stage"} iconSrc={"traineeship.png"} /> */}
                </Grid>
            </Flex>
        </>


       
    );
}

function Gestionnaireprofile(){
    const { user } = useContext(AuthContext);

    return(
        <>
            <Flex w={"full"} mt={10} h={"100vh"} alignItems={"flex-start"} justifyContent={"space-around"} gap={6}>
                {/* <Box> */}
                <VStack flex={1} >
                    <FormControl>
                        <FormLabel>ID</FormLabel>
                        <Input readOnly value={user.id}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>NomComplet</FormLabel>
                        <Input readOnly value={user.nomComplete}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input readOnly value={user.email}/>
                    </FormControl>
                </VStack>
                {/* </Box> */}
                <Grid flex={1} h={"31.5%"} templateColumns="repeat(2, 1fr)" gap="6">
                    <LinkProfile pathname={"/gestionStagiaires"} role={"ROLE_ADMIN"} textContent={"Gestion des stagiaires"} iconSrc={"stagiaire.png"} />
                    <LinkProfile pathname={"/gestionStages"} role={"ROLE_ADMIN"} textContent={"Validation des Stages"} iconSrc={"stagiaire.png"} />
                    <LinkProfile role={"ROLE_ADMIN"} textContent={"Organization des Soutenances"} iconSrc={"stagiaire.png"} />
                    <LinkProfile role={"ROLE_ADMIN"} textContent={"Affectater un encadrant"} iconSrc={"stagiaire.png"} />
                </Grid>
            </Flex>
        </>

    );
}

function LogOut(navigate){
    localStorage.clear();
    navigate("/");
}

export default Profile;