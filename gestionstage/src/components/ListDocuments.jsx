import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  IconButton,
  VStack,
  HStack,
  Avatar,
  Badge,
  Input,
  InputGroup,
  InputLeftElement,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { FiSearch, FiDownload, FiTrash, FiFileText } from "react-icons/fi";
import CustomModal from "./ui/Modal";
import DocumentDisplay from "./ui/DocumentDisplay";

const DocumentList = ({documents}) => {

    const { isOpen, onOpen, onClose } = useDisclosure();
    const [document, setDocument] = useState(null);
   
    return (
        <Box maxW="container.md" mx="auto" py={6} px={4}>
        <CustomModal onClose={onClose} isOpen={isOpen} title={"Information du Stagiaire"}>
            <DocumentDisplay document={document} />
        </CustomModal>
        <Heading size="md" mb={4}>
            Documents
        </Heading>

        {/* List of Documents */}
        <VStack spacing={4} align="stretch">
            {documents.map((doc, index) => (
            <Flex
                cursor={"pointer"}
                key={index}
                p={4}
                borderWidth={1}
                borderRadius="md"
                align="center"
                justify="space-between"
                bg="gray.50"
                _hover={{ bg: "gray.100" }}
                onClick={()=>{
                    setDocument(doc);
                    onOpen();
                }}
            >
                <HStack spacing={3}>
                <Avatar icon={<FiFileText />} bg="teal.500" color="white" />
                <Box>
                    <Text fontWeight="bold">{doc.path}</Text>
                    <Text fontSize="sm" color="gray.500">
                    {/* {doc.date} • {doc.size} */}
                    </Text>
                </Box>
                </HStack>
                <HStack spacing={2}>
                <Tooltip label="Download" aria-label="Download">
                    <IconButton
                    icon={<FiDownload />}
                    aria-label="Download"
                    size="sm"
                    variant="ghost"
                    colorScheme="teal"
                    />
                </Tooltip>
                <Tooltip label="Delete" aria-label="Delete">
                    <IconButton
                    icon={<FiTrash />}
                    aria-label="Delete"
                    size="sm"
                    variant="ghost"
                    colorScheme="red"
                    />
                </Tooltip>
                </HStack>
            </Flex>
            ))}
        </VStack>
        </Box>
    );
};

export default DocumentList;
