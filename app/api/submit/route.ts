import { NextRequest, NextResponse } from 'next/server';
import { calculateRIASECScores, expertSystem, suggestExamBlocks } from '@/lib/riasec';
import { saveSubmission } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const fullname = formData.get('fullname') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const sothich = formData.get('sothich') as string;
    const monmanh = formData.getAll('monmanh') as string[];
    const tinhcach = formData.getAll('tinhcach') as string[];
    const muctieu = formData.get('muctieu') as string;

    // Calculate RIASEC scores
    const r_scores = calculateRIASECScores(sothich, monmanh, tinhcach, muctieu);

    // Get expert system recommendation
    const { major, description, strengths, jobs, related_majors } = expertSystem(
      sothich,
      monmanh,
      tinhcach,
      muctieu,
      r_scores
    );

    // Suggest exam blocks
    const suggested_blocks = suggestExamBlocks(r_scores, monmanh);

    // Save submission
    const submissionId = saveSubmission({
      fullname: fullname || '',
      phone: phone || '',
      email: email || '',
      sothich,
      monmanh,
      tinhcach,
      muctieu,
      r_scores: r_scores as unknown as Record<string, number>,
      major,
      description,
      strengths,
      jobs,
      related_majors,
      suggested_blocks,
      created_at: new Date().toISOString(),
    });

    // Redirect to result page with data
    const resultUrl = new URL('/result', request.url);
    resultUrl.searchParams.set('id', submissionId.toString());
    
    return NextResponse.redirect(resultUrl);
  } catch (error) {
    console.error('Error processing submission:', error);
    return NextResponse.json(
      { error: 'Có lỗi xảy ra khi xử lý yêu cầu' },
      { status: 500 }
    );
  }
}

