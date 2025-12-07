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
          <footer className="mt-auto py-4 px-6 text-center text-xs text-gray-500 border-t border-gray-200">
            <p>Created by <strong>Đỗ Thị Hoa</strong> và <strong>Nguyễn Đinh Anh Trường</strong> - CNTT2025.1</p>
          </footer>
        </main>
      </body>
    </html>
  )
}

