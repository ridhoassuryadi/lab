
import logo from './logo.svg';
import './App.css';
import { Case } from "./Terminal"

import React, { useEffect, useRef } from 'react';
import { BackgroundBoxes } from './BackgroundBoxes';


const ClickSpark: React.FC = () => {
  const sparkRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const parent = parentRef.current;
    const sparkElement = sparkRef.current;

    if (!parent || !sparkElement) return;

    const handleClick = (e: MouseEvent) => {
      setSparkPosition(e);
      animateSpark();
    };

    const animateSpark = () => {
      const sparks = Array.from(sparkElement.querySelectorAll<SVGLineElement>('line'));
      const size = parseInt(sparks[0].getAttribute('y1') || '0');
      const offset = `${size / 2}px`;

      const keyframes = (i: number): Keyframe[] => {
        const deg = `calc(${i} * (360deg / ${sparks.length}))`;

        return [
          {
            strokeDashoffset: size * 3,
            transform: `rotate(${deg}) translateY(${offset})`,
          },
          {
            strokeDashoffset: size,
            transform: `rotate(${deg}) translateY(0)`,
          },
        ];
      };

      const options: KeyframeAnimationOptions = {
        duration: 660,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        fill: 'forwards',
      };

      sparks.forEach((spark, i) => spark.animate(keyframes(i), options));
    };

    const setSparkPosition = (e: MouseEvent) => {
      const rect = sparkElement.getBoundingClientRect();
      sparkElement.style.left = `${e.pageX - rect.width / 2}px`;
      sparkElement.style.top = `${e.pageY - rect.height / 2}px`;
    };

    parent.addEventListener('click', (e) => {
      handleClick(e);
      e.stopPropagation(); // Stop the event from bubbling up
    });

    return () => {
      parent.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div ref={parentRef} className="Spark" style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 999 }}>
      <div
        ref={sparkRef}
        style={{
          position: 'absolute',
          pointerEvents: 'none',
        }}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 100 100"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          stroke="var(--click-spark-color, currentcolor)"
          transform="rotate(-20)"
        >
          {Array.from({ length: 8 }).map((_, index) => (
            <line
              key={index}
              x1="50"
              y1="30"
              x2="50"
              y2="4"
              strokeDasharray="30"
              strokeDashoffset="30"
              style={{ transformOrigin: 'center' }}
            />
          ))}
        </svg>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BackgroundBoxes />
      <Case />
    </div>
  );
}

export default App;
