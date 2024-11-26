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

  export default function Main(){
    return(
        <>

            <Flex mt ="10px" padding={"20"}>  
                <Box mt ="80px" h="100" maxW="500px" justifyContent={'normal'} >
                    <Heading mb= "10px" fontSize={"30px"}>
                        Bienvenue
                    </Heading>
                    <Text fontSize={"16px"} fontWeight="light" lineClamp="2">
                        Avez-Vous une préference en un secteur
                        d'activité particulier ?
                        Selectioner directement les entreprise en 
                        fonction
                        de votre domaine de prédilection.
                    </Text>
                    <Button mt = "20px" colorPalette="teal" variant="solid">Postuler Maintenant !</Button>

                </Box>
                <Box>
                    <Image src="/Images/Acceuil.png" />

                </Box>

                

            </Flex>



       
        
        

        </>
    );



  }