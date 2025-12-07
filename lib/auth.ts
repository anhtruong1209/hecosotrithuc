import { cookies } from 'next/headers';

export function isAdmin(): boolean {
  const cookieStore = cookies();
  const token = cookieStore.get('admin_token');
  return !!token;
}

export function requireAdmin(): void {
  if (!isAdmin()) {
    throw new Error('Unauthorized');
  }
}

