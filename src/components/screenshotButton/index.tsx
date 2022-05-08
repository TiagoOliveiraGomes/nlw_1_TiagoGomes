import { Camera, Trash } from "phosphor-react";
import html2canvas from 'html2canvas'
import './style.css'
import { useState } from "react";
import { Loading } from "../loading";

interface ScreenshotButtonProps {
    screenshot: string | null;
    onScreenshotTook: (screenshot: string | null) => void;
}

export function ScreenshotButton(props:ScreenshotButtonProps) {
    const {screenshot, onScreenshotTook} = props
    const [isTakingScreenshot, setIsTakingScreenshot] = useState(false)

    async function handleTakeScreenshot () {
        setIsTakingScreenshot(true)

        const canvas = await html2canvas(document.querySelector('html')!)
        const base64img = canvas.toDataURL('image/png')
        onScreenshotTook(base64img)

        setIsTakingScreenshot(false)
    }

    if(screenshot){
        console.log("daskdoasd")
        return (
            <button
            type="button"
            className="btnScreenshotAlternative"
            onClick={()=> onScreenshotTook(null)}
            style={{
                backgroundImage: `url(${screenshot})`,
                
            }}
            >
                <Trash weight="fill" />
            </button>
        )
    }
  return (
    <button
    onClick={handleTakeScreenshot} type="button" className="btnScreenshot bg-zinc-800">
      {isTakingScreenshot? <Loading />: <Camera className="cameraIcon" />}
    </button>
  );
}
