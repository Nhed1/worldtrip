import { Center, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

interface SlideContentProps {
  imageUrl: string;
  text: string;
}

export default function SlideContent({ imageUrl, text }: SlideContentProps) {
  return (
    <Center h={200} position="relative">
      <Image src={`./images/${imageUrl}.jpg`} objectFit="cover" />
      <Link href={imageUrl} passHref>
        <Text position="absolute" color="white" fontSize="26">
          {text}
        </Text>
      </Link>
    </Center>
  );
}
