import { useState } from "react";

export const useServicesFAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return {
    openFaq,
    toggleFaq,
  };
};
