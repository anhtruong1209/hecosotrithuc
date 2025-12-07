import './globals.css'

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
      <body>{children}</body>
    </html>
  )
}

