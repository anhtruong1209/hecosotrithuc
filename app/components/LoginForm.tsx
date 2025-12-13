'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          username,
          password,
        }),
        credentials: 'include', // Important for cookies
      });

      const data = await response.json();

      if (response.ok && data.success) {
        // Redirect to admin page
        window.location.href = data.redirect || '/admin';
      } else {
        setError(data.error || 'Tên đăng nhập hoặc mật khẩu không đúng');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-sm text-red-600">
          {error}
        </div>
      )}
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700">Tài khoản</label>
        <input 
          name="username" 
          required 
          className="w-full p-3 border rounded-xl"
          disabled={isLoading}
        />
      </div>
      <div className="mb-3">
        <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
        <input 
          name="password" 
          type="password" 
          required 
          className="w-full p-3 border rounded-xl"
          disabled={isLoading}
        />
      </div>
      <div className="text-center mt-4">
        <button 
          type="submit" 
          className="px-6 py-3 bg-blue-600 text-white rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? 'Đang đăng nhập...' : 'Đăng nhập'}
        </button>
      </div>
    </form>
  );
}

