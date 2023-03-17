import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="bg-slate-900 p-10 text-white flex justify-between items-center">
            <div>
                <a className='mr-3' href='https://www.youtube.com/@fatihdemir3688' target={"_blank"}>
                    <FontAwesomeIcon icon={faYoutube} fixedWidth />
                </a>
                <a href='https://www.instagram.com/ffatihdmr' target={"_blank"}>
                    <FontAwesomeIcon icon={faInstagram} fixedWidth />
                </a>
            </div>
            <div>Copyright &copy; {new Date().getFullYear()} Fatih Demir. Tüm Hakları Saklıdır.</div>
        </div>
    )
}

export default Footer