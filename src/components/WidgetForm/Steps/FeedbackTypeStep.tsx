import type { FC } from "react";

import { CloseButton } from "~components/CloseButton";
import { feedbackTypes } from "~utils/feedbackTypes";
import type { FeedbackType } from "~utils/feedbackTypes";
import Image from "next/image";

interface FeedbackTypeStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export const FeedbackTypeStep: FC<FeedbackTypeStepProps> = ({
  onFeedbackTypeChanged,
}) => {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>

        <CloseButton />
      </header>
      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              type="button"
            >
              <div>
                <Image
                  src={value.image.source}
                  alt={value.image.alt}
                  height={40}
                  width={40}
                />
              </div>
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>
    </>
  );
};
