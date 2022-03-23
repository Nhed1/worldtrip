import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

interface IconProps {
  text: string;
  imageUrl: string;
}
export default function Icon({ text, imageUrl }: IconProps) {
  return (
    <Flex justify="center" align="center" direction="column">
      <Image src={`./images/icons/${imageUrl}.svg`} mb={2}></Image>
      <Text>{text}</Text>
    </Flex>
  );
}
