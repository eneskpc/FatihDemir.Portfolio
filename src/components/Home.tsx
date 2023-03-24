import JumbutronImage from '../assets/images/jumbutron-image.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGooglePlay, faSpotify, faDeezer } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
    return (
        <div className="min-h-screen">
            <div className="relative overflow-hidden h-screen">
                <img src={JumbutronImage} className="transition-all w-full md:scale-125 md:-translate-x-[12.5%]" />
                <div className="transition-all absolute top-0 left-0 w-full h-full flex justify-between items-center md:-translate-x-[12.5%]">
                    <div className='hidden md:block'></div>
                    <div className='relative rounded-lg p-10 w-full md:w-auto'>
                        <div className='z-10 absolute ice-box rounded-2xl top-0 left-0 w-full h-full'></div>
                        <div className='z-50 relative'>
                            <h3 className="py-4 text-center font-bold text-2xl text-stone-700">YENİ SINGLE ÇIKTI !</h3>
                            <iframe className='md:w-96 w-full' src="https://open.spotify.com/embed/track/4a16511IE7eJCDdEJ207sn?utm_source=generator" width="100%" height="152" allowFullScreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                            <div className='flex justify-between items-center pt-10'>
                                <a className='transition-all hover:scale-125' href='https://open.spotify.com/track/4a16511IE7eJCDdEJ207sn' target="_blank">
                                    <FontAwesomeIcon className='w-6 h-6' icon={faSpotify} />
                                </a>
                                <a className='transition-all hover:scale-125' href='https://music.apple.com/us/album/on-sekiz-biz-aleme-server-olan-muhammed/1644690986?i=1644690988' target="_blank">
                                    <FontAwesomeIcon className='w-6 h-6' icon={faApple} />
                                </a>
                                <a className='transition-all hover:scale-125' href='https://music.youtube.com/playlist?list=OLAK5uy_kXYklIRVgm_-cMSA_nIWRI96otwElFMb8' target="_blank">
                                    <FontAwesomeIcon className='w-6 h-6' icon={faGooglePlay} />
                                </a>
                                <a className='transition-all hover:scale-125' href='https://deezer.page.link/TjrQpxAGQqeqBGkZ6' target="_blank">
                                    <FontAwesomeIcon className='w-6 h-6' icon={faDeezer} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home