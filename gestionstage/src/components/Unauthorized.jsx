'use client'

import { Box, Heading, Text } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'

export default function Unauthorized() {
  return (
    <Box textAlign="center" py={10} px={6}>
        <InfoIcon boxSize={'50px'} color={'blue.500'} />
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Non autorisé 
        </Heading>
        <Text color={'gray.500'}>
              Vous n'avez pas l'autorisation d'accéder à cette page.
        </Text>
    </Box>
  )
}