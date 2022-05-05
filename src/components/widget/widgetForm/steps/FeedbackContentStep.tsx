import { ArrowLeft } from "phosphor-react";
import { FeedbackType } from "..";
import { feedbackTypes } from "../../../../utils/feedbackTypes";
import { CloseButton } from "../../../closeButton";
import '../style.css'

interface FeedbackContentStepProps {
    feedbackType: FeedbackType,
    onFeedbackRestartRequested: () => void
}

export function FeedbackContentStep (props:FeedbackContentStepProps) {
    const {feedbackType, onFeedbackRestartRequested} = props
    const feedbackTypeInfo = feedbackTypes[feedbackType]
    return (
        <div>
            <button onClick={onFeedbackRestartRequested} type="button" className="btnArrowLeft">
                <ArrowLeft weight="bold" className="h-4 w-4"/>
            </button>
          <header>
            <CloseButton />
            <span className="titleHeader">
                <img src={feedbackTypeInfo.image.source} alt={feedbackTypeInfo.image.alt} className="w-6 h-6" />
                {feedbackTypeInfo.title}
            </span>
          </header>
    
          <form className="my-4 w-full">
              <textarea 
              className="textAreaWidget scrollbar-thumb-zinc-700"
              placeholder="Digite aqui em detalhes o que está acontecendo..."/>
          </form>

          <footer>
              <button
              type="submit"
              className="btnSubmitWidget bg-brand-500"
              >Enviar Feedback</button>
          </footer>
    
        </div>
      )
}