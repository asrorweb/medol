function IconUi({ icon, single = false }) {
    return (
        <div
            className={`pt-[13px] ${
                single && "xl:hidden"
            } pr-[13px] pb-3 pl-3 max-md:py-[11.2px] max-md:pr-[12px] max-md:pl-[10.4px] inline-block bg-white rounded-full`}
        >
            {icon}
        </div>
    );
}

export default IconUi;
