import { Flex, Image, Text, Box } from "@chakra-ui/react";
import React from "react";

export default function Continent() {
  return (
    <Flex direction="column">
      <Box position="relative" w="100%">
        <Image src="./images/europe.jpg" w="100%" h={400} objectFit="cover" />
        <Text
          fontSize="36"
          position="absolute"
          color="white"
          bottom="10"
          left="10"
        >
          Europe
        </Text>
      </Box>

      <Flex w="100%" p="20" justify="space-between">
        <Box>
          <Text>
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </Box>
        <Flex align="center">
          <Flex align="center" justify="center" direction="column">
            <Text fontSize="36" lineHeight={1} color="orange.300">
              50
            </Text>
            <Text as="span" fontSize="20" color="gray.800">
              países
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
