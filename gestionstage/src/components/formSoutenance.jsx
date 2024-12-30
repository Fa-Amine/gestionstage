import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Wrap,
  WrapItem,
  Tag,
  TagLabel,
  TagCloseButton,
  useToast,
} from "@chakra-ui/react";
import api from "../api";

export default function FormSoutenance({ stage }) {
  const [soutenance, setSoutenance] = useState({
    date: "",
    salle: "",
    valide: true,
    jury: [],
    stage
  });

  const [juryOptions, setJuryOptions] = useState([]);

  const [minDate, setMinDate] = useState("");
  const toast = useToast();

  const handleFetchNormalUsers = async () => {
    try {
        const { data } = await api.get("/api/users/allNormalUsers");
        
        setJuryOptions(data);
        console.log(juryOptions);
    } catch (error) {
        toast({
            title: "Erreur",
            description: "Une erreur de connexion est survenue",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
    }
  }

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSoutenance((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addJuryMember = (event) => {
    const selectedId = parseInt(event.target.value);
    const selectedMember = juryOptions.find((jury) => jury.id === selectedId);
    console.log("selected", selectedMember);
    
    if (selectedMember && !soutenance.jury.some((jury) => jury.id === selectedId)) {
      setSoutenance((prevState) => ({
        ...prevState,
        jury: [...prevState.jury, selectedMember],
      }));
    }
    event.target.value = ""; 
  };

  const removeJuryMember = (id) => {
    setSoutenance((prevState) => ({
      ...prevState,
      jury: prevState.jury.filter((jury) => jury.id !== id),
    }));
  };


  useEffect(() => {
    const today = new Date(stage.dateFin);
    today.setDate(today.getDate() + 1); // Ajouter 1 jour pour commencer après aujourd'hui
    const minDateStr = today.toISOString().slice(0, 16); // Format "yyyy-MM-ddTHH:mm"
    setMinDate(minDateStr);
    handleFetchNormalUsers();
  },[]);
  // Soumettre les données de la soutenance
  const handleSubmit = async () => {
    // Validation des données
    if (!soutenance.date || !soutenance.salle || soutenance.jury.length === 0) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs et sélectionner au moins un membre du jury.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Envoyer les données au serveur (mock ici avec console.log)
    try {
        console.log(soutenance);
        
        const { data } = api.post("/api/soutenance/ajouterSoutenance",soutenance);
        toast({
            title: "Soutenance créée",
            description: "Les données de la soutenance ont été envoyées avec succès.",
            status: "success",
            duration: 3000,
            isClosable: true,
        });
    
        // Réinitialiser le formulaire
        setSoutenance({
            date: "",
            salle: "",
            jury: [],
      });
    } catch (error) {
        toast({
            title: "Erreur de création",
            description: "Une erreur est survenue lors de la création de la soutenance",
            status: "error",
            duration: 3000,
            isClosable: true,
        });
    }

    
  };

  return (
    <Box width="400px" p={4} borderWidth="1px" borderRadius="md">
      <FormControl mb={4}>
        <FormLabel>Date</FormLabel>
        <Input
          type="datetime-local"
          name="date"
          value={soutenance.date}
          onChange={handleInputChange}
          min={minDate}
        />
      </FormControl>

      <FormControl mb={4}>
        <FormLabel>Salle</FormLabel>
        <Input
          type="text"
          name="salle"
          placeholder="Nom ou numéro de la salle"
          value={soutenance.salle}
          onChange={handleInputChange}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Jury</FormLabel>
        <Select placeholder="Ajouter un membre du jury" onChange={addJuryMember}>
          {juryOptions
            .filter((jury) => !soutenance.jury.some((selected) => selected.id === jury.id))
            .map((jury) => (
              <option key={jury.id} value={jury.id}>
                {jury.nomComplete}
              </option>
            ))}
        </Select>

        <Wrap mt={2}>
          {soutenance.jury.map((jury) => (
            <WrapItem key={jury.id}>
              <Tag size="md" colorScheme="teal" borderRadius="full">
                <TagLabel>{jury.nomComplete}</TagLabel>
                <TagCloseButton onClick={() => removeJuryMember(jury.id)} />
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </FormControl>

      <Button
        mt={4}
        colorScheme="blue"
        onClick={handleSubmit}
      >
        Soumettre la soutenance
      </Button>
    </Box>
  );
}
