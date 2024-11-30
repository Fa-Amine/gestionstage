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
  import axios from 'axios'; 
  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';

  export default function Signup(){
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      nomComplete:"",
      n_student:"",
      email: "",
      numeroTelephone:"",
      filiere:"",
      motDePasse: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value, // Ensure the correct field is updated
      }));
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post(
          "http://localhost:5001/api/login",
          formData
        );
        setFormData({ email: "", password: "" , tel:"" , n_student:"" , filiere:"" ,nomComplete:""});
        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };




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
          <Grid as={"form"} onSubmit={handleSubmit} w="full" justifyItems={'flex-start'} padding={"50px"} templateColumns="repeat(2, 1fr)" >
            <Text>Nom Complet</Text>
            <Input value={formData.nomComplete} onChange={handleChange} name="nomComplete" mb={"5"} rounded={'3xl'} placeholder="Votre Nom Complet" />
            <Text >Numero d'etudiant</Text>
            <Input value={formData.n_student} onChange={handleChange} name="n_student" mb={"5"} rounded={'3xl'} placeholder="Votre numero d'etudiant ici" />
            <Text >Email Acadèmique</Text>
            <Input value={formData.email} onChange={handleChange} name="email" mb={"5"} rounded={'3xl'} placeholder="Email@upf.ac.ma" />
            <Text >Numero de Tel</Text>
            <Input value={formData.numeroTelephone} onChange={handleChange} name="numeroTelephone" mb={"5"} rounded={'3xl'} placeholder="(+212)" />
            <Text >Filiere</Text>
            <Input value={formData.filiere} onChange={handleChange} name="filiere" mb={"5"} rounded={'3xl'} placeholder="Filiere" />
            <Text >Mot de passe</Text>
            <Input value={formData.motDePasse} onChange={handleChange} name="motDePasse" type='password' mb={"5"} rounded={'3xl'} placeholder="Votre mot de passe ici" />
            <Flex alignItems={'center'} gap= "20px" mt="20px">
            <Button type='submit'  w={"70%"} rounded={'2xl'} colorPalette="cyan" variant="solid">S'inscrire</Button>
            <Button onClick={() => navigate("/Login")} w={"70%"} rounded={'2xl'} colorPalette="cyan" variant="solid">j'ai deja un compte</Button>
            </Flex>
          </Grid>
          
        </Box>
      </Flex>




    );
  }