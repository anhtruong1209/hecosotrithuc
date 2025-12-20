import { NextRequest, NextResponse } from 'next/server';
import { getQuestions } from '@/lib/mongodb-data';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ testType: string }> | { testType: string } }
) {
  try {
    const resolvedParams = params instanceof Promise ? await params : params;
    const { testType } = resolvedParams;
    
    if (!testType || !['riasec20', 'mbti', 'interest', 'aptitude'].includes(testType)) {
      return NextResponse.json(
        { error: 'Invalid test type' },
        { status: 400 }
      );
    }
    
    const questions = await getQuestions(testType);
    
    return NextResponse.json({ questions });
  } catch (error) {
    console.error('Error fetching questions:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

