"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDelay?: number;
  className?: string;
  cursorClassName?: string;
}

export function Typewriter({
  words,
  typingSpeed = 110,
  deletingSpeed = 50,
  pauseDelay = 1800,
  className = "",
  cursorClassName = "",
}: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), "");
  const word = words[wordIndex % words.length];

  useEffect(() => {
    let delay: number;
    let done: () => void;

    if (!isDeleting && text === word) {
      delay = pauseDelay;
      done = () => setIsDeleting(true);
    } else if (isDeleting && text === "") {
      delay = deletingSpeed;
      done = () => {
        setIsDeleting(false);
        setWordIndex(wordIndex + 1 >= words.length ? 0 : wordIndex + 1);
      };
    } else {
      delay = isDeleting ? deletingSpeed : typingSpeed;
      done = () =>
        setText(word.slice(0, text.length + (isDeleting ? -1 : 1)));
    }

    const timeout = setTimeout(done, delay);
    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    word,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDelay,
  ]);

  return (
    <span className={`relative inline-block text-left ${className}`}>
      <span className="invisible whitespace-pre " aria-hidden="true">
        {longest}
      </span>
      <span className="absolute inset-0 min-w-[300px]">
        {text}
        <span className={`animate-pulse ${cursorClassName}`}>|</span>
      </span>
    </span>
  );
}
