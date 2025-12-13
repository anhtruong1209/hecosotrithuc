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
      console.error(`Submission not found. ID: ${submissionId}, Available IDs: ${db.submissions.map((s: any) => s.id).join(', ')}`);
      // On Vercel, database might be reset or in different function instance
      // Try to find by ID in case it exists but wasn't found by index
      const submission = db.submissions.find((s: any) => s.id === submissionId);
      
      if (!submission) {
        return NextResponse.json(
          { error: `Không tìm thấy kết quả tư vấn với ID: ${submissionId}. Vui lòng thử lại sau khi làm lại bài test.` },
          { status: 404 }
        );
      }
      
      // Found by find, update it
      submission.fullname = fullname || '';
      submission.phone = phone || '';
      submission.email = email || '';
      submission.ip_address = ip_address;
    } else {
      // Update submission
      db.submissions[submissionIndex].fullname = fullname || '';
      db.submissions[submissionIndex].phone = phone || '';
      db.submissions[submissionIndex].email = email || '';
      // Update IP address if not already set or update it for logging
      db.submissions[submissionIndex].ip_address = ip_address;
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

