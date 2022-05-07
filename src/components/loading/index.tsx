import { CircleNotch } from "phosphor-react";
import './style.css'

export function Loading () {
    return(
        <div className="loadingIconContainer">
            <CircleNotch weight="bold" className="w-4 h-4 animate-spin" />
        </div>
    )
}