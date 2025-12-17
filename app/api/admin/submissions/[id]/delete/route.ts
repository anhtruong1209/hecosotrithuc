import { NextRequest, NextResponse } from 'next/server';
import { deleteSubmission } from '@/lib/db';
import { isAdmin } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> | { id: string } }
) {
  try {
    if (!(await isAdmin())) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const resolvedParams = params instanceof Promise ? await params : params;
    const id = parseInt(resolvedParams.id);

    if (isNaN(id)) {
      return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
    }

    const success = await deleteSubmission(id);

    if (!success) {
      return NextResponse.json({ error: 'Submission not found' }, { status: 404 });
    }

    // Redirect to admin page after deletion
    return NextResponse.redirect(new URL('/admin', request.url));
  } catch (error) {
    console.error('Error deleting submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

