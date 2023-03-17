import HeaderMenu from "./HeaderMenu"

const Header = () => {
    return (
        <div className="fixed w-full z-[999] bg-white flex flex-col md:flex-row justify-between items-center p-10 shadow">
            <h1 className="font-marck text-5xl w-full whitespace-nowrap md:text-left text-center">Fatih Demir</h1>
            <div className="flex-shrink-0 bg-neutral-700 w-20 h-20 text-white rounded-full flex justify-center items-center">
                <strong className="font-marck text-2xl mb-2">F</strong>
                <strong className="font-marck text-2xl mt-2">D</strong>
            </div>
            <HeaderMenu />
        </div>
    )
}

export default Header