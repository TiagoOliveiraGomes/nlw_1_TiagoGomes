import { FeedbackType } from "..";
import { feedbackTypes } from "../../../../utils/feedbackTypes";
import { CloseButton } from "../../../closeButton";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({onFeedbackTypeChanged,}: FeedbackTypeStepProps) {
  return (
    <div>

      <header>
        <CloseButton />
        <span className="titleHeader">Deixe seu feedback</span>
      </header>

      <div className="optionsContainer">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              key={key}
              className="optionButton"
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>

    </div>
  )
}
