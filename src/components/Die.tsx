import type { JSX } from "react";

type DieProps = {
  isHeld: boolean;
  hold: () => void;
  value: number;
};

export default function Die({ isHeld, hold, value }: DieProps): JSX.Element {
  const styles = {
    backgroundColor: isHeld ? "#BDBF09" : "#F5EFED",
  };

  return (
    <button
      style={styles}
      onClick={hold}
      aria-pressed={isHeld}
      aria-label={`Die with value ${value}, 
            ${isHeld ? "held" : "not held"}`}
    >
      {value}
    </button>
  );
}
