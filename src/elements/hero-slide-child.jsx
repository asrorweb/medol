import React from "react";
import { GlobalBtn } from "../ui";

import circle from "../assets/circle-slide.png";

function HeroSlideChild({ data }) {
    return (
        <div className="max-w-[1430px] mb-[108px] max-md:px-[20px] max-xl:mb-[40px] max-md:mb-[30px]  pt-[119px] max-xl:pt-[106px] max-md:pt-[53px] mx-auto px-[35px] flex justify-between items-center">
            <div>
                <h1 className="text-[#0D4C93] whitespace-pre-wrap  font-medium text-[50px] tracking-[4.5px] text-left mb-[31px] max-md:text-[32px] max-md:mb-[22px] max-md:tracking-[2.88px]">
                    {data.title}
                </h1>
                <p className="text-[#363535] text-[24px] leading-[40px] max-w-[680px] text-left mb-[43px] max-md:text-[20px] max-md:leading-[30px] max-md:mb-[37px]">
                    {data.desc}
                </p>
                <GlobalBtn text={" Подробнее"} />
            </div>
            <div className="relative max-xl:hidden">
                <img
                    src={circle}
                    className="absolute w-[479px] h-[479px] -z-10 top-2/4 left-2/4 -translate-x-[50%] -translate-y-[50%]"
                    alt=""
                />
                <img src={data.img} alt={data.title} />
            </div>
        </div>
    );
}

export default HeroSlideChild;
