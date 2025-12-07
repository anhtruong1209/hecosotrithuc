import { NextRequest, NextResponse } from 'next/server';
import { addTestResult, getSubmissionsByEmail } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, test_type, test_name, result } = body;

    if (!email || !test_type || !result) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Kiểm tra xem có submission nào với email này không
    const submissions = getSubmissionsByEmail(email);
    
    if (submissions.length === 0) {
      // Nếu chưa có submission, tạo một submission mới chỉ để lưu test result
      // Hoặc có thể trả về lỗi yêu cầu làm bài tư vấn trước
      return NextResponse.json(
        { error: 'Please complete the consultation form first', message: 'Vui lòng hoàn thành bài tư vấn trước' },
        { status: 400 }
      );
    }

    // Lưu test result vào submission mới nhất
    const latestSubmission = submissions[submissions.length - 1];
    const success = addTestResult(email, {
      test_type,
      test_name: test_name || test_type,
      result,
      completed_at: new Date().toISOString()
    });

    if (!success) {
      return NextResponse.json(
        { error: 'Failed to save test result' },
        { status: 500 }
      );
    }

    return NextResponse.json({ 
      success: true,
      message: 'Test result saved successfully'
    });
  } catch (error) {
    console.error('Error saving test result:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

