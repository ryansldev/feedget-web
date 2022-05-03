import type { FC } from "react";

import Link from "next/link";

export const WidgetForm: FC = () => {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
      </header>

      <p>Hello world</p>

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
