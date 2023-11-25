import { ChangeLanguageData } from "../components/nav-top-info";

function ChangeLanguage({ openChange, setOpenChange, setChange }) {
    const ChangeLanguageHandler = (data) => {
        setOpenChange(false);
        setChange(data);
    };

    return (
        openChange && (
            <div className="absolute top-[100%] z-50 bg-white mt-[3px] right-0 py-[13px] rounded-[15px] shadow">
                {ChangeLanguageData.map((data) => {
                    return (
                        <div
                            onClick={() =>
                                ChangeLanguageHandler({
                                    title: data.title,
                                    icon: data.icon,
                                })
                            }
                            className="flex items-center gap-[10px] hover:bg-[#ECF5F5] py-[5px] px-[29px]"
                        >
                            <img
                                src={data.icon}
                                alt={data.title}
                                className="rounded-full"
                            />
                            <p className="pr-[29px] text-[#0D4C93]">
                                {data.title}
                            </p>
                        </div>
                    );
                })}
            </div>
        )
    );
}

export default ChangeLanguage;
