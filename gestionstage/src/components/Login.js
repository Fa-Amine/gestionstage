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
    Checkbox,
    Toast,
    Toaster,
    VStack,
    
  } from '@chakra-ui/react'

import { useState } from 'react';
import axios from 'axios'; 


import { Form, data, useNavigate } from 'react-router-dom';

  export default function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response= await axios.post(
          "http://localhost:5001/auth/login",
          formData
        );
        setFormData({ email: "", password: "" });
        localStorage.setItem("usertoken", JSON.stringify(response.data.jwt));
        navigate("/profile");
      } catch (error) {
        console.error("Error:", error);
      }
    };
    


    return (
        
      <Flex height={"50%"} justifyContent={"space-around"} mt="50px" padding={"50"}>
        <Image w={"1/3"} src="/Images/upfimg.png" />
        <VStack 
          h="500px"
          rounded="l3"
          width="30%"
          color="black"
          justifyContent={"center"}
          justifyItems={"center"} 
        >
          <Heading alignSelf={"self-start"} mt="30px" fontSize={"30px"}>
            Bienvenue
          </Heading>
          <Grid as={"form"} onSubmit={handleSubmit} w="full" justifyItems={'flex-start'} templateColumns="repeat(2, 1fr)" >
            <Text>Email</Text>

            <Input name="email" value={formData.email} onChange={(e)=>{
              setFormData({...formData, email:e.target.value})
            }} mb={"5"} rounded={'3xl'} placeholder="Votre Email" />
            <Text >Mot de passe</Text>

            <Input defaultValue={formData.password}  onChange={(e)=>{
              setFormData({...formData, password:e.target.value})
            }} type='password' rounded={'3xl'} placeholder="Votre mot de passe ici" />
            
            <Button w={"95%"}  type="submit" rounded={'2xl'} mt = "20px" colorPalette="cyan" variant="solid" >Se connecter</Button> 
            <Button w={"full"} onClick={() => navigate("/signup")} rounded={'2xl'} mt = "20px" colorPalette="cyan" variant="solid">S'inscrire</Button>
          </Grid>
        </VStack>
      </Flex>
    );


  }
