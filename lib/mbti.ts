// MBTI Test Scoring Logic
// 4 dimensions: E/I, S/N, T/F, J/P

export interface MBTIScores {
  E: number; // Extraversion
  I: number; // Introversion
  S: number; // Sensing
  N: number; // Intuition
  T: number; // Thinking
  F: number; // Feeling
  J: number; // Judging
  P: number; // Perceiving
}

export interface MBTIResult {
  type: string; // e.g., "INTJ", "ENFP"
  name: string;
  description: string;
  strengths: string[];
  careers: string[];
  majors: string[];
}

const mbtiTypes: Record<string, MBTIResult> = {
  'INTJ': {
    type: 'INTJ',
    name: 'Kiến trúc sư',
    description: 'Bạn là người có tư duy chiến lược, độc lập và quyết đoán. Bạn thích lập kế hoạch dài hạn và có khả năng phân tích vấn đề sâu sắc.',
    strengths: ['Tư duy logic', 'Độc lập', 'Quyết đoán', 'Sáng tạo', 'Kiên trì'],
    careers: ['Kiến trúc sư', 'Kỹ sư phần mềm', 'Nhà khoa học', 'Nhà nghiên cứu', 'Quản lý dự án'],
    majors: ['Khoa học máy tính', 'Kỹ thuật', 'Toán học', 'Vật lý', 'Kiến trúc']
  },
  'INTP': {
    type: 'INTP',
    name: 'Nhà tư duy',
    description: 'Bạn là người tò mò, sáng tạo và thích khám phá ý tưởng mới. Bạn có khả năng phân tích logic và giải quyết vấn đề phức tạp.',
    strengths: ['Tư duy logic', 'Sáng tạo', 'Tò mò', 'Độc lập', 'Phân tích'],
    careers: ['Nhà khoa học', 'Lập trình viên', 'Nhà nghiên cứu', 'Giáo sư', 'Nhà toán học'],
    majors: ['Khoa học máy tính', 'Toán học', 'Vật lý', 'Hóa học', 'Triết học']
  },
  'ENTJ': {
    type: 'ENTJ',
    name: 'Tư lệnh',
    description: 'Bạn là người lãnh đạo tự nhiên, quyết đoán và có tầm nhìn xa. Bạn thích tổ chức và dẫn dắt người khác.',
    strengths: ['Lãnh đạo', 'Quyết đoán', 'Tổ chức', 'Chiến lược', 'Tự tin'],
    careers: ['CEO', 'Quản lý', 'Luật sư', 'Doanh nhân', 'Tư vấn quản lý'],
    majors: ['Quản trị kinh doanh', 'Luật', 'Kinh tế', 'Kỹ thuật', 'Quản lý']
  },
  'ENTP': {
    type: 'ENTP',
    name: 'Nhà tranh luận',
    description: 'Bạn là người thông minh, sáng tạo và thích thử thách. Bạn có khả năng tư duy nhanh và thích tranh luận.',
    strengths: ['Sáng tạo', 'Thông minh', 'Năng động', 'Linh hoạt', 'Tranh luận'],
    careers: ['Doanh nhân', 'Luật sư', 'Nhà báo', 'Tư vấn', 'Nhà phát minh'],
    majors: ['Kinh doanh', 'Luật', 'Báo chí', 'Marketing', 'Kỹ thuật']
  },
  'INFJ': {
    type: 'INFJ',
    name: 'Người ủng hộ',
    description: 'Bạn là người có trực giác tốt, đồng cảm và có tầm nhìn. Bạn thích giúp đỡ người khác và có khả năng hiểu sâu sắc.',
    strengths: ['Đồng cảm', 'Trực giác', 'Sáng tạo', 'Kiên trì', 'Lý tưởng'],
    careers: ['Tâm lý học', 'Giáo viên', 'Nhà văn', 'Tư vấn', 'Nhân viên xã hội'],
    majors: ['Tâm lý học', 'Sư phạm', 'Văn học', 'Công tác xã hội', 'Triết học']
  },
  'INFP': {
    type: 'INFP',
    name: 'Người hòa giải',
    description: 'Bạn là người sáng tạo, lý tưởng và có giá trị cá nhân mạnh mẽ. Bạn thích tự do và có khả năng sáng tạo nghệ thuật.',
    strengths: ['Sáng tạo', 'Lý tưởng', 'Đồng cảm', 'Linh hoạt', 'Nghệ thuật'],
    careers: ['Nhà văn', 'Nghệ sĩ', 'Tâm lý học', 'Giáo viên', 'Nhà thiết kế'],
    majors: ['Văn học', 'Mỹ thuật', 'Tâm lý học', 'Sư phạm', 'Thiết kế']
  },
  'ENFJ': {
    type: 'ENFJ',
    name: 'Người chỉ huy',
    description: 'Bạn là người lãnh đạo tự nhiên, đồng cảm và có khả năng truyền cảm hứng. Bạn thích giúp đỡ người khác phát triển.',
    strengths: ['Lãnh đạo', 'Đồng cảm', 'Truyền cảm hứng', 'Tổ chức', 'Giao tiếp'],
    careers: ['Giáo viên', 'Tư vấn', 'Quản lý nhân sự', 'Nhà tâm lý', 'Huấn luyện viên'],
    majors: ['Sư phạm', 'Tâm lý học', 'Quản trị nhân lực', 'Truyền thông', 'Công tác xã hội']
  },
  'ENFP': {
    type: 'ENFP',
    name: 'Người vận động',
    description: 'Bạn là người nhiệt tình, sáng tạo và tự do. Bạn thích khám phá và có khả năng kết nối với người khác.',
    strengths: ['Nhiệt tình', 'Sáng tạo', 'Giao tiếp', 'Linh hoạt', 'Tự do'],
    careers: ['Marketing', 'Nhà báo', 'Nghệ sĩ', 'Tư vấn', 'Giáo viên'],
    majors: ['Marketing', 'Báo chí', 'Mỹ thuật', 'Truyền thông', 'Sư phạm']
  },
  'ISTJ': {
    type: 'ISTJ',
    name: 'Người kiểm toán',
    description: 'Bạn là người thực tế, có trách nhiệm và tỉ mỉ. Bạn thích làm việc có tổ chức và đáng tin cậy.',
    strengths: ['Tỉ mỉ', 'Có trách nhiệm', 'Thực tế', 'Đáng tin cậy', 'Kiên trì'],
    careers: ['Kế toán', 'Kỹ sư', 'Quản lý', 'Luật sư', 'Nhà phân tích'],
    majors: ['Kế toán', 'Kỹ thuật', 'Quản trị', 'Luật', 'Tài chính']
  },
  'ISFJ': {
    type: 'ISFJ',
    name: 'Người bảo vệ',
    description: 'Bạn là người chu đáo, có trách nhiệm và thích giúp đỡ người khác. Bạn có khả năng quan sát và chăm sóc.',
    strengths: ['Chu đáo', 'Có trách nhiệm', 'Đồng cảm', 'Kiên nhẫn', 'Tổ chức'],
    careers: ['Y tá', 'Giáo viên', 'Nhân viên xã hội', 'Quản lý', 'Tư vấn'],
    majors: ['Y dược', 'Sư phạm', 'Công tác xã hội', 'Quản trị', 'Tâm lý học']
  },
  'ESTJ': {
    type: 'ESTJ',
    name: 'Người điều hành',
    description: 'Bạn là người lãnh đạo tự nhiên, thực tế và có tổ chức. Bạn thích quản lý và đảm bảo mọi thứ hoạt động hiệu quả.',
    strengths: ['Lãnh đạo', 'Tổ chức', 'Thực tế', 'Quyết đoán', 'Có trách nhiệm'],
    careers: ['Quản lý', 'Doanh nhân', 'Luật sư', 'Quân đội', 'Kỹ sư'],
    majors: ['Quản trị kinh doanh', 'Luật', 'Kỹ thuật', 'Kinh tế', 'Quản lý']
  },
  'ESFJ': {
    type: 'ESFJ',
    name: 'Người cung cấp',
    description: 'Bạn là người thân thiện, có trách nhiệm và thích giúp đỡ người khác. Bạn có khả năng tổ chức và giao tiếp tốt.',
    strengths: ['Thân thiện', 'Có trách nhiệm', 'Tổ chức', 'Giao tiếp', 'Đồng cảm'],
    careers: ['Giáo viên', 'Y tá', 'Quản lý nhân sự', 'Tư vấn', 'Nhân viên xã hội'],
    majors: ['Sư phạm', 'Y dược', 'Quản trị nhân lực', 'Truyền thông', 'Công tác xã hội']
  },
  'ISTP': {
    type: 'ISTP',
    name: 'Thợ thủ công',
    description: 'Bạn là người thực tế, độc lập và thích làm việc với tay. Bạn có khả năng sửa chữa và vận hành thiết bị.',
    strengths: ['Thực tế', 'Độc lập', 'Kỹ thuật', 'Linh hoạt', 'Giải quyết vấn đề'],
    careers: ['Kỹ sư', 'Thợ cơ khí', 'Phi công', 'Vận động viên', 'Kỹ thuật viên'],
    majors: ['Kỹ thuật', 'Cơ khí', 'Điện tử', 'Công nghệ', 'Thể thao']
  },
  'ISFP': {
    type: 'ISFP',
    name: 'Nghệ sĩ',
    description: 'Bạn là người sáng tạo, linh hoạt và thích nghệ thuật. Bạn có khả năng thẩm mỹ và thích tự do.',
    strengths: ['Sáng tạo', 'Nghệ thuật', 'Linh hoạt', 'Đồng cảm', 'Tự do'],
    careers: ['Nghệ sĩ', 'Nhà thiết kế', 'Nhiếp ảnh gia', 'Y tá', 'Giáo viên mỹ thuật'],
    majors: ['Mỹ thuật', 'Thiết kế', 'Nhiếp ảnh', 'Y dược', 'Sư phạm']
  },
  'ESTP': {
    type: 'ESTP',
    name: 'Doanh nhân',
    description: 'Bạn là người năng động, thực tế và thích hành động. Bạn có khả năng xử lý tình huống nhanh và thích thử thách.',
    strengths: ['Năng động', 'Thực tế', 'Linh hoạt', 'Tự tin', 'Hành động'],
    careers: ['Doanh nhân', 'Vận động viên', 'Cảnh sát', 'Nhà báo', 'Quản lý'],
    majors: ['Kinh doanh', 'Thể thao', 'Báo chí', 'Quản trị', 'Marketing']
  },
  'ESFP': {
    type: 'ESFP',
    name: 'Người giải trí',
    description: 'Bạn là người vui vẻ, năng động và thích giao tiếp. Bạn có khả năng tạo không khí vui vẻ và thích giải trí.',
    strengths: ['Vui vẻ', 'Năng động', 'Giao tiếp', 'Linh hoạt', 'Sáng tạo'],
    careers: ['Nghệ sĩ', 'MC', 'Nhà thiết kế', 'Marketing', 'Du lịch'],
    majors: ['Nghệ thuật', 'Truyền thông', 'Thiết kế', 'Marketing', 'Du lịch']
  }
};

export function calculateMBTI(answers: Record<number, string>, questionScores?: Record<number, { [key: string]: number }>): MBTIResult {
  const scores: MBTIScores = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
  };

  // Map answers to scores
  Object.entries(answers).forEach(([questionId, answer]) => {
    const qId = parseInt(questionId);
    if (questionScores && questionScores[qId]) {
      // Use provided scores from question
      const scoreMap = questionScores[qId];
      Object.entries(scoreMap).forEach(([dim, value]) => {
        if (dim in scores) {
          scores[dim as keyof MBTIScores] += value;
        }
      });
    } else {
      // Fallback: simple pattern based on question ID
      const value = answer === 'strongly_agree' ? 2 : answer === 'agree' ? 1 : 0;
      if (qId % 4 === 0) scores.E += value;
      else if (qId % 4 === 1) scores.I += value;
      else if (qId % 4 === 2) scores.S += value;
      else scores.N += value;
    }
  });

  // Determine type
  const type = 
    (scores.E > scores.I ? 'E' : 'I') +
    (scores.S > scores.N ? 'S' : 'N') +
    (scores.T > scores.F ? 'T' : 'F') +
    (scores.J > scores.P ? 'J' : 'P');

  return mbtiTypes[type] || mbtiTypes['INTJ'];
}

