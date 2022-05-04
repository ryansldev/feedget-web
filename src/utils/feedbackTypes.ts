export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: "/assets/bug.svg",
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: "/assets/idea.svg",
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: "/assets/thought.svg",
      alt: "Imagem de um balão de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;
