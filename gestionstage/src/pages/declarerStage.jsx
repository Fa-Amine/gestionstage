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
  FormErrorMessage,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import Joi from "joi";
import FileUploadDropzone from "../components/FileUploadZone";
import axios from "axios"; // Import axios
import api from "../api";

export default function DeclarerStage(props) {
  const toast = useToast();
  const { setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    type: "PFA",
    status: true,
    nomEntreprise: "",
    domainEntreprise: "",
    dateDebut: "",
    dateFin: "",
    files: [], 
  });

  const validatePdfFiles = (files, helpers) => {
    const validMimeTypes = ["application/pdf"];
    const validExtensions = [".pdf"];
  
    // Loop through each file and validate
    for (let file of files) {
      // Check MIME type
      if (!validMimeTypes.includes(file.type)) {
          return helpers.message(`${file.name} doit être au format PDF`);
      }
  
      // Check file extension
      const fileExtension = file.name.split('.').pop().toLowerCase();
      if (!validExtensions.includes(`.${fileExtension}`)) {
        return helpers.message(`${file.name} doit être au format PDF`);
      }
    }
  
    // If all files are valid, return the files
    return files;
  };
  

  const [errors, setErrors] = useState({});

  // Joi validation schema
  const schema = Joi.object({
    status: Joi.optional(),
    type: Joi.string().min(3).max(50).required().messages({
      "string.empty": "Le type du stage est requis",
      "string.min": "Le type du stage doit contenir au moins 4 caractères",
    }),
    nomEntreprise: Joi.string().min(3).max(50).required().messages({
      "string.empty": "Le nom de l'entreprise est requis",
      "string.min": "Le nom de l'entreprise doit contenir au moins 3 caractères",
    }),
    domainEntreprise: Joi.string().min(2).max(50).required().messages({
      "string.empty": "Le domaine de l'entreprise est requis",
      "string.min": "Le domaine de l'entreprise doit contenir au moins 2 caractères",
    }),
    dateDebut: Joi.date().required().messages({
      "date.base": "La date de début est requise",
    }),
    dateFin: Joi.date().greater(Joi.ref("dateDebut")).required().messages({
      "date.base": "La date de fin est requise",
      "date.greater": "La date de fin doit être après la date de début",
    }),
    files:Joi.optional(),
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

    try {
      const { error } = schema.validate(formData, { abortEarly: false });
    
      if (error) {
        const validationErrors = {};
        error.details.forEach((detail) => {
          validationErrors[detail.path[0]] = detail.message;
        });
        setErrors(validationErrors);
        return;
      }

      if (!formData.files.length) {
        setErrors({ files: "Les fichiers sont requis" });
        return;
      }
      sendData(formData);
    } catch (error) {
      console.log(error.details);
      const errorMessages = {};
      error.details.forEach((detail) => {
        errorMessages[detail.path[0]] = detail.message;
      });
      setErrors(errorMessages);
    }
  };

  const handleFileUpload = (files) => {
    setFormData((prevData) => ({
      ...prevData,
      files: files,
    }));
  
    const validationError = validatePdfFiles(files, {
        message: (msg) => msg, 
    });
  
    if (validationError) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        files: validationError,
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        files: null,
      }));
    }
  };

  // Axios function to send data
  const sendData = async (data) => {
    const formDataToSend = new FormData();
    
    // Append other form fields to FormData
    Object.entries(data).forEach(([key, value]) => {
      if (key !== 'files') {
        formDataToSend.append(key, value);
      }
    });

    // Append the files to FormData
    data.files.forEach((file) => {
      formDataToSend.append("files", file);
    });

    try {
      const response = await api.post("/api/stage/createStage", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data", // Set content type for file upload
        },
      });
      
      if (response.status === 200) {
        toast({
          title: "Success!",
          description: "Votre stage a été ajouté avec succès.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position:"top-right"
        });
        // navigate("/success"); // Redirect to success page (optional)
      }
    } catch (error) {
      console.error("Error sending data:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de l'envoi des données.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex
      justifyContent={"space-around"}
      alignItems={"center"}
      gap={20}
    >
      <Image src="/Images/declarerStage.webp" />
      <VStack
        flex={1}
        h="500px"
        color="black"
      >
        <Heading fontSize={"30px"}>
          Déclarer un stage
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
          <FormControl isInvalid={!!errors.nomEntreprise}>
            <FormLabel>Nom de l'entreprise</FormLabel>
            <Input
              _focus={{ border: "#0cae9e solid 1px" }}
              value={formData.nomEntreprise}
              onChange={handleChange}
              name="nomEntreprise"
              rounded={"3xl"}
              placeholder="Nom de l'entreprise"
            />
            {errors.nomEntreprise ? (
              <FormErrorMessage>{errors.nomEntreprise}</FormErrorMessage>
            ) : (
              ""
            )}
          </FormControl>

          <FormControl isInvalid={!!errors.domainEntreprise}>
            <FormLabel>Domaine de l'entreprise</FormLabel>
            <Input
              _focus={{ border: "#0cae9e solid 1px" }}
              value={formData.domainEntreprise}
              onChange={handleChange}
              name="domainEntreprise"
              rounded={"3xl"}
              placeholder="Domaine de l'entreprise"
            />
            {errors.domainEntreprise ? (
              <FormErrorMessage>{errors.domainEntreprise}</FormErrorMessage>
            ) : (
              ""
            )}
          </FormControl>

          <FormControl isInvalid={!!errors.dateDebut}>
            <FormLabel>Date de début</FormLabel>
            <Input
              _focus={{ border: "#0cae9e solid 1px" }}
              value={formData.dateDebut}
              onChange={handleChange}
              name="dateDebut"
              type="date"
              rounded={"3xl"}
            />
            {errors.dateDebut ? (
              <FormErrorMessage>{errors.dateDebut}</FormErrorMessage>
            ) : (
              ""
            )}
          </FormControl>

          <FormControl isInvalid={!!errors.dateFin}>
            <FormLabel>Date de fin</FormLabel>
            <Input
              _focus={{ border: "#0cae9e solid 1px" }}
              value={formData.dateFin}
              onChange={handleChange}
              name="dateFin"
              type="date"
              rounded={"3xl"}
            />
            {errors.dateFin ? (
              <FormErrorMessage>{errors.dateFin}</FormErrorMessage>
            ) : (
              ""
            )}
          </FormControl>

          <FileUploadDropzone onFileUpload={handleFileUpload} />

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
              Valider
            </Button>
            <Button
              flex={1}
              rounded={"2xl"}
              onClick={() => navigate("/")}
              variant="solid"
            >
              Annuler
            </Button>
          </Flex>
        </Grid>
      </VStack>
    </Flex>
  );
}
