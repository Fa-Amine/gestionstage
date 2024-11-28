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
    Image
  } from '@chakra-ui/react'
  import { useNavigate , NavLink } from 'react-router-dom';


export default function Header(){
    const navigate = useNavigate();

    return(
        <Box mt={"5"}>
             <Flex padding={"10"} h={12} alignItems={'center'} justifyContent={'space-between'}>
            <Image src = "Logo.png" w="100px" alt ="Logo" />
        <div>
            <Button onClick={() => navigate("/")} variant="ghost">Acceuil</Button>
            <Button variant="ghost">Entreprise</Button>
            <Button variant="ghost">Annonces</Button>
            <Button onClick={() => navigate("/login")} variant="ghost">Mon Compte</Button>
            
        </div>
    </Flex>

    </Box>);





}