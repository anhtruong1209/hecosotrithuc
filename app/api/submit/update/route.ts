import { NextRequest, NextResponse } from 'next/server';
import { readDB, writeDB } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, fullname, phone, email } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Missing submission ID' },
        { status: 400 }
      );
    }

    // Read database
    const db = readDB();
    const submissionIndex = db.submissions.findIndex((s: any) => s.id === parseInt(id));

    if (submissionIndex === -1) {
      return NextResponse.json(
        { error: 'Submission not found' },
        { status: 404 }
      );
    }

    // Update submission
    db.submissions[submissionIndex].fullname = fullname || '';
    db.submissions[submissionIndex].phone = phone || '';
    db.submissions[submissionIndex].email = email || '';

    // Write back to database
    writeDB(db);

    return NextResponse.json({ 
      success: true,
      message: 'Thông tin đã được cập nhật thành công'
    });
  } catch (error) {
    console.error('Error updating submission:', error);
    return NextResponse.json(
      { error: 'Có lỗi xảy ra khi cập nhật thông tin' },
      { status: 500 }
    );
  }
}

