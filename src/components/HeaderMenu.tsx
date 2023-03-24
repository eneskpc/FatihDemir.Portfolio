import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NavLink } from "react-router-dom";

type MenuItem = {
    name: string
    link: string
}

const menuItems = [{
    name: "ANASAYFA",
    link: "/"
}, {
    name: "HAKKINDA",
    link: "/hakkinda"
}, {
    name: "VİDEOLAR",
    link: "/videolar"
}, {
    name: "ETKİNLİKLER",
    link: "/etkinlikler"
}, {
    name: "İLETİŞİM",
    link: "/iletisim"
}] as MenuItem[];

const HeaderMenu = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
        <>
            <div className="lg:hidden">
                <button onClick={() => setShowMobileMenu(true)}>
                    <FontAwesomeIcon className="w-6 h-6" icon={faBars} />
                </button>
                {
                    showMobileMenu && <div onClick={() => setShowMobileMenu(false)} className="fixed ice-box flex justify-end left-0 top-0 w-full h-full">
                        <div className="bg-slate-900 flex flex-col rounded-l-2xl">
                            {
                                menuItems.map((item) => {
                                    return <NavLink key={item.link} className={({ isActive }) => isActive
                                        ? "px-5 font-bold py-4 transition-all text-white bg-white/10"
                                        : "px-5 font-bold py-4 transition-all text-slate-600 hover:text-slate-400"} to={item.link}>
                                        {item.name}
                                    </NavLink>
                                })
                            }
                        </div>
                    </div>
                }
            </div>
            <div id="menu" className="w-full mt-5 md:mt-0 hidden lg:flex justify-center md:justify-end items-center">
                {
                    menuItems.map((item) => {
                        return <NavLink key={item.link} className="px-2 font-bold py-2 transition-all text-slate-600 hover:text-slate-400" to={item.link}>
                            {item.name}
                        </NavLink>
                    })
                }
            </div>
        </>
    )
}

export default HeaderMenu