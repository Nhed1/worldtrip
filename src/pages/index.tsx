import type { NextPage } from "next";
import { Flex } from "@chakra-ui/react";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Main from "../components/Main";
import Swipper from "../components/Swipper";

const Home: NextPage = () => {
  return (
    //Logo 100px
    <Flex direction="column" h="calc(100vh - 100px)" w="100vw" bg="gray.100">
      <Header />
      <Main />
      <Swipper />
    </Flex>
  );
};

export default Home;
