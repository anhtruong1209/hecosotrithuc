// Career Interest Test Scoring (Based on Holland Codes)
// 6 interest types: R, I, A, S, E, C

export interface InterestScores {
  R: number; // Realistic
  I: number; // Investigative
  A: number; // Artistic
  S: number; // Social
  E: number; // Enterprising
  C: number; // Conventional
}

export interface InterestResult {
  topType: string;
  scores: InterestScores;
  description: string;
  careers: string[];
  majors: string[];
}

const interestDescriptions: Record<string, { description: string; careers: string[]; majors: string[] }> = {
  'R': {
    description: 'Bạn thích làm việc với máy móc, công cụ và các hoạt động thực tế. Bạn có kỹ năng thao tác tốt và thích sửa chữa, vận hành thiết bị.',
    careers: ['Kỹ sư cơ khí', 'Thợ điện', 'Kỹ sư xây dựng', 'Thợ sửa chữa', 'Kỹ sư tự động hóa'],
    majors: ['Kỹ thuật cơ khí', 'Kỹ thuật điện', 'Kỹ thuật xây dựng', 'Cơ điện tử', 'Tự động hóa']
  },
  'I': {
    description: 'Bạn thích nghiên cứu, phân tích và tìm hiểu kiến thức mới. Bạn có tư duy logic và thích khám phá.',
    careers: ['Nhà khoa học', 'Nghiên cứu viên', 'Bác sĩ', 'Kỹ sư phần mềm', 'Nhà toán học'],
    majors: ['Khoa học máy tính', 'Toán học', 'Vật lý', 'Hóa học', 'Sinh học']
  },
  'A': {
    description: 'Bạn thích sáng tạo, nghệ thuật và tự do thể hiện bản thân. Bạn có khả năng thẩm mỹ và trí tưởng tượng phong phú.',
    careers: ['Nghệ sĩ', 'Nhà thiết kế', 'Nhà văn', 'Nhiếp ảnh gia', 'Nhạc sĩ'],
    majors: ['Mỹ thuật', 'Thiết kế đồ họa', 'Văn học', 'Nhiếp ảnh', 'Âm nhạc']
  },
  'S': {
    description: 'Bạn thích giúp đỡ, chăm sóc và hướng dẫn người khác. Bạn có khả năng giao tiếp và đồng cảm tốt.',
    careers: ['Giáo viên', 'Y tá', 'Tâm lý học', 'Nhân viên xã hội', 'Tư vấn'],
    majors: ['Sư phạm', 'Y dược', 'Tâm lý học', 'Công tác xã hội', 'Giáo dục']
  },
  'E': {
    description: 'Bạn thích lãnh đạo, thuyết phục và kinh doanh. Bạn có khả năng đàm phán và tổ chức tốt.',
    careers: ['Doanh nhân', 'Quản lý', 'Marketing', 'Luật sư', 'Tư vấn kinh doanh'],
    majors: ['Quản trị kinh doanh', 'Marketing', 'Kinh tế', 'Luật', 'Quản lý']
  },
  'C': {
    description: 'Bạn thích làm việc với dữ liệu, quy trình và tính chính xác. Bạn có khả năng tổ chức và quản lý tài liệu tốt.',
    careers: ['Kế toán', 'Thư ký', 'Quản lý hành chính', 'Kiểm toán viên', 'Nhân viên văn phòng'],
    majors: ['Kế toán', 'Quản trị văn phòng', 'Tài chính', 'Hành chính', 'Thống kê']
  }
};

export function calculateInterest(answers: Record<number, string>, questionTypes?: Record<number, 'R' | 'I' | 'A' | 'S' | 'E' | 'C'>, questionScores?: Record<number, number>): InterestResult {
  const scores: InterestScores = {
    R: 0, I: 0, A: 0, S: 0, E: 0, C: 0
  };

  // Map answers to scores based on question type
  Object.entries(answers).forEach(([questionId, answer]) => {
    const qId = parseInt(questionId);
    
    if (questionTypes && questionTypes[qId] && questionScores && questionScores[qId] !== undefined) {
      // Use provided question type and score
      scores[questionTypes[qId]] += questionScores[qId];
    } else if (questionTypes && questionTypes[qId]) {
      // Use provided question type with calculated score
      const value = answer === 'strongly_agree' ? 3 : answer === 'agree' ? 2 : answer === 'neutral' ? 1 : 0;
      scores[questionTypes[qId]] += value;
    } else {
      // Fallback: distribute scores across 6 types based on question pattern
      const value = answer === 'strongly_agree' ? 3 : answer === 'agree' ? 2 : answer === 'neutral' ? 1 : 0;
      const typeIndex = qId % 6;
      const types = ['R', 'I', 'A', 'S', 'E', 'C'] as const;
      scores[types[typeIndex]] += value;
    }
  });

  // Find top type
  const sorted = Object.entries(scores).sort((a, b) => b[1] - a[1]);
  const topType = sorted[0][0];

  const info = interestDescriptions[topType];
  return {
    topType,
    scores,
    description: info.description,
    careers: info.careers,
    majors: info.majors
  };
}

