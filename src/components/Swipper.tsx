import { Flex, Text, Image, Box, Center } from "@chakra-ui/react";
import SlideContent from "./SlideContent";
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
          <SlideContent imageUrl="europe" text="Europa" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent imageUrl="north-america" text="America do Norte" />
        </SwiperSlide>
        <SwiperSlide>
          <SlideContent imageUrl="asia" text="Ásia" />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
