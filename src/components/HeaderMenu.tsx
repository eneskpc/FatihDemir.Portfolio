import { Link, NavLink } from "react-router-dom";

const HeaderMenu = () => {
    return (
        <div id="menu" className="w-full mt-5 md:mt-0 flex justify-center md:justify-end items-center">
            <NavLink className="px-5 font-bold py-2 transition-all text-slate-600 hover:text-slate-400" to={"/"}>
                ANASAYFA
            </NavLink>
            <NavLink className="px-5 font-bold py-2 transition-all text-slate-600 hover:text-slate-400" to={"/hakkinda"}>
                HAKKINDA
            </NavLink>
            <NavLink className="px-5 font-bold py-2 transition-all text-slate-600 hover:text-slate-400" to={"/videolar"}>
                VIDEOLAR
            </NavLink>
            <NavLink className="px-5 font-bold py-2 transition-all text-slate-600 hover:text-slate-400" to={"/etkinlikler"}>
                ETKİNLİKLER
            </NavLink>
        </div>
    )
}

export default HeaderMenu