import { NextResponse } from 'next/server';
import { getMajorGroups } from '@/lib/mongodb-data';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const majorGroups = await getMajorGroups();
    return NextResponse.json({ majorGroups });
  } catch (error) {
    console.error('Error fetching major groups:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

