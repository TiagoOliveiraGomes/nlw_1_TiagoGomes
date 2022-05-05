import { useState } from "react";
import { CloseButton } from "../../closeButton";
import "./style.css";

import { feedbackTypes } from "../../../utils/feedbackTypes";
import { FeedbackTypeStep } from "./steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./steps/FeedbackContentStep";

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handleRestartFeedback() {
      setFeedbackType(null)
  }
  return (
    <div className="widgetFormContainer">
      
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep 
        onFeedbackRestartRequested={handleRestartFeedback} 
        feedbackType={feedbackType} />
      )}

      <footer className="widgetFormFooter">
        Feito com ♥︎ pela{" "}
        <a className="linkWidget" href="https://Rocketseat.com.br">
          Rocketseat
        </a>
      </footer>
    </div>
  );
}
