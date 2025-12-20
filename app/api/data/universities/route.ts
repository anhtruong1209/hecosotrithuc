import { NextResponse } from 'next/server';
import { getUniversities } from '@/lib/mongodb-data';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const universities = await getUniversities();
    return NextResponse.json({ universities });
  } catch (error) {
    console.error('Error fetching universities:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

