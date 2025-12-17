import { NextRequest, NextResponse } from 'next/server';
import { getSubmissionById } from '@/lib/db';
import { requireAdmin } from '@/lib/auth';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  try {
    await requireAdmin();
    const resolvedParams = params instanceof Promise ? await params : params;
    const id = parseInt(resolvedParams.id);
    const submission = await getSubmissionById(id);
    
    if (!submission) {
      return NextResponse.json(
        { error: 'Not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json(submission);
  } catch (error) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }
}

