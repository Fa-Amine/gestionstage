import {
    Box,
    Flex,
    Text,
    Button,
    Heading,
    Image
  } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom';

  export default function Main(){
    const navigate = useNavigate();
    return(
        <>
            <Flex fontFamily={"zeitung, sans-serif"} mt="15px" w={"80%"} margin={"auto"} gap={10} justifyContent={"space-between"} alignItems={"flex-start"}>  
                <Box mt="80px" minW="500px" >
                    <Heading textAlign={"left"} fontFamily={"zeitung, sans-serif"} fontWeight={"700"} mb= "10px" fontSize={"36px"}>
                    Choisissez votre voie, votre secteur, votre choix, votre avenir.
                    </Heading>
                    <Text fontSize={"20px"} fontWeight="400" color={"#b2b2b2"} lineClamp="2">
                        Avez-Vous une préference en un secteur
                        d'activité particulier ?
                        Selectioner directement les entreprise en 
                        fonction
                        de votre domaine de prédilection.
                    </Text>
                    <Button onClick={() => navigate("/login")} mt = "20px" colorPalette="teal" variant="solid">Postuler Maintenant !</Button>
                </Box>
                
                {/* <Box> */}
                <Image w={"50%"} sizes="(max-width: 480px) 588px, (max-width: 1279px) 1176px, 1764px" src="/Images/Acceuil.png" />
                {/* </Box> */}
            </Flex>



       
        
        

        </>
    );



  }