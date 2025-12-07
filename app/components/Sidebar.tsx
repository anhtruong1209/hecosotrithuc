'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname() || '/';

  const menuItems = [
    { href: '/', label: 'Trang chủ', icon: '🏠' },
    { href: '/test', label: 'Bài tư vấn', icon: '🎯' },
    { href: '/tests', label: 'Chọn test', icon: '🧪' },
    { href: '/majors', label: 'Ngành học', icon: '📚' },
    { href: '/guide', label: 'Hướng dẫn', icon: '📖' },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 glass-dark border-r border-blue-200/30 z-40">
      <div className="h-full flex flex-col p-6">
        {/* Logo/Title */}
        <div className="mb-8 pt-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
              🎓
            </div>
            <div>
              <h2 className="text-lg font-bold text-blue-700">
                Hệ Tư Vấn
              </h2>
              <p className="text-xs text-gray-600">Chọn Ngành Học</p>
            </div>
          </div>
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
                    {item.label}
                  </span>

                  {/* Hover effect */}
                  <div className="absolute inset-0 rounded-xl bg-blue-50/0 group-hover:bg-blue-50/30 transition-all duration-300"></div>
                </Link>
              );
            })}
          </nav>

        {/* Footer */}
        <div className="pt-4 border-t border-blue-200/30 mt-auto space-y-2">
          <Link
            href="/admin/login"
            className="group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-gray-700 hover:text-blue-700 hover:bg-blue-50/50 border border-transparent hover:border-blue-200/50"
          >
            <span className="text-xl group-hover:scale-125 transition-transform duration-300">
              🔐
            </span>
            <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
              Đăng nhập
            </span>
          </Link>
        </div>
      </div>
    </aside>
  );
}

