import { useRef, useEffect } from 'react';
import JumbutronImage from './assets/images/jumbutron-image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay, faSpotify, faDeezer } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
    const jumbutronRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (jumbutronRef && jumbutronRef.current) {
            jumbutronRef.current.scrollTo(1000, 0);
        }
    }, [jumbutronRef])


    return (
        <div className="min-h-screen">
            <div ref={jumbutronRef} className="relative overflow-hidden h-screen">
                <img src={JumbutronImage} className="w-full scale-100 md:scale-125" />
                <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center">
                    <div></div>
                    <div className='relative rounded-lg p-10'>
                        <div className='z-10 absolute ice-box top-0 left-0 w-full h-full'></div>
                        <div className='z-50 relative'>
                            <h3 className="py-4 text-center font-bold text-2xl text-stone-700">YENİ SINGLE ÇIKTI !</h3>
                            <iframe className='md:w-96 w-full' src="https://open.spotify.com/embed/track/4a16511IE7eJCDdEJ207sn?utm_source=generator" width="100%" height="152" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            <div className='flex justify-between items-center pt-10'>
                                <a>
                                    <FontAwesomeIcon className='w-6 h-6' icon={faSpotify} />
                                </a>
                                <a>
                                    <FontAwesomeIcon className='w-6 h-6' icon={faApple} />
                                </a>
                                <a>
                                    <FontAwesomeIcon className='w-6 h-6' icon={faGooglePlay} />
                                </a>
                                <a>
                                    <FontAwesomeIcon className='w-6 h-6' icon={faDeezer} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Home