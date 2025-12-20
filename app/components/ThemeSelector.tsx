'use client';

import { useTheme } from './ThemeProvider';
import { useState, useEffect } from 'react';

export default function ThemeSelector() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="clay-card clay-card-purple p-4 rounded-xl mb-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xl">🎨</span>
          <span className="text-sm font-semibold text-gray-800">Chọn Theme</span>
        </div>
        <div className="space-y-2">
          <div className="w-full h-12 bg-white/20 rounded-lg animate-pulse"></div>
          <div className="w-full h-12 bg-white/20 rounded-lg animate-pulse"></div>
          <div className="w-full h-12 bg-white/20 rounded-lg animate-pulse"></div>
        </div>
      </div>
    );
  }

  const themes = [
    {
      id: 'ocean' as const,
      name: 'Ocean',
      icon: '🌊',
      description: '',
      gradient: 'from-blue-400 via-cyan-400 to-teal-400'
    },
    {
      id: 'sunset' as const,
      name: 'Sunset',
      icon: '🌅',
      description: '',
      gradient: 'from-orange-400 via-pink-400 to-rose-400'
    },
    {
      id: 'midnight' as const,
      name: 'Midnight',
      icon: '🌙',
      description: '',
      gradient: 'from-purple-500 via-indigo-500 to-blue-600'
    }
  ];

  return (
    <div className="clay-card clay-card-purple p-4 rounded-xl mb-4">
      <div className="flex items-center gap-3 mb-0">
        <span className="text-xl">🎨</span>
        <span className="text-sm font-semibold text-gray-800">Chọn Theme</span>
      </div>
      <div className="space-y-2">
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => setTheme(t.id)}
            className={`w-full flex items-center gap-3 px-3 py-1.5 rounded-lg transition-all duration-300 ${
              theme === t.id
                ? 'bg-white/40 border-2 border-white/60 shadow-md scale-105'
                : 'bg-white/20 border border-white/30 hover:bg-white/30 hover:scale-102'
            }`}
          >
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${t.gradient} flex items-center justify-center text-lg flex-shrink-0`}>
              {t.icon}
            </div>
            <div className="flex-1 text-left">
              <div className="text-xs font-semibold text-gray-800">{t.name}</div>
              <div className="text-xs text-gray-600">{t.description}</div>
            </div>
            {theme === t.id && (
              <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

