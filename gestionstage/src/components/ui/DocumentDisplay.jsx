import { Box, Text } from "@chakra-ui/react";

export default function DocumentDisplay({document}){
    return (
        <>
            {document ? (
              <Box borderWidth={1} borderRadius="md" overflow="hidden">
                <object
                  data={"http://localhost:5001/"+document.path}
                  width="100%"
                  height="500px"
                >
                  <p>
                    Votre navigateur ne supporte pas le visionnement du document.Vous pouvez{" "}
                    <a style={{color:"blue", fontWeight:"bold "}} href={"http://localhost:5001/"+document.path} target="_blank" rel="noopener noreferrer">
                      Télecharger le pdf
                    </a>{" "}   
                    plutôt
                  </p>
                </object>
              </Box>
            ) : (
              <Text>aucun PDF sélectionné.</Text>
            )}
        </>
    )
}