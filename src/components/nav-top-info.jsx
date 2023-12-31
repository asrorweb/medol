import { ChangeLanguage, PhoneLocationInfo } from "../elements";
import siteLogo from "../assets/logo.png";
import { IconUi, SearchInput } from "../ui";

import rusFlag from "../assets/rus.svg";
import gbFlag from "../assets/gb.jpg";
import uzbFlag from "../assets/uzb.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ChangeLanguageData = [
    {
        title: "Русский",
        icon: rusFlag,
    },
    {
        title: "English",
        icon: gbFlag,
    },
    {
        title: "O’zbekcha",
        icon: uzbFlag,
    },
];

function NavTopInfo() {
    const [change, setChange] = useState(ChangeLanguageData[0]);
    const [openChange, setOpenChange] = useState(false);
    const [openSearch, setOpenSearch] = useState(false);
    return (
        <div className="max-w-[1430px] max-xl:gap-0 max-xl:justify-between px-[35px] mx-auto pt-[39px] max-xl:pt-[42px] max-md:pt-[30px] max-md:px-5  pb-12 max-xl:pb-0 flex items-end gap-[112px]">
            <PhoneLocationInfo />
            <Link to={"/МАГАЗИН"}>
                <img
                    src={siteLogo}
                    alt="site logo"
                    className="w-[200px] h-[58px] max-md:w-[134px] max-md:h-[38px] -translate-x-[26px] max-xl:translate-x-0"
                />
            </Link>

            {openSearch ? (
                <SearchInput setOpenSearch={setOpenSearch} />
            ) : (
                <div className="flex gap-[51px] max-xl:gap-[22px] max-md:gap-[14px] items-end">
                    <div className="flex xl:hidden max-md:hidden">
                        <IconUi
                            single={true}
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                >
                                    <path
                                        d="M12.5 0C7.50757 0 3.44595 4.06162 3.44595 9.054C3.44595 15.2497 11.5484 24.3454 11.8934 24.7295C12.2174 25.0904 12.7832 25.0898 13.1066 24.7295C13.4516 24.3454 21.554 15.2497 21.554 9.054C21.554 4.06162 17.4924 0 12.5 0ZM12.5 13.6093C9.98818 13.6093 7.94472 11.5658 7.94472 9.054C7.94472 6.54219 9.98823 4.49873 12.5 4.49873C15.0118 4.49873 17.0552 6.54224 17.0552 9.05405C17.0552 11.5659 15.0118 13.6093 12.5 13.6093Z"
                                        fill="#0D4C93"
                                    />
                                </svg>
                            }
                        />
                    </div>
                    <IconUi
                        single={true}
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 22 22"
                                fill="none"
                                className="w-[22px] h-[22px] max-md:w-[17.6px] max-md:h-[17.6px]"
                            >
                                <g clip-path="url(#clip0_623_6843)">
                                    <path
                                        d="M9.10989 12.89C7.01003 10.7902 6.53589 8.69031 6.42892 7.849C6.39903 7.61637 6.47909 7.38309 6.64551 7.21782L8.34482 5.51927C8.59479 5.26946 8.63915 4.88013 8.45178 4.58048L5.74616 0.379239C5.53888 0.0474371 5.11326 -0.0723136 4.76337 0.102722L0.419889 2.14834C0.136946 2.28767 -0.0294772 2.58829 0.00264784 2.90203C0.230234 5.0641 1.17282 10.379 6.39592 15.6025C11.619 20.826 16.9332 21.7682 19.0964 21.9958C19.4101 22.0279 19.7107 21.8615 19.8501 21.5785L21.8957 17.235C22.0701 16.8859 21.9511 16.4614 21.6207 16.2538L17.4194 13.5489C17.12 13.3613 16.7306 13.4054 16.4806 13.6551L14.7821 15.3544C14.6168 15.5208 14.3835 15.6009 14.1509 15.571C13.3096 15.464 11.2097 14.9899 9.10989 12.89Z"
                                        fill="#0D4C93"
                                    />
                                    <path
                                        d="M17.4483 11.7585C17.0293 11.7585 16.6896 11.4188 16.6896 10.9999C16.6861 7.85903 14.1408 5.31376 11 5.31021C10.581 5.31021 10.2414 4.97056 10.2414 4.55159C10.2414 4.13261 10.581 3.79297 11 3.79297C14.9784 3.79736 18.2025 7.02142 18.2069 10.9999C18.2069 11.4188 17.8672 11.7585 17.4483 11.7585Z"
                                        fill="#0D4C93"
                                    />
                                    <path
                                        d="M21.2414 11.7586C20.8224 11.7586 20.4827 11.419 20.4827 11C20.4769 5.76524 16.2347 1.52309 11 1.51724C10.581 1.51724 10.2414 1.1776 10.2414 0.758621C10.2414 0.339646 10.581 0 11 0C17.0723 0.00668947 21.9933 4.92764 22 11C22 11.2012 21.9201 11.3942 21.7778 11.5364C21.6355 11.6787 21.4426 11.7586 21.2414 11.7586Z"
                                        fill="#0D4C93"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_623_6843">
                                        <rect
                                            width="22"
                                            height="22"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        }
                    />

                    {/* search */}
                    <button
                        onClick={() => setOpenSearch(true)}
                        className="flex max-md:hidden"
                    >
                        <IconUi
                            icon={
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="26"
                                    height="26"
                                    viewBox="0 0 26 26"
                                    fill="none"
                                >
                                    <path
                                        d="M4.72934 17.9273C1.09066 14.2885 1.09074 8.36781 4.72934 4.72906C8.36809 1.09031 14.2887 1.09031 17.9274 4.72906C21.0144 7.81605 21.4819 12.4072 19.3312 15.9924C19.3312 15.9924 19.1768 16.2515 19.3854 16.46C20.5757 17.6503 24.1468 21.2214 24.1468 21.2214C25.0945 22.1691 25.3201 23.4942 24.4797 24.3348L24.335 24.4793C23.4946 25.3199 22.1694 25.0944 21.2217 24.1467C21.2217 24.1467 17.6582 20.5831 16.4703 19.3953C16.2517 19.1766 15.9926 19.3311 15.9926 19.3311C12.4075 21.4817 7.81632 21.0143 4.72934 17.9273ZM16.2045 16.2043C18.8931 13.5156 18.8931 9.14089 16.2044 6.45223C13.5157 3.76364 9.14102 3.76357 6.45243 6.45223C3.76377 9.14082 3.76377 13.5156 6.45243 16.2043C9.1411 18.8928 13.5157 18.8928 16.2045 16.2043Z"
                                        fill="#0D4C93"
                                    />
                                    <path
                                        d="M15.6087 10.7745C15.7339 10.7745 15.8611 10.7499 15.9837 10.6981C16.4735 10.4908 16.7027 9.92564 16.4954 9.43574C15.1924 6.35654 11.6273 4.91151 8.54816 6.2145C8.05834 6.42181 7.82917 6.98699 8.03648 7.47689C8.24387 7.96679 8.80889 8.19581 9.29894 7.98857C11.3998 7.09961 13.8324 8.08556 14.7212 10.1864C14.8768 10.5538 15.2334 10.7745 15.6087 10.7745Z"
                                        fill="#0D4C93"
                                    />
                                </svg>
                            }
                        />
                    </button>

                    {/* facebook icon  */}
                    <a
                        href="#"
                        className="flex gap-[10px] max-xl:hidden items-center rounded-[25px] bg-white py-[14px] pr-[19px] pl-[10px] text-[#0D4C93] text-[12px]"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            className="inline"
                        >
                            <path
                                d="M12.7037 22V11.9655H16.0706L16.5757 8.05372H12.7037V5.55662C12.7037 4.42442 13.0169 3.65284 14.6423 3.65284L16.712 3.65199V0.153153C16.354 0.10664 15.1254 0 13.6954 0C10.7094 0 8.66505 1.82266 8.66505 5.1692V8.05372H5.28802V11.9655H8.66505V22H12.7037Z"
                                fill="#0D4C93"
                            />
                        </svg>
                        <p className="inline  whitespace-nowrap">
                            Мы на Facebook
                        </p>
                    </a>

                    {/* language change  */}
                    <button
                        onClick={() => setOpenChange(!openChange)}
                        className="flex relative gap-[10px] max-xl:gap-[19px] max-md:gap-[15.2px] items-center rounded-[25px] bg-white py-[10px] pr-[15px] pl-[10px] max-md:p-2 max-md:pr-3 text-[#0D4C93] text-[12px]"
                    >
                        <img
                            src={change.icon}
                            className="w-[30px] h-[30px] rounded-full max-md:w-6 max-md:h-6"
                        />
                        <p className="max-xl:hidden">{change.title}</p>
                        <div>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="11"
                                height="11"
                                viewBox="0 0 11 11"
                                fill="none"
                                className="max-md:w-[8.8px] max-md:h-[8.8px]"
                            >
                                <g clip-path="url(#clip0_607_352)">
                                    <path
                                        d="M5.49997 8.63518C5.30283 8.63518 5.10571 8.55991 4.95541 8.40968L0.225655 3.67987C-0.0752185 3.379 -0.0752185 2.89118 0.225655 2.59043C0.526408 2.28968 1.01413 2.28968 1.31502 2.59043L5.49997 6.77562L9.68494 2.59058C9.98581 2.28983 10.4735 2.28983 10.7742 2.59058C11.0752 2.89133 11.0752 3.37915 10.7742 3.68002L6.04453 8.40982C5.89416 8.56008 5.69704 8.63518 5.49997 8.63518Z"
                                        fill="#0D4C93"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_607_352">
                                        <rect
                                            width="11"
                                            height="11"
                                            fill="white"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                        <ChangeLanguage
                            openChange={openChange}
                            setOpenChange={setOpenChange}
                            setChange={setChange}
                        />
                    </button>

                    <div className="xl:hidden py-4 px-[21px] rounded-[25px] bg-white max-md:px-[14px] max-md:py-[11px]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="19"
                            height="18"
                            viewBox="0 0 19 18"
                            fill="none"
                        >
                            <path
                                d="M1.5 0C0.671573 0 0 0.671573 0 1.5C0 2.32843 0.671573 3 1.5 3H17.5C18.3284 3 19 2.32843 19 1.5C19 0.671573 18.3284 0 17.5 0H1.5Z"
                                fill="#0D4C93"
                            />
                            <path
                                d="M1.5 5C0.671573 5 0 5.67157 0 6.5C0 7.32843 0.671573 8 1.5 8H11.5C12.3284 8 13 7.32843 13 6.5C13 5.67157 12.3284 5 11.5 5H1.5Z"
                                fill="#0D4C93"
                            />
                            <path
                                d="M0 11.5C0 10.6716 0.671573 10 1.5 10H17.5C18.3284 10 19 10.6716 19 11.5C19 12.3284 18.3284 13 17.5 13H1.5C0.671573 13 0 12.3284 0 11.5Z"
                                fill="#0D4C93"
                            />
                            <path
                                d="M1.5 15C0.671573 15 0 15.6716 0 16.5C0 17.3284 0.671573 18 1.5 18H11.5C12.3284 18 13 17.3284 13 16.5C13 15.6716 12.3284 15 11.5 15H1.5Z"
                                fill="#0D4C93"
                            />
                        </svg>
                    </div>
                </div>
            )}
        </div>
    );
}

export default NavTopInfo;
