import { NextResponse } from 'next/server';
import { getSubmissions } from '@/lib/db';
import { requireAdmin } from '@/lib/auth';

export async function GET() {
  try {
    await requireAdmin();
    const submissions = await getSubmissions(500);
    return NextResponse.json(submissions);
  } catch (error) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
}

