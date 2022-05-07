import { CloseButton } from "../../../closeButton";
import SuccessIcon from '../../../../assets/Success.svg'
import '../style.css'

interface FeedbackSuccessStepProps {
    onFeedbackRestartRequested: ()=> void
}

export function FeedbackSuccessStep (props: FeedbackSuccessStepProps) {
    const { onFeedbackRestartRequested} = props
    return (
        <>
        <header>
            <CloseButton />
        </header>

        <div className="successContentContainer">
            <img src={SuccessIcon} alt="Imagem de sucesso" />
            <span className="text-xl mt-2">Agradecemos o feedback</span>
            <button 
            type="button"
            onClick={onFeedbackRestartRequested}
            className="BtnReplyFeedback bg-zinc-800">
                Quero enviar outro
            </button>
        </div>
        </>
    )
}