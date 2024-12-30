import { CheckIcon, DeleteIcon, SettingsIcon, ViewIcon } from "@chakra-ui/icons";
import { Flex, Text, Table, Tbody, Td, Th, Thead, Tr, IconButton, Box, Menu, MenuButton, MenuList, MenuItem, MenuIcon, Input, useDisclosure, FormControl, FormLabel } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import api from "../api";
import { FiMoreVertical } from 'react-icons/fi';
import CustomModal from "../components/ui/Modal";
import FormStage from "../components/formStage";
import FormStagiaire from "../components/formStagiaire";
import { MdPerson } from "react-icons/md";
import FormSoutenance from "../components/formSoutenance";

export default function GestionStages() {
    const [nonValideStages, setNonValideStagiaires] = useState([]);
    const [valideStages, setValideStagiaires] = useState([]);
    const [stage, setStage] = useState(null);
    const [stagiaire, setStagiaire] = useState(null);
    const { isOpen:isOpenStn, onOpen: OnOpenStn, onClose: OnCloseStn } = useDisclosure();
    const { isOpen:isOpenStagiaire, onOpen: OnOpenStagiaire, onClose: OnCloseStagiaire } = useDisclosure();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const getAllNonValideStages = async () => {
        try {
            const { data } = await api.get("/api/stage/allStagesNotValid");
            setNonValideStagiaires(data);
            
        } catch (error) {
            console.log(error.response.data.message);
        }
    }

    const getAllValideStagiaires = async () => {
        try {
            const { data } = await api.get("/api/stage/allStagesValid");
            setValideStagiaires(data);
            console.log("valideStages", data);
            
        } catch (error) {
            console.log(error.response.data);
        }
    }

    const validateStage = async (id) => {
        try {
            await api.put(`/api/stage/${id}/validateStage`);
            getAllNonValideStages();
            getAllValideStagiaires();
        } catch (error) {
            console.log(error);
        }
    }

    const deleteStage = async (id) => {
        try {
            await api.delete(`/api/stage/${id}`);
            getAllNonValideStages();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getAllNonValideStages();
        getAllValideStagiaires();
        console.log("aaa", validateStage[0]);
        
    }, []);
    
    return (
        <Flex width={"100%"} margin={"auto"} p={10} justifyContent={"center"} justifyItems={"center"} >
                <CustomModal onClose={onClose} isOpen={isOpen} title={"Information du stage"}>
                    <FormStage stage={stage} />
                </CustomModal>
                <CustomModal onClose={OnCloseStagiaire} isOpen={isOpenStagiaire} title={"Information du stagiaire"}>
                    <FormStagiaire stagiaire={stagiaire} />
                </CustomModal>
                <CustomModal onClose={OnCloseStn} isOpen={isOpenStn} title={"Information de la soutenance"}>
                    <FormSoutenance stage={stage} />
                </CustomModal>
                <Box mt={10} flex={1}>
                <Text align={"center"} fontSize={"20px"}>
                    Listes des stages non valides
                </Text>
                {
                    nonValideStages.length === 0 ? "aucun compte non valide" : 
                    <Table mt={"10"} size='sm' w={"full"}>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Type</Th>
                            <Th>Date Début</Th>
                            <Th>Date Fin</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            nonValideStages.map((stage) => (
                                <Tr key={stage.id}>
                                    <Td>{stage.id}</Td>
                                    <Td>{stage.type}</Td> 
                                    <Td>{stage.dateDebut}</Td>
                                    <Td>{stage.dateFin}</Td>
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
                                                    validateStage(stage.id);
                                                }} icon={<CheckIcon color={"green"} />} command='⌘T'>
                                                    Valider
                                                </MenuItem>
                                                <MenuItem onClick={() => {
                                                    setStagiaire(stage.stagiaire);
                                                    OnOpenStagiaire();
                                                }} icon={<MdPerson color={"black"} />} command='⌘T'>
                                                    Stagiaire
                                                </MenuItem>
                                                <MenuItem onClick={()=>{
                                                    setStage(stage);
                                                    onOpen();
                                                }}  icon={<ViewIcon color={"blue"} />} command='⌘N'>
                                                Consulter
                                                </MenuItem>
                                                <MenuItem onClick={()=>{
                                                    deleteStage(stage.id);
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
                    Listes des stages valides
                </Text>
                   {valideStages.length === 0 ? "aucun compte valide" : 
                    <Table mt={"10"} size='sm'>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Type</Th>
                            <Th>Date Début</Th>
                            <Th>Date Fin</Th>
                            <Th>Actions</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            valideStages.map((stage) => (
                                <Tr key={stage.id}>
                                    <Td>{stage.id}</Td>
                                    <Td>{stage.type}</Td> 
                                    <Td>{stage.dateDebut}</Td>
                                    <Td>{stage.dateFin}</Td>
                                    <Td>
                                        <Menu>
                                            <MenuButton
                                                as={IconButton}
                                                aria-label='Options'
                                                icon={<FiMoreVertical />}
                                                variant='outline'
                                            />
                                            <MenuList>
                                                <MenuItem onClick={() => {
                                                    setStagiaire(stage.stagiaire);
                                                    OnOpenStagiaire();
                                                }} icon={<MdPerson color={"black"} />} command='⌘T'>
                                                    Stagiaire
                                                </MenuItem>
                                                <MenuItem onClick={()=>{
                                                    setStage(stage);
                                                    onOpen();
                                                }} icon={<ViewIcon color={"blue"} />} command='⌘N'>
                                                Consulter
                                                </MenuItem>
                                                <MenuItem onClick={()=>{
                                                    setStage(stage);
                                                    OnOpenStn();
                                                }} icon={<SettingsIcon color={"green"} />} command='⌘N'>
                                                Planifier une soutenance
                                                </MenuItem>
                                                <MenuItem onClick={()=>{
                                                    deleteStage(stage.id);
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
