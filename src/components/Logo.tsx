import { Center, Image } from "@chakra-ui/react";
import Link from "next/link";

export default function Logo() {
  return (
    <Center h={100}>
      <Link href="/">
        <Image
          src="../images/Logo.png"
          alt="A logo do WorldTrip com um icone de um avião ao lado direito do nome WorldTrip"
        />
      </Link>
    </Center>
  );
}
