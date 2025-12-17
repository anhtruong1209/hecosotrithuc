import { NextRequest, NextResponse } from 'next/server';
import { getAdminByUsername } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    let username: string;
    let password: string;

    // Handle both FormData and URL-encoded data
    const contentType = request.headers.get('content-type');
    if (contentType?.includes('application/x-www-form-urlencoded')) {
      const body = await request.text();
      const params = new URLSearchParams(body);
      username = params.get('username') as string;
      password = params.get('password') as string;
    } else {
      const formData = await request.formData();
      username = formData.get('username') as string;
      password = formData.get('password') as string;
    }

    // Check admin credentials
    // Hardcoded admin: username="admin", password="admin@123"
    if (username === 'admin' && password === 'admin@123') {
      // Create session token (simple approach)
      const token = Buffer.from(`admin:${Date.now()}`).toString('base64');
      
      const response = NextResponse.json({ success: true, redirect: '/admin' });
      response.cookies.set('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production' || process.env.VERCEL === '1',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 7 days
      });
      
      return response;
    }

    // Check database admins
    const admin = await getAdminByUsername(username);
    if (admin) {
      const isValid = await bcrypt.compare(password, admin.password_hash);
      if (isValid) {
        const token = Buffer.from(`admin:${Date.now()}`).toString('base64');
        const response = NextResponse.json({ success: true, redirect: '/admin' });
        response.cookies.set('admin_token', token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === 'production' || process.env.VERCEL === '1',
          sameSite: 'lax',
          path: '/',
          maxAge: 60 * 60 * 24 * 7,
        });
        return response;
      }
    }

    // Invalid credentials
    return NextResponse.json(
      { success: false, error: 'Tên đăng nhập hoặc mật khẩu không đúng' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, error: 'Có lỗi xảy ra. Vui lòng thử lại.' },
      { status: 500 }
    );
  }
}

