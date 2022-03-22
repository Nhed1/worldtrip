import {
  Flex,
  Image,
  Text,
  Box,
  Grid,
  SimpleGrid,
  Avatar,
} from "@chakra-ui/react";
import React from "react";
import ContinentStatistics from "../components/ContinentStatistics";
import CityCard from "../components/CityCard";

export default function Continent() {
  return (
    <Flex direction="column" color="gray.800">
      <Box position="relative" w="100%">
        <Image src="./images/europe.jpg" w="100%" h={400} objectFit="cover" />
        <Text
          fontSize="36"
          position="absolute"
          color="white"
          bottom="10"
          left="20"
        >
          Europe
        </Text>
      </Box>

      <Flex w="100%" p="20" justify="space-between" gap="20">
        <Box>
          <Text minW="200px" fontSize="18">
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </Box>
        <SimpleGrid spacing={[10, 10, 20]} columns={[1, 1, 2, 4]} px={[6, 8]}>
          <ContinentStatistics />
          <ContinentStatistics />
          <ContinentStatistics />
          <ContinentStatistics />
        </SimpleGrid>
      </Flex>
      <Text px="20" fontSize="22">
        Cidades +100
      </Text>
      <SimpleGrid
        px="20"
        my="10"
        columns={[1, 1, 2, 4]}
        spacing={[10, 10, 20, 40]}
        mx="auto"
      >
        {/* card aqui */}
        <CityCard />
        <CityCard />
        <CityCard />
        <CityCard />
      </SimpleGrid>
    </Flex>
  );
}
