import img from "../assets/servise.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

// unique key
import { v4 as uuidv4 } from "uuid";
import { GlobalBtn } from "../ui";

const servicesData = [
    {
        img: img,
        title: "СЕРВИС ОБОРУДОВАНИЯ",
        desc: "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей......",
    },
    {
        img: img,
        title: "РЕГИСТРАЦИИ",
        desc: "Обеспечение получения разрешительных документов, регистрационного удостоверения на изделия медицинского назначения Подготовка объектов к проведению ....",
    },
    {
        img: img,
        title: "УСЛУГИ ЛОГИСТИКИ",
        desc: "Компания предоставляет сервисное обслуживание по всем предоставляемым продуктам. У наших инженеров имеется опыт и сертификаты фирм производителей.....",
    },
];

function HomeServices() {
    return (
        <div className="services-list">
            <div className="max-w-[1430px] mx-auto px-[35px] max-md:px-[20px]">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        // Ekran o'lchami 600px dan kichik bo'lsa
                        1150: {
                            slidesPerView: 3, // slidesPerView ni 1 ga o'zgartiramiz
                            spaceBetween: 98,
                        },
                        800: {
                            spaceBetween: 30,
                            slidesPerView: 2, // slidesPerView ni 1 ga o'zgartiramiz
                        },
                        // Boshqa o'lchamlar uchun kerak bo'lsa keyinroq qo'shishingiz mumkin
                    }}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="mySwiper pt-[78px] pb-[112px]"
                >
                    {servicesData.map((service) => (
                        <SwiperSlide
                            key={uuidv4()}
                            className="bg-white rounded-[50px] shadow-md  relative"
                        >
                            <div className="overflow-hidden rounded-t-[50px]">
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    className="w-full h-[250px] object-cover -mt-2"
                                />
                            </div>
                            <div className="pt-[30px]  pr-[40px] pl-[43px] text-center max-md:px-[6px]">
                                <h3 className="text-[#0D4C93] text-[20px] font-medium tracking-[1.3px] mb-[14px] max-md:text-[16px] max-md:tracking-[1.04px] ">
                                    {service.title}
                                </h3>
                                <p className="text-[16px] font-light leading-[24px]  max-md:text-[13px] max-md:leading-[24px]">
                                    {service.desc}
                                </p>
                                <GlobalBtn
                                    text={"Подробнее"}
                                    className="translate-y-6 bottom-[-25px] mx-auto pt-[15px] pb-[12px] text-[20px] max-md:w-[190px]"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}

export default HomeServices;
