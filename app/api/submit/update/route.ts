import { NextRequest, NextResponse } from 'next/server';
import { readDB, writeDB } from '@/lib/db';

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
    const body = await request.json();
    const { id, fullname, phone, email } = body;

    if (!id) {
      return NextResponse.json(
        { error: 'Missing submission ID' },
        { status: 400 }
      );
    }

    // Get IP address for logging
    const ip_address = getIpAddress(request);

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
    // Update IP address if not already set or update it for logging
    db.submissions[submissionIndex].ip_address = ip_address;

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

