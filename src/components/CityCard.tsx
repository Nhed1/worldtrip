import { Flex, Image, Avatar, Text, Box } from "@chakra-ui/react";

export default function CityCard() {
  return (
    <Flex direction="column" w={200} border="1px solid yellow" p={6}>
      <Image src="./images/europe.jpg" w="100%" h="auto" />
      <Flex justify="space-between" mt={6}>
        <Box>
          <Text fontSize="18">Londres</Text>
          <Text fontSize="14" color="gray.600">
            Reino Unido
          </Text>
        </Box>
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
      </Flex>
    </Flex>
  );
}
