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
<<<<<<< HEAD
import { useNavigate , NavLink } from 'react-router-dom';
=======
  import { useNavigate , NavLink, Link } from 'react-router-dom';
>>>>>>> fd36a2a77f8d894c008bd54927205c51dffb838d


export default function Header(){
    const navigate = useNavigate();

    return(
        <Box mt={"5"}>
<<<<<<< HEAD
            <Flex padding={"10"} h={12} alignItems={'center'} justifyContent={'space-between'}>
                <Image src = "Logo.png" w="100px" alt ="Logo" />
                <div>
                    <Button onClick={() => navigate("/")} variant="ghost">Acceuil</Button>
                    <Button variant="ghost">Entreprise</Button>
                    <Button variant="ghost">Annonces</Button>
                    <Button onClick={() => navigate("/login")} variant="ghost">Mon Compte</Button>
                </div>
            </Flex>
        </Box>
);
=======
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




>>>>>>> fd36a2a77f8d894c008bd54927205c51dffb838d

}