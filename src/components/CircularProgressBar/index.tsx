import { useEffect, useState } from "react";
import "./index.scss";

interface CircularProgressBarProps {
  value: number;
}

export const CircularProgressBar = ({ value }: CircularProgressBarProps) => {
  const [counter, setCounter] = useState(0);
  const ms = 1200 / value;

  useEffect(() => {
    if (counter >= value) return;
    const newV = counter + 1;
    setTimeout(() => setCounter(newV), ms);
  }, [counter]);

  return (
    <div className="progress-bar">
      <div className="outer">
        <div className="inner">
          <div className="number">{counter}%</div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="200px"
          height="200px"
        >
          <defs>
            <linearGradient id="GradientColor">
              <stop offset="0%" stopColor="#aa367c" />
              <stop offset="100%" stopColor="#4a2fbd" />
            </linearGradient>
          </defs>

          <circle
            cx="100"
            cy="100"
            r="87.5"
            strokeLinecap="round"
            style={{ "--number": value } as any}
          />
        </svg>
      </div>
    </div>
  );
};
