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
  import { useNavigate , NavLink, Link } from 'react-router-dom';


export default function Header(){
    const navigate = useNavigate();

    return(
        <Box mt={"5"}>
             <Flex padding={"10"} h={12} alignItems={'center'} justifyContent={'space-between'}>
            <Image src = "Logo.png" w="100px" alt ="Logo" />
        <Flex justifyContent={"space-around"} w="30%">
            
            <Link to={"/"} variant="ghost">Acceuil</Link>
            <Link variant="ghost">Entreprise</Link>
            <Link variant="ghost">Annonces</Link>
            <Link to={"/login"} variant="ghost">Mon Compte</Link>
            
        </Flex>
    </Flex>

    </Box>);





}