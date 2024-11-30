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
    
  } from '@chakra-ui/react'

import { useContext, useState} from 'react';
import axios from 'axios';

import { Form, useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
      email: "",
      password: "",
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
          "http://localhost:8080/api/login",
          formData
        );
        setFormData({ email: "", password: "" });
        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error:", error);
      } 
    };
    const context = useContext(globalContext);
    

    return (
        <Flex justifyContent={'center'} mt="50px" padding={"50"}>
          <Box>
              <Image  w="90%" src="/Images/upfimg.png" />
          </Box>
          <Box 
            h="500px"
            rounded="l3"
            width="50%"
            color="black"
            justifyItems={'flex-start'}
          >
            <Heading ml="30px" mt="30px" mb="30px" fontSize={"30px"}>
              {context}
            </Heading>
            <Grid as={"form"} onSubmit={handleSubmit} w="full" justifyItems={'flex-start'} padding={"50px"} templateColumns="repeat(2, 1fr)" >
              <Text>Email</Text>
              <Input name="email" value={formData.email} onChange={handleChange} mb={"5"} rounded={'3xl'} placeholder="Votre Email" />
              <Text >Mot de passe</Text>
              <Input name="password" value={formData.password} onChange={handleChange} type='password' rounded={'3xl'} placeholder="Votre mot de passe ici" />
              <Flex justifyContent={"center"} gap="10px" mt="20px">
              <Button  type="submit" w={"50%"}rounded={'2xl'} mt = "20px" colorPalette="cyan" variant="solid" >Se connecter</Button>
              <Button  onClick={() => navigate("/signup")} w={"50%"} rounded={'2xl'} mt = "20px" colorPalette="cyan" variant="solid">S'inscrire</Button></Flex>
            </Grid>
            
          </Box>
        </Flex>
    );


  }
