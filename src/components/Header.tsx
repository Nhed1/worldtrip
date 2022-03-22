import { Text, Flex, Image } from "@chakra-ui/react";
export default function Header() {
  return (
    <Flex
      minH={360}
      align="center"
      bgGradient="linear(to-b, blue.800, blue.900)"
      color="white"
      justify="space-between"
      w="100%"
      px={20}
    >
      <Flex gap={2} direction="column">
        <Text fontSize="36" fontWeight="bold" lineHeight={1.2}>
          5 Continents, <br /> infinitas possibilidades
        </Text>
        <Text fontSize="18">
          Chegou a hora de tirar do papel a viagem que você sempre sonhou.
        </Text>
      </Flex>
      <Image
        src="./images/Airplane.svg"
        w="400px"
        display={{ base: "none", lg: "block" }}
      />
    </Flex>
  );
}
