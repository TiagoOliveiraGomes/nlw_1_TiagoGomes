import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType } from "..";
import { api } from "../../../../lib/api";
import { feedbackTypes } from "../../../../utils/feedbackTypes";
import { CloseButton } from "../../../closeButton";
import { Loading } from "../../../loading";
import { ScreenshotButton } from "../../../screenshotButton";
import '../style.css'

interface FeedbackContentStepProps {
    feedbackType: FeedbackType,
    onFeedbackRestartRequested: () => void
    onFeedbackSent: () => void
}

export function FeedbackContentStep (props:FeedbackContentStepProps) {
    const {feedbackType, onFeedbackRestartRequested, onFeedbackSent} = props
    const [screenshot, setScreenshot] = useState<string | null>(null)
    const [comment, setComment] = useState('')
    const [isSendingFeedback, setIsSendingFeedback] = useState(false)
    const feedbackTypeInfo = feedbackTypes[feedbackType]

    async function handleSubmitFeedback (event: FormEvent) {
        event.preventDefault()
        setIsSendingFeedback(true)
        
        
        await api.post('/feedbacks', {
            type: feedbackType,
            comment,
            screenshot,
        })
        
        setIsSendingFeedback(false)
        onFeedbackSent()
    }
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
    
          <form onSubmit={handleSubmitFeedback} className="my-4 w-full">
              <textarea
              className="textAreaWidget scrollbar-thumb-zinc-700"
              placeholder="Digite aqui em detalhes o que está acontecendo..."
              onChange={event => setComment(event.target.value)}
              />
          

            <footer className="feedbackContentFooterContainer">
                <ScreenshotButton
                screenshot={screenshot}
                onScreenshotTook={setScreenshot} 
                />
                <button
                type="submit"
                disabled={comment.length === 0 || isSendingFeedback}
                className="btnSubmitWidget bg-brand-500">
                    {isSendingFeedback?<Loading /> : 'Enviar Feedback'}
                </button>
            </footer>
          </form>
        </div>
      )
}