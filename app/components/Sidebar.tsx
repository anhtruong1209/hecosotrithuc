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
    <aside className="fixed left-0 top-0 h-full w-64 z-40 bg-gradient-to-br from-blue-50/90 via-purple-50/90 to-pink-50/90 backdrop-blur-lg border-r border-white/40">
      <div className="h-full flex flex-col p-6">
        {/* Logo/Title */}
        <div className="mb-8 pt-6">
          <div className="clay-card clay-card-blue p-4 rounded-2xl">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gradient-to-br from-blue-500 to-purple-500 shadow-lg">
                🎓
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-800">
                  Hệ Tư Vấn
                </h2>
                <p className="text-xs text-gray-600">Chọn Ngành Học</p>
              </div>
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
                    ? 'clay-button-secondary text-white shadow-lg scale-105'
                    : 'clay-card clay-card-blue text-gray-700 hover:scale-105 hover:shadow-md'
                }`}
              >
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"></div>
                )}
                
                {/* Icon */}
                <span className={`text-xl transition-transform duration-300 ${isActive ? '' : 'group-hover:scale-125'}`}>
                  {item.icon}
                </span>
                
                {/* Label */}
                <span className={`text-sm font-medium transition-transform duration-300 ${isActive ? '' : 'group-hover:translate-x-1'}`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="pt-4 mt-auto">
          <div className="clay-card clay-card-purple p-4 rounded-xl">
            <Link
              href="/admin/login"
              className="group flex items-center gap-3 px-2 py-2 rounded-lg transition-all duration-300 text-gray-700 hover:text-gray-800"
            >
              <span className="text-xl group-hover:scale-125 transition-transform duration-300">
                🔐
              </span>
              <span className="text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
                Đăng nhập Admin
              </span>
            </Link>
          </div>
          <div className="mt-3 text-center">
            <p className="text-xs text-gray-500">
              © 2025 Hệ Chuyên Gia
            </p>
            <p className="text-xs text-gray-400 mt-1">
              CNTT2025.1
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

