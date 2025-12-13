import { NextRequest, NextResponse } from 'next/server';
import { readDB, writeDB } from '@/lib/db';

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

    // Read database
    let db;
    try {
      db = readDB();
      console.log('Total submissions in DB:', db.submissions.length);
      console.log('Submission IDs:', db.submissions.map((s: any) => s.id));
    } catch (dbError) {
      console.error('Error reading database:', dbError);
      return NextResponse.json(
        { error: 'Có lỗi xảy ra khi đọc dữ liệu' },
        { status: 500 }
      );
    }

    const submissionIndex = db.submissions.findIndex((s: any) => s.id === submissionId);

    if (submissionIndex === -1) {
      console.log(`Submission not found with ID: ${submissionId}. Creating new submission with user info.`);
      
      // If submission not found, create a new one with minimal data
      // This handles the case where database was reset or submission was lost
      const newId = db.submissions.length > 0 
        ? Math.max(...db.submissions.map((s: any) => s.id)) + 1 
        : submissionId || 1;
      
      const newSubmission: any = {
        id: newId,
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
      };
      
      db.submissions.push(newSubmission);
      console.log(`Created new submission with ID: ${newId}`);
    } else {
      // Update existing submission
      db.submissions[submissionIndex].fullname = fullname || '';
      db.submissions[submissionIndex].phone = phone || '';
      db.submissions[submissionIndex].email = email || '';
      // Update IP address if not already set or update it for logging
      db.submissions[submissionIndex].ip_address = ip_address;
      console.log(`Updated submission with ID: ${submissionId}`);
    }

    // Write back to database
    try {
      writeDB(db);
    } catch (writeError) {
      console.error('Error writing database:', writeError);
      return NextResponse.json(
        { error: 'Có lỗi xảy ra khi lưu dữ liệu' },
        { status: 500 }
      );
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

