import './globals.css'
import Sidebar from './components/Sidebar'

export const metadata = {
  title: 'Hệ Chuyên Gia Tư Vấn Chọn Ngành Học',
  description: 'Khám phá ngành học phù hợp với tính cách, năng lực và sở thích của bạn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet" />
      </head>
      <body className="overflow-x-hidden">
        <Sidebar />
        <main className="ml-64 transition-all duration-300 min-h-screen flex flex-col">
          <div className="flex-1">
            {children}
          </div>
          <footer className="mt-auto py-6 px-6 text-center glass-card border-t border-white/30">
            <div className="max-w-7xl mx-auto">
              <p className="text-xs md:text-sm text-gray-600 mb-2">
                <strong className="text-blue-700">© 2025 Hệ Chuyên Gia Hướng Nghiệp</strong>
              </p>
              <p className="text-xs text-gray-500">
                Created by <strong className="text-gray-700">Đỗ Thị Hoa</strong> và <strong className="text-gray-700">Nguyễn Đinh Anh Trường</strong> - CNTT2025.1
              </p>
            </div>
          </footer>
        </main>
      </body>
    </html>
  )
}

