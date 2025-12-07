'use client';

import { useState } from 'react';
import { calculateMBTI, MBTIResult } from '@/lib/mbti';

interface Question {
  id: number;
  question: string;
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  options: {
    value: string;
    label: string;
    score: { [key: string]: number };
  }[];
}

const questions: Question[] = [
  { id: 1, question: 'Bạn cảm thấy năng lượng hơn khi ở trong nhóm đông người?', dimension: 'EI',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: { E: 3 } },
      { value: 'agree', label: 'Đồng ý', score: { E: 2 } },
      { value: 'neutral', label: 'Trung lập', score: {} },
      { value: 'disagree', label: 'Không đồng ý', score: { I: 2 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: { I: 3 } }
    ]
  },
  { id: 2, question: 'Bạn thích tập trung vào các chi tiết cụ thể hơn là ý tưởng tổng thể?', dimension: 'SN',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: { S: 3 } },
      { value: 'agree', label: 'Đồng ý', score: { S: 2 } },
      { value: 'neutral', label: 'Trung lập', score: {} },
      { value: 'disagree', label: 'Không đồng ý', score: { N: 2 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: { N: 3 } }
    ]
  },
  { id: 3, question: 'Bạn thường đưa ra quyết định dựa trên logic hơn là cảm xúc?', dimension: 'TF',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: { T: 3 } },
      { value: 'agree', label: 'Đồng ý', score: { T: 2 } },
      { value: 'neutral', label: 'Trung lập', score: {} },
      { value: 'disagree', label: 'Không đồng ý', score: { F: 2 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: { F: 3 } }
    ]
  },
  { id: 4, question: 'Bạn thích lập kế hoạch trước hơn là hành động tự phát?', dimension: 'JP',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: { J: 3 } },
      { value: 'agree', label: 'Đồng ý', score: { J: 2 } },
      { value: 'neutral', label: 'Trung lập', score: {} },
      { value: 'disagree', label: 'Không đồng ý', score: { P: 2 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: { P: 3 } }
    ]
  },
  // Thêm 24 câu hỏi nữa để đủ 28 câu
  ...Array.from({ length: 24 }, (_, i) => {
    const qId = i + 5;
    const dimensions: ('EI' | 'SN' | 'TF' | 'JP')[] = ['EI', 'SN', 'TF', 'JP'];
    const dimension = dimensions[qId % 4];
    const questions = [
      'Bạn thích làm việc độc lập hơn là nhóm?',
      'Bạn thích tưởng tượng về tương lai hơn là tập trung vào hiện tại?',
      'Bạn thường cân nhắc cảm xúc của người khác khi quyết định?',
      'Bạn thích giữ mọi thứ linh hoạt và mở cửa cho các khả năng?',
      'Bạn cảm thấy thoải mái hơn khi ở một mình?',
      'Bạn thích các hoạt động thực tế, cụ thể?',
      'Bạn đưa ra quyết định dựa trên các nguyên tắc khách quan?',
      'Bạn thích hoàn thành công việc trước deadline?',
      'Bạn thích giao tiếp với nhiều người?',
      'Bạn thích các ý tưởng mới và khả năng?',
      'Bạn quan tâm đến hòa hợp và cảm xúc của mọi người?',
      'Bạn thích khám phá và thử nghiệm?',
      'Bạn cần thời gian một mình để nạp lại năng lượng?',
      'Bạn tin tưởng vào kinh nghiệm đã được chứng minh?',
      'Bạn ưu tiên sự thật và công bằng?',
      'Bạn thích có cấu trúc và tổ chức?',
      'Bạn thích các hoạt động xã hội?',
      'Bạn thích các mô hình và lý thuyết?',
      'Bạn đánh giá cao các giá trị cá nhân?',
      'Bạn thích tự do và linh hoạt?',
      'Bạn thích suy nghĩ kỹ trước khi nói?',
      'Bạn thích các sự kiện thực tế?',
      'Bạn phân tích vấn đề một cách khách quan?',
      'Bạn thích đưa ra quyết định nhanh chóng?'
    ];
    const dimMap: Record<string, { [key: string]: string }> = {
      'EI': { pos: 'E', neg: 'I' },
      'SN': { pos: 'S', neg: 'N' },
      'TF': { pos: 'T', neg: 'F' },
      'JP': { pos: 'J', neg: 'P' }
    };
    const { pos, neg } = dimMap[dimension];
    return {
      id: qId,
      question: questions[i],
      dimension,
      options: [
        { value: 'strongly_agree', label: 'Rất đồng ý', score: { [pos]: 3 } },
        { value: 'agree', label: 'Đồng ý', score: { [pos]: 2 } },
        { value: 'neutral', label: 'Trung lập', score: {} },
        { value: 'disagree', label: 'Không đồng ý', score: { [neg]: 2 } },
        { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: { [neg]: 3 } }
      ]
    };
  })
];

export default function MBTIPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<MBTIResult | null>(null);

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer });
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      // Calculate result with question scores
      const questionScores: Record<number, { [key: string]: number }> = {};
      questions.forEach(q => {
        const answer = answers[q.id];
        if (answer) {
          const option = q.options.find(o => o.value === answer);
          if (option) {
            questionScores[q.id] = option.score;
          }
        }
      });
      const mbtiResult = calculateMBTI(answers, questionScores);
      setResult(mbtiResult);
    }
  };

  if (result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto py-12 px-6">
          <div className="glass-card rounded-2xl p-6 md:p-8 text-center mb-6">
            <div className="text-5xl mb-4">🧠</div>
            <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">Kết Quả Test MBTI</h1>
            <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-4">{result.type}</div>
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700">{result.name}</h2>
          </div>

          <div className="glass-card rounded-xl p-4 md:p-6 mb-6">
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">{result.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
            <div className="glass-card rounded-xl p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-blue-700 mb-3">Điểm mạnh</h3>
              <div className="flex flex-wrap gap-2">
                {result.strengths.map((s, i) => (
                  <span key={i} className="px-3 py-1 glass border border-blue-200/50 rounded-full text-xs md:text-sm text-gray-700">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-xl p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-blue-700 mb-3">Nghề nghiệp phù hợp</h3>
              <ul className="list-disc ml-5 text-xs md:text-sm text-gray-700 space-y-1">
                {result.careers.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="glass-card rounded-xl p-4 md:p-6 mb-6">
            <h3 className="text-base md:text-lg font-semibold text-blue-700 mb-3">Ngành học phù hợp</h3>
            <div className="flex flex-wrap gap-2">
              {result.majors.map((m, i) => (
                <span key={i} className="px-3 py-1 glass border border-blue-200/50 rounded-lg text-xs md:text-sm text-gray-700">
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-3 justify-center">
            <button onClick={() => { setResult(null); setCurrentQuestion(0); setAnswers({}); }} className="glass-button text-white px-6 py-3 rounded-xl text-sm md:text-base font-medium">
              Làm lại
            </button>
            <a href="/tests" className="glass border border-blue-200/50 text-blue-700 px-6 py-3 rounded-xl text-sm md:text-base font-medium hover:bg-blue-50/50 transition">
              Về danh sách test
            </a>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto py-12 px-6">
        <div className="glass-card rounded-2xl p-6 md:p-8 mb-6 text-center">
          <div className="text-4xl md:text-5xl mb-4">🧠</div>
          <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">Test Tính Cách MBTI</h1>
          <p className="text-sm md:text-base text-gray-600">Khám phá tính cách của bạn qua 16 loại tính cách MBTI</p>
          
          <div className="mt-6 max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-2 text-xs md:text-sm">
              <span className="font-semibold text-gray-600">Câu {currentQuestion + 1} / {questions.length}</span>
              <span className="font-semibold text-blue-600">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6 md:p-8 mb-6">
          <h2 className="text-lg md:text-xl font-bold text-blue-700 mb-4">Câu {question.id}</h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 leading-relaxed">{question.question}</p>

          <div className="space-y-3">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(question.id, option.value)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  answers[question.id] === option.value
                    ? 'border-blue-600 bg-blue-50/50'
                    : 'border-blue-200/50 hover:border-blue-400 hover:bg-blue-50/30'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                    answers[question.id] === option.value
                      ? 'border-blue-600 bg-blue-600'
                      : 'border-gray-300'
                  }`}>
                    {answers[question.id] === option.value && (
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    )}
                  </div>
                  <span className="text-sm md:text-base text-gray-700 font-medium">{option.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className={`px-4 py-2 rounded-lg font-medium transition text-sm md:text-base ${
              currentQuestion === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'glass border border-blue-200/50 text-gray-700 hover:bg-blue-50/50'
            }`}
          >
            ← Câu trước
          </button>
          <a href="/tests" className="glass border border-blue-200/50 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-blue-50/50 transition text-sm md:text-base">
            Về danh sách
          </a>
        </div>
      </div>
    </div>
  );
}
