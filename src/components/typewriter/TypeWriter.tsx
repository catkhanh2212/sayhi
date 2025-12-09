import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TypeWriter({ text, speed = 50, onComplete }: any) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) {
        clearInterval(interval);
        if (onComplete) onComplete();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, onComplete]);

  return <>{displayed}</>;
}

export default TypeWriter;
