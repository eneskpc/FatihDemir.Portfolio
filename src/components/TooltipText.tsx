import { ReactNode, useState } from "react"

type Props = {
    tooltipElement: ReactNode
    children: ReactNode
}

const TooltipText = (props: Props) => {
    const [onHover, setOnHover] = useState(false);
    return (
        <div className="relative w-full" onMouseEnter={() => setOnHover(true)} onMouseLeave={() => setOnHover(false)}>
            <div>
                {props.children}
            </div>
            {
                onHover && <small className="absolute left-0 -top-full px-1 rounded bg-slate-900/80 text-white">
                    {props.tooltipElement}
                </small>
            }
        </div>
    )
}

export default TooltipText