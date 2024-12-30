import {
  Box,
  Flex,
  Text,
  Button,
  Image,
  Heading,
  Input,
  Grid,
  FormControl,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AppContext";
import Joi from "joi";

export default function Signup() {
  const toast = useToast();
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nomComplete: "",
    email: "",
    filiere: "",
    n_Etudiant: "",
    numeroTelephone: "",
    motDePasse: "",
  });

  const [errors, setErrors] = useState({});

  // Joi validation schema
  const schema = Joi.object({
    nomComplete: Joi.string().min(3).max(50).required().messages({
      "string.empty": "Le nom complet est requis",
      "string.min": "Le nom complet doit contenir au moins 3 caractères",
    }),
    email: Joi.string().email({ tlds: { allow: false } }).required()
    .pattern(/^[a-zA-Z0-9-.]+@upf\.ac\.ma$/).messages({
      "string.empty": "L'email académique est requis",
      "string.email": "L'email doit être valide",
      "string.pattern.base": "L'email doit appartenir au domaine @upf.ac.ma",
    }),
    filiere: Joi.string().min(2).max(50).required().messages({
      "string.empty": "La filière est requise",
      "string.min": "La filière doit contenir au moins 2 caractères",
    }),
    n_Etudiant: Joi.string().min(5).max(20).required().messages({
      "string.empty": "Le numéro d'étudiant est requis",
      "string.min": "Le numéro d'étudiant doit contenir au moins 5 caractères",
    }),
    numeroTelephone: Joi.string()
      .pattern(/^\+212|0[0-9]{9}$/)
      .required()
      .messages({
        "string.empty": "Le numéro de téléphone est requis",
        "string.pattern.base":
          "Le numéro de téléphone doit être au format +212 ou 0 suivi de 9 chiffres",
      }),
    motDePasse: Joi.string().min(6).required().messages({
      "string.empty": "Le mot de passe est requis",
      "string.min": "Le mot de passe doit contenir au moins 6 caractères",
    }),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = schema.validate(formData, { abortEarly: false });
    
    if (error) {
      const validationErrors = {};
      error.details.forEach((detail) => {
        validationErrors[detail.path[0]] = detail.message;
      });
      setErrors(validationErrors);
      return;
    }

    setErrors({}); 

    try {
      const response = await axios.post(
        "http://localhost:5001/auth/signupStagiaire",
        formData
      );
      setFormData({
        nomComplete: "",
        email: "",
        filiere: "",
        n_Etudiant: "",
        numeroTelephone: "",
        motDePasse: "",
      });
      setIsAuthenticated(true);
      localStorage.setItem("usertoken", response.data.jwt);
      window.location.href = "/profile";
    } catch (error) {
        toast({
          title : "L'inscription a echoué",
          description:error.response.data.message,
          status:"error",
          position:"top-right"
        });
    }
  };

  return (
    <Flex
      justifyContent={"space-around"}
      alignItems={"center"}
      gap={20}
      padding={"30"}
    >
      <Image width={"40%"} src="/Images/upfimg.png" />
      <VStack
        flex={1}
        h="500px"
        rounded="l3"
        width="50%"
        color="black"
        justifyItems={"flex-start"}
      >
        <Heading fontSize={"30px"}>
          Creér un compte
        </Heading>
        <Grid
          as={"form"}
          onSubmit={handleSubmit}
          w="full"
          justifyItems={"flex-start"}
          padding={"50px"}
          templateColumns="repeat(2, 1fr)"
          gap={5}
        >
          <FormControl isInvalid={!!errors.nomComplete}>
            <FormLabel>Nom Complet</FormLabel>
            <Input
              _focus={{ border: "#0cae9e solid 1px" }}
              value={formData.nomComplete}
              onChange={handleChange}
              name="nomComplete"
              rounded={"3xl"}
              placeholder="Votre Nom Complet"
            />
            {errors.nomComplete ? (
              <FormErrorMessage>{errors.nomComplete}</FormErrorMessage>
            ) : ""
          }
          </FormControl>

          <FormControl isInvalid={!!errors.n_Etudiant}>
            <FormLabel>Numéro d'étudiant</FormLabel>
            <Input
              _focus={{ border: "#0cae9e solid 1px" }}
              value={formData.n_Etudiant}
              onChange={handleChange}
              name="n_Etudiant"
              rounded={"3xl"}
              placeholder="Votre numéro d'étudiant ici"
            />
            {errors.n_Etudiant ? (
              <FormErrorMessage>{errors.n_Etudiant}</FormErrorMessage>
            ) : "" }
          </FormControl>

          <FormControl isInvalid={!!errors.email}>
            <FormLabel>Email Académique</FormLabel>
            <Input
              _focus={{ border: "#0cae9e solid 1px" }}
              value={formData.email}
              onChange={handleChange}
              name="email"
              rounded={"3xl"}
              placeholder="Email@upf.ac.ma"
            />
            {errors.email ? (
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            ) : ""}
          </FormControl>

          <FormControl isInvalid={!!errors.numeroTelephone}>
            <FormLabel>Numéro de Téléphone</FormLabel>
            <Input
              _focus={{ border: "#0cae9e solid 1px" }}
              value={formData.numeroTelephone}
              onChange={handleChange}
              name="numeroTelephone"
              rounded={"3xl"}
              placeholder="(+212)"
            />
            {errors.numeroTelephone ? (
              <FormErrorMessage>{errors.numeroTelephone}</FormErrorMessage>
            ) : ""}
          </FormControl>

         
          <FormControl isInvalid={!!errors.filiere}>
            <FormLabel>Filière</FormLabel>
            <Input
              _focus={{ border: "#0cae9e solid 1px" }}
              value={formData.filiere}
              onChange={handleChange}
              name="filiere"
              rounded={"3xl"}
              placeholder="Filière"
            />
            {errors.filiere ?  (
              <FormErrorMessage>{errors.filiere}</FormErrorMessage>
              ): ""
            }
          </FormControl>

          
          <FormControl isInvalid={!!errors.motDePasse}>
            <FormLabel>Mot de passe</FormLabel>
            <Input
              _focus={{ border: "#0cae9e solid 1px" }}
              value={formData.motDePasse}
              onChange={handleChange}
              name="motDePasse"
              type="password"
              rounded={"3xl"}
              placeholder="Votre mot de passe ici"
            />
            {errors.motDePasse ? (
              <FormErrorMessage>{errors.motDePasse}</FormErrorMessage>
            ) : ""}
          </FormControl>

          <Flex
            w="full"
            gap={5}
            gridColumn="1 / span 2"
            justifyContent="space-between"
          >
            <Button
              flex={1}
              bg={"#0cae9e"}
              color={"white"}
              _hover={{ bg: "#39b9ad" }}
              rounded={"2xl"}
              type="submit"
              variant="solid"
            >
              S'inscrire
            </Button>
            <Button
              flex={1}
              rounded={"2xl"}
              onClick={() => navigate("/Login")}
              variant="solid"
            >
              J'ai déjà un compte
            </Button>
          </Flex>
        </Grid>
      </VStack>
    </Flex>
  );
}
