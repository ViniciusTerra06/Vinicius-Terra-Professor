import { useState, useEffect } from "react";

export function useTypewriter(headlines: string[], typingSpeed = 80, deletingSpeed = 40, delayBeforeDelete = 2000) {
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!headlines || headlines.length === 0) return;
    
    const current = headlines[headlineIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < current.length) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), typingSpeed);
    } else if (!isDeleting && displayText.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), delayBeforeDelete);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => setDisplayText(current.slice(0, displayText.length - 1)), deletingSpeed);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setHeadlineIndex((prev) => (prev + 1) % headlines.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, headlineIndex, headlines, typingSpeed, deletingSpeed, delayBeforeDelete]);

  return displayText;
}
