import {
    Flex,
    Button,
    Heading,
    Image,
    Input,
    Grid,
    VStack,
    FormControl,
    FormLabel,
    FormErrorMessage,
    useToast,
    
  } from '@chakra-ui/react'
  
import Joi from "joi";

import {useContext, useState} from 'react';
import {useNavigate } from 'react-router-dom';
import api from '../api';
import { AuthContext } from '../context/AppContext';

export default function Login() {
    const toast = useToast();
    const navigate = useNavigate();
    const {setIsAuthenticated} = useContext(AuthContext)
    const [formData, setFormData] = useState({
      email: "",
      password: "",
    });
    const [errors, setErrors] = useState({});
    const schema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required()
         .pattern(/^[a-zA-Z0-9-.]+@upf\.ac\.ma$/).messages({
           "string.empty": "L'email académique est requis",
           "string.email": "L'email doit être valide",
           "string.pattern.base": "L'email doit appartenir au domaine @upf.ac.ma",
         }),
    });
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error } = schema.validate({email: formData.email}, { abortEarly: false });
        if (error) {
          const validationErrors = error.details.reduce((acc, detail) => {
            acc[detail.path[0]] = detail.message;
            return acc;
          }, {});
  
          setErrors(validationErrors);
          console.log(errors.email);
          
          
          return;
        }

        setErrors({});
        try {
          const response = await api.post("/auth/login", formData);
          localStorage.setItem("usertoken", response.data.jwt);
          setIsAuthenticated(true);
          toast({
              title : "La connexion a réussi",
              status : "success",
              position:"top-right"
          });
          window.location.href = "/profile";
        } catch (error) {
            toast({
                title : "La connexion a échoué",
                description : error.response.data.message,
                status : "error",
                position:"top-right"
            });
        }
    };
    

    return (
        
      <Flex height={"50%"} justifyContent={"space-around"} gap={20} mt="50px" padding={"50"}>
        <Image width={"40%"}  src="/Images/upfimg.png" />
        <VStack 
          flex={1}
          h="500px"
          justifyContent={"center"}
          justifyItems={"center"} 
        >
          <VStack w={"60%"} p={"5"} h={"full"} justifyContent={"center"} gap={10}>
            <Heading alignSelf={"self-start"} fontSize={"30px"}>
              Se connecter
            </Heading>
            <Grid as={"form"} onSubmit={handleSubmit} w="full" gap={2} justifyItems={'flex-start'} templateColumns="repeat(1, 1fr)" >
              <FormControl  isInvalid={!!errors.email}>
                  <FormLabel>Email</FormLabel>
                  <Input _focus={{border:"#0cae9e solid 1px"}} name="email" value={formData.email} onChange={(e)=>{
                    setFormData({...formData, email:e.target.value})
                  }} rounded={'3xl'} placeholder="Votre Email" />
                  {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
              </FormControl>
              <FormControl>
                  <FormLabel>Mot de passe</FormLabel>
                  <Input _focus={{border:"#0cae9e solid 1px"}} defaultValue={formData.password}  onChange={(e)=>{
                    setFormData({...formData, password:e.target.value})
                  }} type='password' rounded={'3xl'} placeholder="Votre mot de passe ici" />
              </FormControl>
              <Button bg={"#0cae9e"} _hover={{bg:"#39b9ad"}} color={"white"} w={"full"} type="submit" rounded={'2xl'} mt = "20px" colorPalette="cyan" variant="solid" >Se connecter</Button> 
              <Button w={"full"} onClick={() => navigate("/register")} rounded={'2xl'} mt = "20px" colorPalette="cyan" variant="solid">S'inscrire</Button>
            </Grid>
          </VStack>
        </VStack>
      </Flex>
    );


  }
