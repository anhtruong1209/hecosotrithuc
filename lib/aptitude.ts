// Aptitude Test Scoring - Learning Ability Assessment
// Assesses strength in different subjects

export interface AptitudeScores {
  math: number;
  physics: number;
  chemistry: number;
  biology: number;
  literature: number;
  english: number;
  history: number;
  geography: number;
  computer: number;
  art: number;
}

export interface AptitudeResult {
  topSubjects: string[];
  scores: AptitudeScores;
  description: string;
  recommendedMajors: string[];
  examBlocks: string[];
}

const subjectLabels: Record<keyof AptitudeScores, string> = {
  math: 'Toán học',
  physics: 'Vật lý',
  chemistry: 'Hóa học',
  biology: 'Sinh học',
  literature: 'Ngữ văn',
  english: 'Tiếng Anh',
  history: 'Lịch sử',
  geography: 'Địa lý',
  computer: 'Tin học',
  art: 'Mỹ thuật'
};

const majorRecommendations: Record<string, { majors: string[]; blocks: string[] }> = {
  'math': {
    majors: ['Toán học', 'Toán ứng dụng', 'Khoa học máy tính', 'Kỹ thuật', 'Kinh tế'],
    blocks: ['A00', 'A01', 'D01']
  },
  'physics': {
    majors: ['Vật lý', 'Kỹ thuật điện', 'Kỹ thuật cơ khí', 'Kỹ thuật xây dựng', 'Công nghệ thông tin'],
    blocks: ['A00', 'A01', 'A02']
  },
  'chemistry': {
    majors: ['Hóa học', 'Công nghệ hóa học', 'Dược học', 'Y học', 'Kỹ thuật hóa học'],
    blocks: ['A00', 'B00', 'D07']
  },
  'biology': {
    majors: ['Sinh học', 'Y học', 'Dược học', 'Công nghệ sinh học', 'Thú y'],
    blocks: ['B00', 'B03', 'D08']
  },
  'literature': {
    majors: ['Ngữ văn', 'Báo chí', 'Văn học', 'Sư phạm Văn', 'Truyền thông'],
    blocks: ['C00', 'D01', 'D14']
  },
  'english': {
    majors: ['Ngôn ngữ Anh', 'Quan hệ quốc tế', 'Kinh tế đối ngoại', 'Du lịch', 'Truyền thông'],
    blocks: ['D01', 'D14', 'D15']
  },
  'history': {
    majors: ['Lịch sử', 'Sư phạm Lịch sử', 'Báo chí', 'Quan hệ quốc tế', 'Luật'],
    blocks: ['C00', 'C19', 'D14']
  },
  'geography': {
    majors: ['Địa lý', 'Quy hoạch đô thị', 'Du lịch', 'Môi trường', 'Kinh tế'],
    blocks: ['C00', 'C04', 'D01']
  },
  'computer': {
    majors: ['Công nghệ thông tin', 'Khoa học máy tính', 'Kỹ thuật phần mềm', 'An toàn thông tin', 'Hệ thống thông tin'],
    blocks: ['A00', 'A01', 'D01']
  },
  'art': {
    majors: ['Mỹ thuật', 'Thiết kế đồ họa', 'Thiết kế thời trang', 'Kiến trúc', 'Nhiếp ảnh'],
    blocks: ['H00', 'H01', 'V00']
  }
};

export function calculateAptitude(answers: Record<number, string>, questionSubjects?: Record<number, keyof AptitudeScores>, questionScores?: Record<number, number>): AptitudeResult {
  const scores: AptitudeScores = {
    math: 0, physics: 0, chemistry: 0, biology: 0,
    literature: 0, english: 0, history: 0, geography: 0,
    computer: 0, art: 0
  };

  // Map answers to subject scores
  Object.entries(answers).forEach(([questionId, answer]) => {
    const qId = parseInt(questionId);
    
    if (questionSubjects && questionSubjects[qId] && questionScores && questionScores[qId] !== undefined) {
      // Use provided subject and score
      scores[questionSubjects[qId]] += questionScores[qId];
    } else if (questionSubjects && questionSubjects[qId]) {
      // Use provided subject with calculated score
      const value = answer === 'strongly_agree' ? 3 : answer === 'agree' ? 2 : answer === 'neutral' ? 1 : 0;
      scores[questionSubjects[qId]] += value;
    } else {
      // Fallback: each question maps to a subject (simplified pattern)
      const value = answer === 'strongly_agree' ? 3 : answer === 'agree' ? 2 : answer === 'neutral' ? 1 : 0;
      const subjects = Object.keys(scores) as (keyof AptitudeScores)[];
      const subjectIndex = qId % subjects.length;
      scores[subjects[subjectIndex]] += value;
    }
  });

  // Find top 3 subjects
  const sorted = Object.entries(scores)
    .map(([subject, score]) => ({ subject: subject as keyof AptitudeScores, score }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  const topSubjects = sorted.map(s => subjectLabels[s.subject]);
  const topSubject = sorted[0].subject;
  const recommendations = majorRecommendations[topSubject] || majorRecommendations['math'];

  return {
    topSubjects,
    scores,
    description: `Bạn có năng lực tốt nhất ở các môn: ${topSubjects.join(', ')}. Dựa trên điểm mạnh này, bạn nên cân nhắc các ngành học liên quan.`,
    recommendedMajors: recommendations.majors,
    examBlocks: recommendations.blocks
  };
}

