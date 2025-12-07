import { cookies } from 'next/headers';

export function isAdmin(): boolean {
  try {
    const cookieStore = cookies();
    const token = cookieStore.get('admin_token');
    return !!token;
  } catch (error) {
    return false;
  }
}

export function requireAdmin(): void {
  if (!isAdmin()) {
    throw new Error('Unauthorized');
  }
}

