import logo from "../assets/logo.png";
import { GlobalBtn } from "../ui";

function HomeCompanyInfo() {
    return (
        <div className="pt-[68px] mb-[108px] home-company max-md:pt-[42px] max-md:mb-[42px] max-sm:pt-[24px] max-sm:mb-[24px]">
            <div className="max-w-[1430px] mx-auto px-[35px] max-md:px-[20px]">
                <h2 className="text-[#0D4C93] text-[40px] font-medium max-sm:text-[30px] text-center mb-[52px] max-sm:mb-[23px]">
                    О КОМПАНИИ
                </h2>

                <div className="relative">
                    <div className="home-company-info-ciircle-1 absolute max-xl:hidden">
                        <div className="home-company-info-ciircle-2">
                            <div className="home-company-info-ciircle-3">
                                <img src={logo} />
                            </div>
                        </div>
                    </div>
                    <div className="home-company-info max-w-[1023px] pl-[281px] max-xl:pl-[41px] pt-[57px] max-xl:pt-[41px] pr-[40px] max-lg:pr-[45px] pb-[7px] max-xl:pb-[50px] ml-auto max-sm:p-0 max-sm:pt-[23px] max-sm:pb-[27px]">
                        <p className="text-[#363535] max-sm:hidden text-[20px] font-light tracking-[1.2px] leading-[173.187%] mb-[30px] max-sm:text-[16px] max-sm:tracking-[0.96px]">
                            Группа компаний MEDOL создавалась
                            высококвалифицированными специалистами в сфере
                            медицины, инженерии и экономики, за плечами которых
                            значительный опыт на рынке высоких медицинских
                            технологий, которая имеет свои представительства в
                            разных уголках Земли. В 2011 году MEDOL
                            зарегистрировал в Узбекистане ИП ООО “Medical Online
                            Services". Цель компании построить прозрачный
                            долгосрочный бизнес, принести пользу обществу путем
                            развития и внедрения передовых технологий в систему
                            здравоохранения Республики Узбекистан
                        </p>
                        <p className="text-[#363535] max-sm:block hidden text-[20px] font-light tracking-[1.2px] leading-[173.187%] mb-[30px] max-sm:text-[16px] max-sm:tracking-[0.96px]">
                            Группа компаний MEDOL создавалась
                            высококвалифицированными специалистами в сфере
                            медицины, инженерии и экономики, за плечами которых
                            значительный опыт на рынке высоких медицинских
                            технологий, которая имеет свои представительства в
                            разных уголках Земли. В 2011 году MEDOL
                            зарегистрировал в Узбекистане
                        </p>
                        <GlobalBtn
                            text={"Узнать больше"}
                            className="text-[20px] pt-[15px] pb-[12px] max-xl:w-[270px] max-xl:mx-auto max-xl:block"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomeCompanyInfo;
