import React from 'react';
import Link from 'next/link';
import {
  Flex, Heading, Box, Icon,
  Alert, AlertIcon, AlertTitle, AlertDescription
} from '@chakra-ui/core';

function Sidebar() {
  return (
    <Box minW={300} shadow="lg" height="100vh" bg="gray.200" p={4} textAlign="center">
      <img src="http://placehold.it/100x30" />
      <Heading>X</Heading>

    </Box>
  )
}

function Content() {
  return (
    <Box w="100%" p={4}>
      <Heading as="h1" size="lg">My Projects</Heading>
    </Box>
  )
}

function Landing() {
  return (
    <Flex>
      <Sidebar />
      <Content />
    </Flex>
  )
}

export default Landing
