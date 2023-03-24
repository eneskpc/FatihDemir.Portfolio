import { faMusic } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const LoadingIndicator = () => {
    return (
        <div className="mt-12 flex justify-center items-center">
            <FontAwesomeIcon className="w-16 h-16 text-slate-700" icon={faMusic} beatFade />
        </div>
    )
}

export default LoadingIndicator