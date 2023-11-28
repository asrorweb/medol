import img from "../assets/product.png";
import { v4 as uuidv4 } from "uuid";
import { GlobalBtn } from "../ui";
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

const productData = [
    {
        img: img,
        title: "Эндоваскулярная хирургия",
    },
    {
        img: img,
        title: "Лабораторная диагностика",
    },
    {
        img: img,
        title: "Кардиохирургия",
    },
    {
        img: img,
        title: "ДИАБЕТ",
    },
    {
        img: img,
        title: "ЭНДОУРОЛОГИЯ",
    },
    {
        img: img,
        title: "АРИТМОЛОГИЯ",
    },
];
function HomeProducts() {
    return (
        <div className="bg-white pt-[50px] pb-[69px] max-md:pt-[41px] max-md:pb-[52px] max-sm:pt-[24px] max-sm:pb-[25px]">
            <div className="max-w-[1430px] mx-auto px-[35px]">
                <h2 className="text-center mb-[62px] text-[#0D4C93] text-[40px] font-medium max-sm:text-[30px]">
                    ПРОДУКЦИЯ
                </h2>

                <ul className="product-list text-center max-lg:hidden mb-[81px]">
                    {productData.map((data) => (
                        <li
                            key={uuidv4()}
                            className="product-list-item mx-auto pt-[17px] px-[72px] pb-[42px] rounded-[35px] opacity-90 max-md:px-[48px]"
                        >
                            <img
                                className="px-[25px] mb-[7px] mx-auto"
                                src={data.img}
                                alt={data.title}
                            />
                            <h3 className="text-[#363535] h-[73px] text-[24px] tracking-[2.52px] mb-[27px] px-4">
                                {data.title}
                            </h3>
                            <GlobalBtn
                                text={"Посмотреть все"}
                                className={
                                    "hover:bg-[#00C9C9] mx-auto text-[20px] h-[70px]"
                                }
                            />
                        </li>
                    ))}
                </ul>

                {/* slide */}
                <Swiper
                    slidesPerView={1}
                    breakpoints={{
                        // Ekran o'lchami 600px dan kichik bo'lsa
                        768: {
                            slidesPerView: 2, // slidesPerView ni 1 ga o'zgartiramiz
                        },
                        // Ekran o'lchami 800px dan kichik bo'lsa
                        // 1024: {
                        //     slidesPerView: 2, // slidesPerView ni 2 ga o'zgartiramiz
                        // },
                        // Boshqa o'lchamlar uchun kerak bo'lsa keyinroq qo'shishingiz mumkin
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                    freeMode={true}
                    modules={[FreeMode, Autoplay]}
                    className="mySwiper max-lg:block max hidden mb-[50px] max-md:mb-[27px]"
                >
                    {productData.map((data) => (
                        <SwiperSlide key={uuidv4()}>
                            <li className="product-list-item text-center  pt-[17px] px-[72px]  pb-[42px] rounded-[35px] opacity-90 max-lg:px-[48px]">
                                <img
                                    className="px-[25px] mb-[7px] max-lg:px-[10px] mx-auto"
                                    src={data.img}
                                    alt={data.title}
                                />
                                <h3 className="text-[#363535] h-[73px] text-[24px] max-lg:px-[1px] tracking-[2.52px] mb-[27px] px-4">
                                    {data.title}
                                </h3>
                                <GlobalBtn
                                    text={"Посмотреть все"}
                                    className={
                                        "hover:bg-[#00C9C9] h-[70px] mx-auto max-w-full max-lg:text-[20px]  "
                                    }
                                />
                            </li>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <Link className="text-[#0D4C93] mb-[69px] max-md:mb-[52px] max-sm:mb-[25px] text-[24px] max-md:text-[16px] flex items-center gap-[6px] mx-auto justify-center">
                    <span>Перейти в каталог нашей продукции</span>
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="30"
                            height="30"
                            viewBox="0 0 30 30"
                            fill="none"
                            className="max-md:w-[20px] max-md:h-[20px]"
                        >
                            <g clip-path="url(#clip0_502_67)">
                                <path
                                    d="M30 15C30 6.7285 23.2715 -2.94112e-07 15 -6.55671e-07C6.7285 -1.01723e-06 -2.94112e-07 6.72849 -6.55671e-07 15C-1.01723e-06 23.2715 6.72967 30 15 30C23.2703 30 30 23.2715 30 15ZM2.32377 15C2.32377 8.01123 8.01006 2.32377 15 2.32377C21.9899 2.32377 27.6762 8.01123 27.6762 15C27.6762 21.9899 21.9899 27.6762 15 27.6762C8.01006 27.6762 2.32377 21.9888 2.32377 15Z"
                                    fill="#0D4C93"
                                />
                                <path
                                    d="M13.3966 21.6344L19.2061 15.825C19.6569 15.3718 19.6569 14.6399 19.2061 14.1867L13.3966 8.37725C12.9621 8.0043 12.3196 8.0043 11.885 8.37725C11.3982 8.79438 11.3413 9.52867 11.7584 10.0155L16.7429 15L11.7583 19.9962C11.3075 20.4493 11.3075 21.1813 11.7583 21.6344C12.2115 22.0853 12.9435 22.0853 13.3966 21.6344Z"
                                    fill="#0D4C93"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_502_67">
                                    <rect
                                        width="30"
                                        height="30"
                                        fill="white"
                                        transform="translate(30) rotate(90)"
                                    />
                                </clipPath>
                            </defs>
                        </svg>
                    </span>
                </Link>

                <h2 className="text-[#0D4C93] text-[40px] max-sm:text-[30px] text-center font-medium">
                    УСЛУГИ
                </h2>
            </div>
        </div>
    );
}

export default HomeProducts;
