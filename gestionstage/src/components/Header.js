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

export default function Header(){
    return(
        <Box mt={"5"}>
             <Flex padding={"10"} h={12} alignItems={'center'} justifyContent={'space-between'}>
            <Image src = "Logo.png" w="100px" alt ="Logo" />
        <div>
            <Button variant="ghost">Acceuil</Button>
            <Button variant="ghost">Entreprise</Button>
            <Button variant="ghost">Annonces</Button>
            <Button variant="ghost">Mon Compte</Button>
        </div>
    </Flex>

    </Box>);





}