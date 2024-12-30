import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Box, Text, VStack, Icon, useColorModeValue, HStack, Tag, TagLabel, Flex, useToast } from "@chakra-ui/react";
import { FiUploadCloud, FiFile } from "react-icons/fi"; // Use FiFile as generic file icon

const FileUploadDropzone = ({ onFileUpload }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]); // State to store uploaded files
  const toast = useToast(); 
  const onDrop = useCallback((acceptedFiles) => {
    console.log("Accepted Files: ", acceptedFiles);
    if (onFileUpload) onFileUpload(acceptedFiles);
    
    setUploadedFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "application/pdf", 
    multiple: true,
  });

  const borderColor = useColorModeValue("gray.300", "gray.500");

  const renderFileIcon = (fileName) => {
    const fileExtension = fileName.split(".").pop().toLowerCase();
    
    if (fileExtension !== "pdf") {
      return <Icon as={FiFile} boxSize={5} color="red.500" />; // FiFile for PDFs
    }
    return <Icon as={FiFile} boxSize={5} color="blue.500" />; // Default icon for other files
  };

  return (
    <>
    <Box
      {...getRootProps()}
      w={"full"}
      gridColumn="1 / span 2"
      cursor="pointer"
      p={6}
      borderWidth={2}
      borderStyle="dashed"
      borderColor={isDragActive ? "green.500" : borderColor}
      borderRadius="md"
      textAlign="center"
      _hover={{ borderColor: "green.500" }}
      transition="border-color 0.2s ease-in-out"
    >
      <input {...getInputProps()} />
      <VStack spacing={3}>
        <Icon as={FiUploadCloud} boxSize={12} color="green.500" />
        <Text fontSize="lg" fontWeight="bold">
          {isDragActive ? "Déposez les fichiers ici ..." : "Glissez et déposez vos fichiers ici"}
        </Text>
        <Text fontSize="sm" color="gray.500">
          Cliquez pour sélectionner des fichiers ou faites un glisser-déposer
        </Text>
      </VStack>
    </Box>

    {uploadedFiles.length > 0 && (
      <Box gridColumn="1 / span 2" w={"full"} mt={4} p={4} borderWidth={1} borderColor="gray.200" borderRadius="md">
        <Text fontWeight="bold">Fichiers téléchargés :</Text>
        <Flex wrap="wrap" mt={2} gap={4}>
            {uploadedFiles.map((file, index) => (
            <Tag key={index} size="lg" variant="outline" colorScheme="teal" display="flex" alignItems="center">
                {renderFileIcon(file.name)}
                <TagLabel ml={2}>{file.name}</TagLabel>
            </Tag>
            ))}
        </Flex>
        </Box>
    
    )}
    </>
  );
};

export default FileUploadDropzone;
