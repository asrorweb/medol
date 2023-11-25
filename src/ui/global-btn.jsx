function GlobalBtn({ text, className = "" }) {
    return (
        <button
            className={`global_btn hover:opacity-70 max-md:block max-md:w-full max-md:text-[20px] max-md:py-[18px] duration-100 text-white leading-normal w-[270px] h-[70px] flex justify-center items-center text-[24px] font-medium rounded-[35px] opacity-90 ${className}`}
        >
            {text}
        </button>
    );
}

export default GlobalBtn;
