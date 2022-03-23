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
        <Avatar
          name="Londres"
          src="https://images.unsplash.com/photo-1543832923-44667a44c804?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1044&q=80"
        />
      </Flex>
    </Flex>
  );
}
