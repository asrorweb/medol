// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { HeroSlideChild } from "../elements";

import { v4 as uuidv4 } from "uuid";

import img1 from "../assets/slide1.png";
import img2 from "../assets/slide2.png";
import img3 from "../assets/slide3.png";

const slideData = [
    {
        title: `Анализатор   ABL800 FLEX`,
        desc: "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",
        img: img1,
    },
    {
        title: "Аппарат ИК-лазерный   МАКДЭЛ-09.1",
        desc: "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",
        img: img2,
    },
    {
        title: "Система для аутогемотранс",
        desc: "Ориентированный на среднюю или высокую производительность тестов, анализатор ABL800 FLEX измеряет полный набор параметров, включая pH, газы крови, электролиты, метаболиты и показатели оксиметрии",
        img: img3,
    },
];

function HomeSlider() {
    return (
        <div className="pb-[88px] max-xl:pb-[45px]">
            <Swiper
                spaceBetween={30}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
            >
                {slideData.map((data) => (
                    <SwiperSlide key={uuidv4()}>
                        <HeroSlideChild data={data} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default HomeSlider;
