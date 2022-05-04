import { FC, useState } from "react";

import { CloseButton } from "~components/CloseButton";
import { ScreenshotButton } from "~components/ScreenshotButton";
import { FeedbackType, feedbackTypes } from "~utils/feedbackTypes";
import Image from "next/image";
import { ArrowLeft } from "phosphor-react";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
}
export const FeedbackContentStep: FC<FeedbackContentStepProps> = ({
  feedbackType,
  onFeedbackRestartRequested,
}) => {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const feedbackTypesInfo = feedbackTypes[feedbackType];

  return (
    <>
      <header>
        <button
          type="button"
          onClick={onFeedbackRestartRequested}
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h-4" />
        </button>
        <span className="text-xl leading-6 flex items-center gap-2">
          <Image
            src={feedbackTypesInfo.image.source}
            alt={feedbackTypesInfo.image.alt}
            height={24}
            width={24}
          />
          {feedbackTypesInfo.title}
        </span>

        <CloseButton />
      </header>
      <form className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder:zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo..."
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton
            screenshot={screenshot}
            onScreenshotTook={setScreenshot}
          />

          <button
            type="submit"
            className="p-2 bg-brand-500 rounded border-transparent flex flex-1 justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
};
