import { useState } from "react";
import { CloseButton } from "../../closeButton";
import "./style.css";

import { feedbackTypes } from "../../../utils/feedbackTypes";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./steps/FeedbackSuccessStep";

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSent(false)
    setFeedbackType(null);
  }
  return (
    <div className="widgetFormContainer">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback}/>
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              onFeedbackSent={() => setFeedbackSent(true)}
              onFeedbackRestartRequested={handleRestartFeedback}
              feedbackType={feedbackType}
            />
          )}
        </>
      )}

      <footer className="widgetFormFooter">
        Feito com ♥︎ por{" "}
        <a className="linkWidget" href="https://Rocketseat.com.br">
          Tiago Gomes
        </a>
      </footer>
    </div>
  );
}
