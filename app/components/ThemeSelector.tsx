'use client';

import { useTheme } from './ThemeProvider';
import { useState, useEffect, useRef } from 'react';

export default function ThemeSelector() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Đóng khi click ra ngoài
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const handleSelectTheme = (themeId: typeof theme) => {
    setTheme(themeId);
    setIsOpen(false);
  };

  if (!mounted) {
    return (
      <div className="clay-card clay-card-purple p-4 rounded-xl mb-4">
        <div className="w-full h-10 bg-white/20 rounded-lg animate-pulse"></div>
      </div>
    );
  }

  const themes = [
    {
      id: 'christmas' as const,
      name: 'Christmas',
      icon: '🎄',
      gradient: 'from-red-500 via-green-500 to-yellow-400'
    },
    {
      id: 'ocean' as const,
      name: 'Ocean',
      icon: '🌊',
      gradient: 'from-blue-400 via-cyan-400 to-teal-400'
    },
    {
      id: 'sunset' as const,
      name: 'Sunset',
      icon: '🌅',
      gradient: 'from-orange-400 via-pink-400 to-rose-400'
    },
    {
      id: 'midnight' as const,
      name: 'Midnight',
      icon: '🌙',
      gradient: 'from-purple-500 via-indigo-500 to-blue-600'
    }
  ];

  const currentTheme = themes.find((t) => t.id === theme) || themes[0];

  return (
    <div className="clay-card clay-card-purple p-4 rounded-xl mb-4 relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={handleToggle}
        className="w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 bg-white/20 border border-white/30 hover:bg-white/30 focus:outline-none"
      >
        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${currentTheme.gradient} flex items-center justify-center text-lg flex-shrink-0`}>
          {currentTheme.icon}
        </div>
        <div className="flex-1 text-left">
          <div className="text-xs font-semibold text-gray-800">{currentTheme.name}</div>
        </div>
        <span className={`text-xs transition-transform duration-200 ease-in-out ${isOpen ? 'rotate-180' : 'rotate-0'}`}>▼</span>
      </button>
      
      {isOpen && (
        <div
          className="absolute right-0 bottom-full mb-2 bg-white rounded-xl shadow-xl border-2 border-gray-200 overflow-hidden z-50"
        >
        {themes.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => handleSelectTheme(t.id)}
            className={`w-full flex items-center gap-3 px-3 py-2 transition-colors duration-150 ${
              theme === t.id
                ? 'bg-blue-50 border-l-4 border-blue-600'
                : 'hover:bg-gray-50'
            } focus:outline-none`}
          >
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${t.gradient} flex items-center justify-center text-lg flex-shrink-0`}>
              {t.icon}
            </div>
            <div className="flex-1 text-left">
              <div className="text-xs font-semibold text-gray-800">{t.name}</div>
            </div>
            {theme === t.id && (
              <div className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0"></div>
            )}
          </button>
        ))}
        </div>
      )}
    </div>
  );
}

