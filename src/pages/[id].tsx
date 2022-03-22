import { Flex, Image, Text, Box, Grid } from "@chakra-ui/react";
import React from "react";
import ContinentStatistics from "../components/ContinentStatistics";

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

      <Flex w="100%" p="20" justify="space-between" gap="20">
        <Box>
          <Text>
            A Europa é, por convenção, um dos seis continentes do mundo.
            Compreendendo a península ocidental da Eurásia, a Europa geralmente
            divide-se da Ásia a leste pela divisória de águas dos montes Urais,
            o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
        </Box>
        <Grid gap="8" templateColumns="repeat(auto-fit, 60px)" minW={400}>
          <ContinentStatistics />
          <ContinentStatistics />
          <ContinentStatistics />
          <ContinentStatistics />
        </Grid>
      </Flex>
    </Flex>
  );
}
