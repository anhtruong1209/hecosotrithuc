'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname() || '/';

  const menuItems = [
    { href: '/', label: '🏠 Trang chủ', icon: '🏠' },
    { href: '/test', label: '🎯 Bài tư vấn', icon: '🎯' },
    { href: '/riasec20', label: '⚡ RIASEC 20', icon: '⚡' },
    { href: '/tests', label: '🧪 Chọn test', icon: '🧪' },
    { href: '/majors', label: '📚 Ngành học', icon: '📚' },
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed left-4 top-4 z-50 glass-button p-3 rounded-xl text-white transition-all duration-300 hover:scale-110"
        aria-label="Toggle menu"
      >
        {isOpen ? '←' : '☰'}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full glass-dark border-r border-blue-200/30 z-40 transition-all duration-300 ease-in-out ${
          isOpen ? 'w-64 translate-x-0' : '-translate-x-full w-0'
        }`}
      >
        <div className="h-full flex flex-col p-6">
          {/* Logo/Title */}
          <div className="mb-8 pt-12">
            <h2 className="text-lg font-bold text-blue-700 mb-2">
              Hệ Tư Vấn
            </h2>
            <p className="text-xs text-gray-600">Chọn Ngành Học</p>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 space-y-2">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                    isActive
                      ? 'glass-button border border-blue-400/50 text-white shadow-lg scale-105'
                      : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50/50 border border-transparent hover:border-blue-200/50'
                  }`}
                  onClick={() => {
                    // Add ripple effect
                    const event = new CustomEvent('menuClick');
                    window.dispatchEvent(event);
                  }}
                >
                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 rounded-r-full"></div>
                  )}
                  
                  {/* Icon */}
                  <span className="text-xl group-hover:scale-125 transition-transform duration-300">
                    {item.icon}
                  </span>
                  
                  {/* Label */}
                  <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                    {item.label.replace(item.icon + ' ', '')}
                  </span>

                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-xl bg-blue-50/0 group-hover:bg-blue-50/30 transition-all duration-300"></div>
                </Link>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="pt-4 border-t border-blue-200/30">
            <p className="text-xs text-gray-500 text-center">
              © 2025 CNTT
            </p>
          </div>
        </div>
      </aside>

      {/* Overlay when sidebar is open on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

