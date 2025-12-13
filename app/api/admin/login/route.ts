import { NextRequest, NextResponse } from 'next/server';
import { getAdminByUsername } from '@/lib/db';
import bcrypt from 'bcryptjs';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    // Check admin credentials
    // Hardcoded admin: username="admin", password="admin@123"
    if (username === 'admin' && password === 'admin@123') {
      // Create session token (simple approach)
      const token = Buffer.from(`admin:${Date.now()}`).toString('base64');
      
      const response = NextResponse.redirect(new URL('/admin', request.url));
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
    const admin = getAdminByUsername(username);
    if (admin) {
      const isValid = await bcrypt.compare(password, admin.password_hash);
      if (isValid) {
        const token = Buffer.from(`admin:${Date.now()}`).toString('base64');
        const response = NextResponse.redirect(new URL('/admin', request.url));
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
    return NextResponse.redirect(new URL('/admin/login?error=invalid', request.url));
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.redirect(new URL('/admin/login?error=server', request.url));
  }
}

