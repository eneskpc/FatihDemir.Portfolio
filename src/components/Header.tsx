import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from '../app/hooks'
import { changeHeaderHeight } from '../app/features/themeSlice'
import HeaderMenu from "./HeaderMenu"
import { GetScrollPosition } from "../Helper";

const Header = () => {
    const headerContainerRef = useRef<HTMLDivElement | null>(null);
    const [headerSize, setHeaderSize] = useState<number>(150);
    const dispatch = useAppDispatch();

    const handleResize = () => {
        dispatch(
            changeHeaderHeight(headerSize)
        );
    }

    const handleScrolling = () => {
        if (headerContainerRef && headerContainerRef.current) {
            if (GetScrollPosition() > 0)
                setHeaderSize(100);
            else
                setHeaderSize(150);
        }
    }

    useEffect(() => {
        handleScrolling();
        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScrolling);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScrolling);
        };
    }, []);

    useEffect(() => {
        handleResize();
    }, [headerSize]);

    return (
        <div ref={headerContainerRef} style={{
            height: headerSize
        }} className="transition-all fixed w-full z-[999] bg-white flex justify-between items-center px-10 py-0 shadow">
            <h1 className="hidden md:block font-marck text-5xl w-full whitespace-nowrap md:text-left text-center">Fatih Demir</h1>
            <div className="hover:animate-spin flex-shrink-0 bg-neutral-700 w-20 h-20 text-white rounded-full flex justify-center items-center">
                <strong className="font-marck text-2xl mb-2">F</strong>
                <strong className="font-marck text-2xl mt-2">D</strong>
            </div>
            <HeaderMenu />
        </div>
    )
}

export default Header