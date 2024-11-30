import {
    Box,
    Flex,
    Text,
    IconButton,
    Stack,
    Collapse,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Button,
    image,
    Container,
    Heading,
    Image
  } from '@chakra-ui/react'
import { useContext } from 'react';
  import { useNavigate } from 'react-router-dom';
import { globalProvider } from '../context/AppContext';

  export default function Main(){
    const navigate = useNavigate();
    const {user} = useContext(globalProvider);
    return(
        <>
            
            <Flex mt ="10px" padding={"20"}>  
                <Box mt ="80px" h="100" maxW="500px" justifyContent={'normal'} >
                    <Heading mb= "10px" fontSize={"30px"}>
                        Bienvenue {user ? user.nomComplete : ""}
                    </Heading>
                    <Text fontSize={"16px"} fontWeight="light" lineClamp="2">
                        Avez-Vous une préference en un secteur
                        d'activité particulier ?
                        Selectioner directement les entreprise en 
                        fonction
                        de votre domaine de prédilection.
                    </Text>
                    <Button onClick={() => navigate("/login")} mt = "20px" colorPalette="teal" variant="solid">Postuler Maintenant !</Button>

                </Box>
                <Box>
                    <Image src="/Images/Acceuil.png" />

                </Box>

                

            </Flex>



       
        
        

        </>
    );



  }