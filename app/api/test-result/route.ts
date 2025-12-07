import { NextRequest, NextResponse } from 'next/server';
import { addTestResult, getSubmissionsByEmail, saveSubmission } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullname, phone, email, test_type, test_name, result } = body;

    if (!test_type || !result) {
      return NextResponse.json(
        { error: 'Missing required fields: test_type and result' },
        { status: 400 }
      );
    }

    // Nếu có email, tìm submission theo email
    let submissionId: number | null = null;
    if (email) {
      const submissions = getSubmissionsByEmail(email);
      if (submissions.length > 0) {
        // Lưu vào submission mới nhất
        const latestSubmission = submissions[submissions.length - 1];
        submissionId = latestSubmission.id;
        const success = addTestResult(email, {
          test_type,
          test_name: test_name || test_type,
          result,
          completed_at: new Date().toISOString()
        });

        if (success) {
          return NextResponse.json({ 
            success: true,
            message: 'Test result saved successfully',
            submissionId
          });
        }
      }
    }

    // Nếu không có email hoặc không tìm thấy submission, tạo submission mới
    submissionId = saveSubmission({
      fullname: fullname || '',
      phone: phone || '',
      email: email || '',
      sothich: '',
      monmanh: [],
      tinhcach: [],
      muctieu: '',
      study_option: 'domestic',
      r_scores: {},
      major: '',
      description: '',
      strengths: [],
      jobs: [],
      related_majors: [],
      suggested_blocks: [],
      created_at: new Date().toISOString(),
      tests_completed: [{
        test_type,
        test_name: test_name || test_type,
        result,
        completed_at: new Date().toISOString()
      }]
    });

    return NextResponse.json({ 
      success: true,
      message: 'Test result saved successfully',
      submissionId
    });
  } catch (error) {
    console.error('Error saving test result:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

