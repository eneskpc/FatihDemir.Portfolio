import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useRef } from 'react';
import { changeFooterHeight } from '../app/features/themeSlice';
import { useAppDispatch } from '../app/hooks';

const Footer = () => {
    const footerContainerRef = useRef<HTMLDivElement | null>(null);
    const dispatch = useAppDispatch();

    const handleResize = () => {
        if (footerContainerRef && footerContainerRef.current) {
            dispatch(
                changeFooterHeight(footerContainerRef.current.clientHeight)
            );
        }
    }

    useEffect(() => {
        handleResize();
    });

    return (
        <div ref={footerContainerRef} className="bg-slate-900 p-10 text-white flex justify-between items-center">
            <div>
                <a className='mr-3 transition-all hover:scale-125' href='https://www.youtube.com/@fatihdemir3688' target={"_blank"}>
                    <FontAwesomeIcon icon={faYoutube} fixedWidth />
                </a>
                <a className='transition-all hover:scale-125' href='https://www.instagram.com/ffatihdmr' target={"_blank"}>
                    <FontAwesomeIcon icon={faInstagram} fixedWidth />
                </a>
            </div>
            <div>Copyright &copy; {new Date().getFullYear()} Fatih Demir. Tüm Hakları Saklıdır.</div>
        </div>
    )
}

export default Footer