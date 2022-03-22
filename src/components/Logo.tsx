import { Center, Image } from "@chakra-ui/react";

export default function Logo() {
  return (
    <Center h={100}>
      <Image
        src="../images/Logo.png"
        alt="A logo do WorldTrip com um icone de um avião ao lado direito do nome WorldTrip"
      />
    </Center>
  );
}
