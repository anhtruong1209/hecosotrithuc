// Logic quy nạp tất cả các bài test để đánh giá chuẩn nhất
import { RIASECScores } from './riasec';
import { universities, studyAbroadCountries } from './universities';

export interface AggregatedTestResults {
  riasec?: RIASECScores;
  mbti?: string; // MBTI type (e.g., "INTJ")
  interest?: string[]; // Interest categories
  aptitude?: {
    strengths: string[];
    weaknesses: string[];
    overall_score: number;
  };
}

export interface MajorRecommendation {
  code: string;
  name: string;
  score: number;
  confidence: number;
  description: string;
  majors: string[];
  jobs: string[];
  exam_blocks: string[];
}

export interface UniversityRecommendation {
  id: string;
  name: string;
  code: string;
  location: string;
  type: string;
  score: number;
  reason: string;
  matching_majors: string[];
}

// Quy nạp tất cả các bài test để đánh giá chuẩn nhất
export function aggregateTestResults(tests: any[]): AggregatedTestResults {
  const aggregated: AggregatedTestResults = {};

  for (const test of tests) {
    if (test.test_type === 'riasec') {
      // RIASEC có thể có trong result.r_scores hoặc trực tiếp là r_scores
      if (test.result?.r_scores) {
        aggregated.riasec = test.result.r_scores;
      } else if (test.r_scores) {
        aggregated.riasec = test.r_scores;
      } else if (test.result && typeof test.result === 'object' && 'R' in test.result) {
        aggregated.riasec = test.result as RIASECScores;
      }
    } else if (test.test_type === 'mbti' && test.result) {
      aggregated.mbti = test.result.type || test.result.mbti_type || test.result.mbti;
    } else if (test.test_type === 'interest' && test.result) {
      aggregated.interest = test.result.top_interests || test.result.categories || test.result.interests || [];
    } else if (test.test_type === 'aptitude' && test.result) {
      aggregated.aptitude = {
        strengths: test.result.strengths || [],
        weaknesses: test.result.weaknesses || [],
        overall_score: test.result.overall_score || test.result.score || 0
      };
    }
  }

  return aggregated;
}

// Đề xuất nhóm ngành dựa trên kết quả quy nạp
export function recommendMajorGroups(aggregated: AggregatedTestResults): MajorRecommendation[] {
  const recommendations: MajorRecommendation[] = [];
  
  // Nếu có RIASEC scores, ưu tiên sử dụng
  if (aggregated.riasec) {
    const scores = aggregated.riasec;
    const sorted = Object.entries(scores)
      .map(([code, score]) => ({ code, score: score as number }))
      .sort((a, b) => b.score - a.score);

    const majorGroups = {
      R: {
        name: 'Kỹ thuật – Cơ khí – Điện tử',
        description: 'Nhóm ngành phù hợp với những người yêu thích làm việc với máy móc, kỹ thuật, thực hành và công nghệ ứng dụng.',
        majors: ['Cơ điện tử', 'Tự động hóa', 'Kỹ thuật ô tô', 'Kỹ thuật cơ khí', 'Kỹ thuật điện', 'Kỹ thuật điện tử'],
        jobs: ['Kỹ sư cơ khí', 'Kỹ thuật điện', 'Kỹ thuật viên vận hành', 'Kỹ sư tự động hóa'],
        exam_blocks: ['A00', 'A01', 'D07']
      },
      I: {
        name: 'Khoa học – Công nghệ – Nghiên cứu',
        description: 'Nhóm ngành dành cho những người yêu thích phân tích, nghiên cứu, tìm hiểu bản chất sự vật và có tư duy logic mạnh.',
        majors: ['Công nghệ sinh học', 'Khoa học máy tính', 'Toán ứng dụng', 'Vật lý học', 'Hóa học', 'Sinh học'],
        jobs: ['Nhà nghiên cứu', 'Khoa học dữ liệu', 'Kỹ sư AI', 'Lập trình viên'],
        exam_blocks: ['A00', 'A01', 'B00']
      },
      A: {
        name: 'Nghệ thuật – Thiết kế – Sáng tạo',
        description: 'Nhóm ngành phù hợp với những người có trí tưởng tượng phong phú, yêu cái đẹp và thích sáng tạo.',
        majors: ['Đồ họa', 'Truyền thông đa phương tiện', 'Thiết kế thời trang', 'Kiến trúc', 'Mỹ thuật'],
        jobs: ['Thiết kế đồ họa', 'Nhà thiết kế', 'Nghệ sĩ', 'Kiến trúc sư'],
        exam_blocks: ['V00', 'H00', 'N00']
      },
      S: {
        name: 'Giáo dục – Y tế – Công tác xã hội',
        description: 'Nhóm ngành dành cho những người thích giúp đỡ người khác, hướng dẫn, giao tiếp và hỗ trợ xã hội.',
        majors: ['Tâm lý học', 'Công tác xã hội', 'Sư phạm', 'Y học', 'Điều dưỡng'],
        jobs: ['Giáo viên', 'Điều dưỡng', 'Tư vấn viên', 'Bác sĩ'],
        exam_blocks: ['C00', 'C14', 'D01']
      },
      E: {
        name: 'Kinh doanh – Quản lý – Lãnh đạo',
        description: 'Nhóm ngành phù hợp với những người có tố chất lãnh đạo, thích thuyết phục, kinh doanh và tổ chức.',
        majors: ['Kinh tế', 'Marketing', 'Quản trị nhân lực', 'Quản trị kinh doanh', 'Tài chính'],
        jobs: ['Quản trị kinh doanh', 'Kinh doanh', 'Marketing', 'Quản lý'],
        exam_blocks: ['D01', 'A01']
      },
      C: {
        name: 'Kế toán – Hành chính – Văn phòng',
        description: 'Nhóm ngành dành cho những người làm tốt với dữ liệu, quy trình, tính chính xác và làm việc có tổ chức.',
        majors: ['Kế toán kiểm toán', 'Tài chính', 'Hệ thống thông tin quản lý', 'Quản trị văn phòng'],
        jobs: ['Kế toán', 'Hành chính văn phòng', 'Thống kê', 'Kiểm toán viên'],
        exam_blocks: ['A01', 'D01']
      }
    };

    // Tính tổng điểm để normalize
    const totalScore = Object.values(scores).reduce((sum, s) => sum + (s as number), 0);
    const topScore = sorted[0]?.score || 0;
    
    for (const { code, score } of sorted.slice(0, 3)) {
      const group = majorGroups[code as keyof typeof majorGroups];
      if (group) {
        // Tính confidence dựa trên tỷ lệ so với top score và tổng điểm
        let confidence = 0;
        if (totalScore > 0) {
          // Tỷ lệ điểm so với tổng điểm * 100, sau đó scale lên dựa trên top score
          const percentageOfTotal = (score / totalScore) * 100;
          const ratioToTop = topScore > 0 ? (score / topScore) : 0;
          confidence = percentageOfTotal * ratioToTop * 1.5; // Scale để có giá trị hợp lý
          confidence = Math.min(100, Math.max(10, confidence)); // Đảm bảo từ 10-100%
        } else {
          // Nếu không có điểm, chia đều
          confidence = 33;
        }
        
        recommendations.push({
          code,
          name: group.name,
          score,
          confidence: Math.round(confidence),
          description: group.description,
          majors: group.majors,
          jobs: group.jobs,
          exam_blocks: group.exam_blocks
        });
      }
    }
  }

  // Nếu có MBTI, điều chỉnh recommendations
  if (aggregated.mbti) {
    const mbti = aggregated.mbti;
    // Logic điều chỉnh dựa trên MBTI
    // Ví dụ: INTJ, INTP -> tăng điểm cho I (Investigative)
    if (mbti.startsWith('I') && mbti.includes('T')) {
      const iRec = recommendations.find(r => r.code === 'I');
      if (iRec) {
        iRec.confidence = Math.min(100, iRec.confidence + 10);
      }
    }
    // ENFP, ESFP -> tăng điểm cho A (Artistic) hoặc S (Social)
    if (mbti.startsWith('E') && (mbti.includes('F') || mbti.includes('P'))) {
      const aRec = recommendations.find(r => r.code === 'A');
      const sRec = recommendations.find(r => r.code === 'S');
      if (aRec) aRec.confidence = Math.min(100, aRec.confidence + 5);
      if (sRec) sRec.confidence = Math.min(100, sRec.confidence + 5);
    }
  }

  // Sắp xếp lại theo confidence
  recommendations.sort((a, b) => b.confidence - a.confidence);

  return recommendations;
}

// Đề xuất trường đại học dựa trên nhóm ngành và kết quả test
export function recommendUniversities(
  majorGroups: MajorRecommendation[],
  studyOption: 'domestic' | 'abroad' = 'domestic',
  preferredLocation?: string
): UniversityRecommendation[] {
  const recommendations: UniversityRecommendation[] = [];
  const topMajorCodes = majorGroups.slice(0, 2).map(m => m.code);

  // Mapping từ nhóm ngành sang các ngành học cụ thể
  const majorToFields: Record<string, string[]> = {
    R: ['Kỹ thuật cơ khí', 'Kỹ thuật điện', 'Kỹ thuật điện tử', 'Cơ điện tử', 'Tự động hóa', 'Kỹ thuật ô tô'],
    I: ['Công nghệ thông tin', 'Khoa học máy tính', 'Kỹ thuật phần mềm', 'Trí tuệ nhân tạo', 'Công nghệ sinh học', 'Toán ứng dụng'],
    A: ['Thiết kế đồ họa', 'Truyền thông đa phương tiện', 'Kiến trúc', 'Mỹ thuật', 'Thiết kế thời trang'],
    S: ['Sư phạm', 'Y học', 'Điều dưỡng', 'Tâm lý học', 'Công tác xã hội'],
    E: ['Quản trị kinh doanh', 'Marketing', 'Kinh tế', 'Tài chính', 'Quản trị nhân lực'],
    C: ['Kế toán', 'Tài chính', 'Hệ thống thông tin quản lý', 'Quản trị văn phòng']
  };

  const relevantFields: string[] = [];
  for (const code of topMajorCodes) {
    relevantFields.push(...(majorToFields[code] || []));
  }

  if (studyOption === 'domestic') {
    // Đề xuất trường trong nước
    for (const uni of universities) {
      let score = 0;
      const matchingMajors: string[] = [];

      // Kiểm tra xem trường có ngành phù hợp không
      for (const field of relevantFields) {
        for (const uniMajor of uni.majors || []) {
          if (uniMajor.toLowerCase().includes(field.toLowerCase()) || 
              field.toLowerCase().includes(uniMajor.toLowerCase())) {
            score += 10;
            if (!matchingMajors.includes(uniMajor)) {
              matchingMajors.push(uniMajor);
            }
          }
        }
      }

      // Ưu tiên trường công lập
      if (uni.type === 'public') {
        score += 5;
      }

      // Ưu tiên vị trí
      if (preferredLocation && uni.location.toLowerCase().includes(preferredLocation.toLowerCase())) {
        score += 10;
      }

      if (score > 0) {
        recommendations.push({
          id: uni.id,
          name: uni.name,
          code: uni.code,
          location: uni.location,
          type: uni.type,
          score,
          reason: matchingMajors.length > 0 
            ? `Có ${matchingMajors.length} ngành phù hợp với kết quả test của bạn`
            : 'Trường có uy tín trong lĩnh vực liên quan',
          matching_majors: matchingMajors.slice(0, 5)
        });
      }
    }
  } else {
    // Đề xuất quốc gia du học
    for (const country of studyAbroadCountries) {
      const descriptions: Record<string, string> = {
        'us': 'Nền giáo dục hàng đầu thế giới, nhiều trường đại học top',
        'uk': 'Hệ thống giáo dục lâu đời, bằng cấp được công nhận toàn cầu',
        'au': 'Chất lượng giáo dục cao, môi trường sống tốt',
        'ca': 'Giáo dục chất lượng, chi phí hợp lý',
        'sg': 'Trung tâm giáo dục châu Á, gần Việt Nam',
        'jp': 'Công nghệ tiên tiến, văn hóa độc đáo',
        'kr': 'Giáo dục hiện đại, chi phí phải chăng',
        'de': 'Giáo dục miễn phí, chất lượng cao',
        'fr': 'Văn hóa phong phú, giáo dục uy tín',
        'nl': 'Giáo dục quốc tế, môi trường đa văn hóa',
        'nz': 'Môi trường sống tốt, giáo dục chất lượng',
        'ch': 'Giáo dục xuất sắc, trung tâm tài chính',
        'se': 'Giáo dục miễn phí, xã hội phát triển',
        'tw': 'Gần Việt Nam, văn hóa tương đồng',
        'cn': 'Chi phí thấp, nhiều cơ hội học bổng'
      };
      
      recommendations.push({
        id: country.id,
        name: country.name,
        code: country.flag,
        location: country.name,
        type: 'abroad',
        score: country.popular ? 60 : 50, // Ưu tiên quốc gia phổ biến
        reason: descriptions[country.id] || 'Quốc gia có nền giáo dục phát triển',
        matching_majors: []
      });
    }
  }

  // Sắp xếp theo score
  recommendations.sort((a, b) => b.score - a.score);

  return recommendations.slice(0, 10); // Top 10
}

