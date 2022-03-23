import { Flex, Text, Image } from "@chakra-ui/react";
import Icon from "./Icon";

export default function Main() {
  return (
    <Flex justify="center" w="100%" px={20} mt={20} direction="column">
      <Flex wrap="wrap" justify="space-between" w="100%" gap={10}>
        <Icon text="vida noturna" imageUrl="cocktail"></Icon>
        <Icon text="praia" imageUrl="surf"></Icon>
        <Icon text="moderno" imageUrl="building"></Icon>
        <Icon text="clássico" imageUrl="museum"></Icon>
        <Icon text="e mais..." imageUrl="earth"></Icon>
      </Flex>
      <Text align="center" mt={20} fontSize="22">
        Vamos nessa ? <br /> Então escolha seu continente
      </Text>
    </Flex>
  );
}
