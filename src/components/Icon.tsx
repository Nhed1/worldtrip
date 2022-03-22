import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export default function Icon() {
  return (
    <Flex justify="center" align="center" direction="column">
      <Image src="./images/icons/cocktail.svg" mb={2}></Image>
      <Text>Night life</Text>
    </Flex>
  );
}
