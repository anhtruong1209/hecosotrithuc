# Hướng dẫn Deploy lên Vercel

## Yêu cầu
- Tài khoản Vercel (miễn phí tại https://vercel.com)
- Git repository (GitHub, GitLab, hoặc Bitbucket)

## Các bước deploy

### 1. Cài đặt dependencies
```bash
npm install
```

### 2. Chạy thử local
```bash
npm run dev
```

### 3. Deploy lên Vercel

#### Cách 1: Deploy qua Vercel CLI
```bash
npm i -g vercel
vercel
```

#### Cách 2: Deploy qua GitHub
1. Push code lên GitHub
2. Vào https://vercel.com
3. Click "New Project"
4. Import repository từ GitHub
5. Vercel sẽ tự động detect Next.js và deploy

## Thông tin đăng nhập Admin

- **Username:** `admin`
- **Password:** `admin@123`

## Lưu ý

- Database được lưu trong file `lib/db.json`
- File này sẽ được tạo tự động khi có submission đầu tiên
- Với Vercel, file JSON sẽ được lưu trong filesystem của serverless function
- Để backup dữ liệu, bạn có thể export file `lib/db.json` định kỳ

## Cấu trúc dự án

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── admin/             # Admin pages
│   ├── test/              # Test page
│   ├── result/            # Result page
│   └── page.tsx           # Home page
├── lib/                    # Utilities
│   ├── db.ts              # Database functions
│   ├── db.json            # JSON database (auto-generated)
│   └── riasec.ts          # RIASEC logic
└── package.json
```

## Troubleshooting

Nếu gặp lỗi khi deploy:
1. Kiểm tra Node.js version trong `package.json`
2. Đảm bảo tất cả dependencies đã được cài đặt
3. Kiểm tra logs trong Vercel dashboard

