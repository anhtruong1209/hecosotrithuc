import { NextRequest, NextResponse } from 'next/server';
import { getSubmissionById, updateSubmission, saveSubmission } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Helper function to get IP address from request
function getIpAddress(request: NextRequest): string {
  // Check various headers for IP address (for proxies/load balancers)
  const forwarded = request.headers.get('x-forwarded-for');
  const realIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('cf-connecting-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  if (realIp) {
    return realIp;
  }
  if (cfConnectingIp) {
    return cfConnectingIp;
  }
  
  // Fallback if no IP found in headers
  return 'unknown';
}

export async function POST(request: NextRequest) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error('Error parsing request body:', parseError);
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    const { id, fullname, phone, email } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Missing submission ID' },
        { status: 400 }
      );
    }

    const submissionId = typeof id === 'string' ? parseInt(id) : id;
    console.log('Updating submission with ID:', submissionId);

    // Get IP address for logging
    const ip_address = getIpAddress(request);

    // Check if submission exists
    const existingSubmission = await getSubmissionById(submissionId);

    if (!existingSubmission) {
      console.log(`Submission not found with ID: ${submissionId}. Creating new submission with user info.`);
      
      // If submission not found, create a new one with minimal data
      // This handles the case where database was reset or submission was lost
      const newId = await saveSubmission({
        fullname: fullname || '',
        phone: phone || '',
        email: email || '',
        ip_address: ip_address,
        sothich: '',
        monmanh: [],
        tinhcach: [],
        muctieu: '',
        study_option: 'domestic',
        r_scores: {},
        major: 'Chưa có kết quả',
        description: 'Thông tin đã được lưu nhưng chưa có kết quả tư vấn. Vui lòng làm lại bài test.',
        strengths: [],
        jobs: [],
        related_majors: [],
        suggested_blocks: [],
        created_at: new Date().toISOString()
      });
      
      console.log(`Created new submission with ID: ${newId}`);
    } else {
      // Update existing submission
      const success = await updateSubmission(submissionId, {
        fullname: fullname || '',
        phone: phone || '',
        email: email || '',
        ip_address: ip_address
      });
      
      if (!success) {
        return NextResponse.json(
          { error: 'Không thể cập nhật thông tin' },
          { status: 500 }
        );
      }
      
      console.log(`Updated submission with ID: ${submissionId}`);
    }

    return NextResponse.json({ 
      success: true,
      message: 'Thông tin đã được cập nhật thành công'
    });
  } catch (error) {
    console.error('Error updating submission:', error);
    return NextResponse.json(
      { error: 'Có lỗi xảy ra khi cập nhật thông tin. Vui lòng thử lại.' },
      { status: 500 }
    );
  }
}

