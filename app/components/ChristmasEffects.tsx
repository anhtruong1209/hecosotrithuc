'use client';

import { useEffect, useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function ChristmasEffects() {
  const { theme } = useTheme();
  const [snowflakes, setSnowflakes] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (theme !== 'christmas') {
      setSnowflakes([]);
      return;
    }

    // Create snowflakes
    const flakes: JSX.Element[] = [];
    const snowflakeSymbols = ['❄', '❅', '❆', '✻', '✼', '✽', '✾', '✿'];
    
    for (let i = 0; i < 100; i++) {
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = 10 + Math.random() * 10;
      const size = 0.5 + Math.random() * 1;
      const drift = (Math.random() - 0.5) * 100;
      const symbol = snowflakeSymbols[Math.floor(Math.random() * snowflakeSymbols.length)];
      
      flakes.push(
        <div
          key={i}
          className="snowflake"
          style={{
            left: `${left}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
            fontSize: `${size}em`,
            '--snow-drift': `${drift}px`
          } as React.CSSProperties}
        >
          {symbol}
        </div>
      );
    }
    
    setSnowflakes(flakes);
  }, [theme]);

  if (theme !== 'christmas') {
    return null;
  }

  return (
    <>
      {/* Snowflakes */}
      {snowflakes}
      
      {/* Santa Claus riding reindeer across top */}
      <div className="santa-claus" title="Merry Christmas! 🎄">
      🦌🦌🎅🦌🦌
      </div>
    </>
  );
}

