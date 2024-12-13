import {
    Box,
    Text,
    Input,
    VStack,
    Button,
  } from '@chakra-ui/react';
  
  export default function Stage() {
      return (
          <VStack  margin={'50px','50px','100px','50px'} spacing={4}>
              <Text>Nom de l'entreprise d'acceuil</Text>
              <Input name="nomEntreprise" mb={"5"} rounded={'3xl'} placeholder="Nom de l'entreprise" />
  
              <Text>Nom Complet de l'encadrant</Text>
              <Input name="nomEncadrant" mb={"5"} rounded={'3xl'} placeholder="Nom de l'encadrant" />
  
              <Text>Intitulé sujet</Text>
              <Input name="intituleSujet" mb={"5"} rounded={'3xl'} placeholder="Sujet" />
  
              <Text>Description du sujet</Text>
              <Input name="descriptionSujet" mb={"5"} rounded={'3xl'} placeholder="Description du sujet" />
              <Button type='submit'  w={"10%"} mt={'20px'} rounded={'2xl'} colorPalette="cyan" variant="solid">Confirmer</Button>

          </VStack>
      );
  }
  