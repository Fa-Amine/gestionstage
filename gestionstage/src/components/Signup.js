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
    Image,
    Input,
    Grid,
    Checkbox
  } from '@chakra-ui/react'
  import { useNavigate } from 'react-router-dom';

  export default function Signup(){
    const navigate = useNavigate();
    return(
        <Flex   justifyContent={'center'} mt="10px" padding={"30"}>
        <Box
          h="500px"
          rounded="l3"
          width="50%"
          color="black"
          justifyItems={'flex-start'}
        >
          <Heading ml="30px" mt="30px" mb="30px" fontSize={"30px"}>
            Creér un compte
          </Heading>
          <Grid w="full" justifyItems={'flex-start'} padding={"50px"} templateColumns="repeat(2, 1fr)" >
            <Text>Nom Complet</Text>
            <Input mb={"5"} rounded={'3xl'} placeholder="Votre Nom Complet" />
            <Text >Numero d'etudiant</Text>
            <Input mb={"5"} rounded={'3xl'} placeholder="Votre numero d'etudiant ici" />
            <Text >Email Acadèmique</Text>
            <Input mb={"5"} rounded={'3xl'} placeholder="Email@upf.ac.ma" />
            <Text >Numero de Tel</Text>
            <Input mb={"5"} rounded={'3xl'} placeholder="(+212)" />
            <Text >Mot de passe</Text>
            <Input type='password' mb={"5"} rounded={'3xl'} placeholder="Votre mot de passe ici" />
            <Flex alignItems={'center'} gap= "20px" mt="20px">
            <Button   w={"70%"} rounded={'2xl'} colorPalette="cyan" variant="solid">S'inscrire</Button>
            <Button onClick={() => navigate("/Login")} w={"70%"} rounded={'2xl'} colorPalette="cyan" variant="solid">j'ai deja un compte</Button>
            </Flex>
          </Grid>
          
        </Box>
      </Flex>




    );
  }