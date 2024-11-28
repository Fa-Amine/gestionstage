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

  export default function Signup(){
    return(
        <Flex   justifyContent={'center'} mt="50px" padding={"50"}>
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
            <Text>Email</Text>
            <Input mb={"5"} rounded={'3xl'} placeholder="Votre Email" />
            <Text >Mot de passe</Text>
            <Input rounded={'3xl'} placeholder="Votre mot de passe ici" />
            <Flex justifyContent={"center"} gap="10px" mt="20px">
            <Button w={"50%"}rounded={'2xl'} mt = "20px" colorPalette="cyan" variant="solid">Se connecter</Button>
            <Button   w={"50%"} rounded={'2xl'} mt = "20px" colorPalette="cyan" variant="solid">S'inscrire</Button></Flex>
          </Grid>
          
        </Box>
      </Flex>




    );
  }