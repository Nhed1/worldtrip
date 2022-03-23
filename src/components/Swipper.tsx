import { Flex, Text, Image, Box, Center } from "@chakra-ui/react";
// swipper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Swipper() {
  return (
    <Box h={200} w="80%" m="auto" mt="10" mb="6">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Center h={200} position="relative">
            <Image src="./images/europe.jpg" objectFit="cover" />
            <Text position="absolute" color="white" fontSize="26">
              Europe
            </Text>
          </Center>
        </SwiperSlide>
        <SwiperSlide>
          <Center h={200} position="relative">
            <Image src="./images/europe.jpg" objectFit="cover" />
            <Text position="absolute" color="white" fontSize="26">
              Brazil
            </Text>
          </Center>
        </SwiperSlide>
        <SwiperSlide>
          <Center h={200} position="relative">
            <Image src="./images/europe.jpg" objectFit="cover" />
            <Text position="absolute" color="white" fontSize="26">
              Australia
            </Text>
          </Center>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
