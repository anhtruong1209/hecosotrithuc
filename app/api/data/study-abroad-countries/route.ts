import { NextResponse } from 'next/server';
import { getStudyAbroadCountries } from '@/lib/mongodb-data';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const countries = await getStudyAbroadCountries();
    return NextResponse.json({ countries });
  } catch (error) {
    console.error('Error fetching study abroad countries:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

