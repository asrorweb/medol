function GlobalBtn({ text, className = "" }) {
    return (
        <button
            className={`global_btn hover:opacity-70 max-md:block  max-md:text-[20px] max-md:py-[18px] duration-100 text-white leading-normal w-[270px]  font-medium rounded-[35px] opacity-90 ${className}`}
        >
            {text}
        </button>
    );
}

export default GlobalBtn;
