import { NavLink } from "react-router-dom";
import routes from "../routes";
import { v4 as uuidv4 } from "uuid";

function Navigation() {
    return (
        <div className="max-w-[1430px] mx-auto px-[35px] max-xl:hidden">
            <ul className="flex px-[49px] bg-white items-center [&>*:not(:last-child)]:border-r-2 border-[#F2F2F2]">
                {routes.map((data) => (
                    <NavLink
                        key={uuidv4()}
                        to={data.path}
                        className="py-6 px-10 hover:text-[#00C9C9]   text-[#0D4C93] text-[20px]  whitespace-nowrap"
                    >
                        {data.name}
                    </NavLink>
                ))}
            </ul>
        </div>
    );
}

export default Navigation;
