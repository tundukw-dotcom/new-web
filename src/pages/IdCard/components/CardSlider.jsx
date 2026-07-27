import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import front from "../../../assets/id-front.png";
import back from "../../../assets/id-back.jpg";

export default function CardSlider() {
    return (
        <Swiper
            spaceBetween={15}
            slidesPerView={1}
            className="cardSwiper"
        >
            <SwiperSlide>
                <img src={front} className="cardImage" />
            </SwiperSlide>

            <SwiperSlide>
                <img src={back} className="cardImage" />
            </SwiperSlide>
        </Swiper>
    );
}