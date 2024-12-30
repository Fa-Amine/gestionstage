import { CheckIcon, DeleteIcon, ViewIcon } from "@chakra-ui/icons";
import { Flex, Text, Table, Tbody, Td, Th, Thead, Tr, IconButton, Box, Menu, MenuButton, MenuList, MenuItem, MenuIcon, Input, useDisclosure, FormControl, FormLabel } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from "../api";
import { FiMoreVertical } from 'react-icons/fi';
import CustomModal from "../components/ui/Modal";
import FormStagiaire from "../components/formStagiaire";

export default function GestionStagiaires() {
    const [nonValideStagiaires, setNonValideStagiaires] = useState([]);
    const [valideStagiaires, setValideStagiaires] = useState([]);
    const [stagiaire, setStagiaire] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const getAllNonValideStagiaires = async () => {
        try {
            const { data } = await api.get("/api/Stagiaires/allStagiaireNotValid");
            setNonValideStagiaires(data);
            
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    const getAllValideStagiaires = async () => {
        try {
            const { data } = await api.get("/api/Stagiaires/allStagiaireValid");
            setValideStagiaires(data);
            console.log("valideStagiaires", data);
            
        } catch (error) {
            console.log(error.response.data);
        }
    }

    const validateStagiaire = async (id) => {
        try {
            await api.put(`/api/Stagiaires/${id}/validateAcc`);
            getAllNonValideStagiaires();
            getAllValideStagiaires();
        } catch (error) {
            console.log(error);
        }
    }

    const deleteStagiaire = async (id) => {
        try {
            await api.delete(`/api/Stagiaires/${id}`);
            getAllNonValideStagiaires();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllNonValideStagiaires();
        getAllValideStagiaires();
        console.log("aaa", validateStagiaire[0]);
        
    }, []);

    return (
        <Flex width={"100%"} margin={"auto"} p={10} justifyContent={"center"} justifyItems={"center"} >
                <CustomModal onClose={onClose} isOpen={isOpen} title={"Information du Stagiaire"}>
                    <FormStagiaire stagiaire={stagiaire} />
                </CustomModal>
                <Box mt={10} flex={1}>
                <Text align={"center"} fontSize={"20px"}>
                    Listes des comptes non valides
                </Text>
                {
                    nonValideStagiaires.length === 0 ? "aucun compte non valide" : 
                    <Table mt={"10"} size='sm' w={"full"}>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Numéro Etudiant</Th>
                            <Th>NomComplet</Th>
                            <Th>Email</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            nonValideStagiaires.map((stagiaire) => (
                                <Tr key={stagiaire.id}>
                                    <Td>{stagiaire.id}</Td>
                                    <Td>{stagiaire.n_Etudiant}</Td> 
                                    <Td>{stagiaire.nomComplete}</Td>
                                    <Td>{stagiaire.email}</Td>
                                    <Td >
                                        <Menu>
                                            <MenuButton
                                                as={IconButton}
                                                aria-label='Options'
                                                icon={<FiMoreVertical />}
                                                variant='outline'
                                            />
                                            <MenuList>
                                                <MenuItem onClick={()=>{
                                                    validateStagiaire(stagiaire.id);
                                                }} icon={<CheckIcon color={"green"} />} command='⌘T'>
                                                    valider
                                                </MenuItem>
                                                <MenuItem onClick={()=>{
                                                    setStagiaire(stagiaire);
                                                    console.log(stagiaire);
                                                    
                                                    onOpen();
                                                }}  icon={<ViewIcon color={"blue"} />} command='⌘N'>
                                                Consulter
                                                </MenuItem>
                                                <MenuItem onClick={()=>{
                                                    deleteStagiaire(stagiaire.id);
                                                }} icon={<DeleteIcon color={"red"} />} command='⌘⇧N'>
                                                Supprimer
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
                }
                </Box>
                <Box
                    height="100%"
                    width="21px"
                    bg="red"
                    mx={4}
                />
                <Box mt={10} flex={1}>
                <Text align={"center"} fontSize={"20px"}>
                    Listes des comptes valides
                </Text>
                   {valideStagiaires.length === 0 ? "aucun compte valide" : 
                    <Table mt={"10"} size='sm'>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Numéro Etudiant</Th>
                            <Th>NomComplet</Th>
                            <Th>Email</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            valideStagiaires.map((stagiaire) => (
                                <Tr key={stagiaire.id}>
                                    <Td>{stagiaire.id}</Td>
                                    <Td>{stagiaire.n_Etudiant}</Td> 
                                    <Td>{stagiaire.nomComplete}</Td>
                                    <Td>{stagiaire.email}</Td>
                                    <Td>
                                        <Menu>
                                            <MenuButton
                                                as={IconButton}
                                                aria-label='Options'
                                                icon={<FiMoreVertical />}
                                                variant='outline'
                                            />
                                            <MenuList>
                                                <MenuItem onClick={()=>{
                                                    setStagiaire(stagiaire);
                                                    onOpen();
                                                }} icon={<ViewIcon color={"blue"} />} command='⌘N'>
                                                Consulter
                                                </MenuItem>
                                                <MenuItem onClick={()=>{
                                                    deleteStagiaire(stagiaire.id);
                                                }} icon={<DeleteIcon color={"red"} />} command='⌘⇧N'>
                                                Supprimer
                                                </MenuItem>
                                            </MenuList>
                                        </Menu>
                                    </Td>
                                </Tr>
                            ))
                        }
                    </Tbody>
                </Table>
                }
            </Box>
        </Flex>
    )
}


