import { Flex, Text } from "@chakra-ui/react";

export default function ContinentStatistics() {
  return (
    <Flex align="center" justify="center" direction="column">
      <Text fontSize="36" lineHeight={1} color="orange.300">
        50
      </Text>
      <Text as="span" fontSize="20" color="gray.800">
        países
      </Text>
    </Flex>
  );
}
