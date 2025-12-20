import './globals.css'
import Sidebar from './components/Sidebar'
import { ThemeProvider } from './components/ThemeProvider'

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
        <ThemeProvider>
          <>
            <Sidebar />
            <main className="ml-64 transition-all duration-300 min-h-screen flex flex-col">
              <div className="flex-1">
                {children}
              </div>
              <footer className="mt-auto py-6 px-6">
                <div className="max-w-7xl mx-auto">
                  <div className="clay-card clay-card-blue p-6 rounded-2xl text-center">
                    <p className="text-sm md:text-base text-gray-700 mb-2">
                      <strong className="text-gray-800">© 2025 Hệ Chuyên Gia Hướng Nghiệp</strong>
                    </p>
                    <p className="text-xs md:text-sm text-gray-600">
                      Created by <strong className="text-gray-700">Đỗ Thị Hoa</strong> và <strong className="text-gray-700">Nguyễn Đinh Anh Trường</strong>
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      CNTT2025.1 - Trường Đại học Hàng hải Việt Nam (Viện đào tạo sau đại học)
                    </p>
                  </div>
                </div>
              </footer>
            </main>
          </>
        </ThemeProvider>
      </body>
    </html>
  )
}

