import { NextRequest, NextResponse } from 'next/server';
import { expertSystem, suggestExamBlocks } from '@/lib/riasec';
import { saveSubmission } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Helper function to get IP address from request
function getIpAddress(request: NextRequest): string {
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
  
  return 'unknown';
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullname, phone, email, r_scores } = body;

    if (!r_scores) {
      return NextResponse.json(
        { error: 'Missing required field: r_scores' },
        { status: 400 }
      );
    }

    // Get IP address for logging
    const ip_address = getIpAddress(request);

    // Determine top type from scores
    const topType = Object.entries(r_scores).reduce((a, b) =>
      r_scores[a[0] as keyof typeof r_scores] > r_scores[b[0] as keyof typeof r_scores] ? a : b
    )[0];

    // Use expert system to get recommendation based on top type
    // We'll use empty arrays for form fields since we only have RIASEC scores
    const { major, description, strengths, jobs, related_majors } = expertSystem(
      '', // sothich - empty since we only have scores
      [], // monmanh - empty
      [], // tinhcach - empty
      '', // muctieu - empty
      r_scores
    );

    // Suggest exam blocks (with empty monmanh since we don't have that info)
    const suggested_blocks = suggestExamBlocks(r_scores, []);

    // Save submission
    const submissionId = saveSubmission({
      fullname: fullname || '',
      phone: phone || '',
      email: email || '',
      ip_address: ip_address,
      sothich: '',
      monmanh: [],
      tinhcach: [],
      muctieu: '',
      study_option: 'domestic',
      university_id: undefined,
      study_abroad_country: undefined,
      r_scores: r_scores as unknown as Record<string, number>,
      major,
      description,
      strengths,
      jobs,
      related_majors,
      suggested_blocks,
      created_at: new Date().toISOString(),
    });

    // Return JSON with submission ID
    return NextResponse.json({ 
      success: true,
      id: submissionId,
      data: {
        id: submissionId,
        major,
        description,
        strengths,
        jobs,
        related_majors,
        suggested_blocks,
        r_scores,
        study_option: 'domestic',
      }
    });
  } catch (error) {
    console.error('Error processing Riasec submission:', error);
    return NextResponse.json(
      { error: 'Có lỗi xảy ra khi xử lý yêu cầu' },
      { status: 500 }
    );
  }
}

