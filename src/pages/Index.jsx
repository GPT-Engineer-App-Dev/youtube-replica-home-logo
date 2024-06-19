import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";
import { FaPlay } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex as="header" bg="white" w="100%" p={4} boxShadow="md" align="center">
        <Box as={FaPlay} color="red.500" boxSize="40px" />
        <Text fontSize="2xl" fontWeight="bold" ml={2}>
          YouTube Replica
        </Text>
      </Flex>
      <Box as="main" p={4}>
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to the YouTube Replica</Text>
          <Text>Explore videos, channels, and more.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;