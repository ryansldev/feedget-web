import type { FC } from "react";
import { useState } from "react";

import { FeedbackContentStep } from "~components/WidgetForm/Steps/FeedbackContentStep";
import { FeedbackTypeStep } from "~components/WidgetForm/Steps/FeedbackTypeStep";
import type { FeedbackType } from "~utils/feedbackTypes";
import Link from "next/link";

export const WidgetForm: FC = () => {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handleRestartFeedback() {
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep
          feedbackType={feedbackType}
          onFeedbackRestartRequested={handleRestartFeedback}
        />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ♥ pela{" "}
        <Link href="https://rocketseat.com.br" passHref>
          <a className="underline underline-offset-1" target="_blank">
            Rocketseat
          </a>
        </Link>
      </footer>
    </div>
  );
};
