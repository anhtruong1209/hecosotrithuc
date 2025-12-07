'use client';

import { useState } from 'react';
import { calculateInterest, InterestResult } from '@/lib/interest';
import TestInfoForm from '@/app/components/TestInfoForm';

interface Question {
  id: number;
  question: string;
  type: 'R' | 'I' | 'A' | 'S' | 'E' | 'C';
  options: {
    value: string;
    label: string;
    score: number;
  }[];
}

const questions: Question[] = [
  { id: 1, question: 'Bạn thích sửa chữa, lắp ráp hoặc vận hành máy móc?', type: 'R',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: 3 },
      { value: 'agree', label: 'Đồng ý', score: 2 },
      { value: 'neutral', label: 'Trung lập', score: 1 },
      { value: 'disagree', label: 'Không đồng ý', score: 0 },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: 0 }
    ]
  },
  { id: 2, question: 'Bạn thích nghiên cứu, tìm hiểu các vấn đề khoa học?', type: 'I',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: 3 },
      { value: 'agree', label: 'Đồng ý', score: 2 },
      { value: 'neutral', label: 'Trung lập', score: 1 },
      { value: 'disagree', label: 'Không đồng ý', score: 0 },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: 0 }
    ]
  },
  { id: 3, question: 'Bạn thích sáng tạo nghệ thuật, thiết kế?', type: 'A',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: 3 },
      { value: 'agree', label: 'Đồng ý', score: 2 },
      { value: 'neutral', label: 'Trung lập', score: 1 },
      { value: 'disagree', label: 'Không đồng ý', score: 0 },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: 0 }
    ]
  },
  { id: 4, question: 'Bạn thích giúp đỡ, chăm sóc người khác?', type: 'S',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: 3 },
      { value: 'agree', label: 'Đồng ý', score: 2 },
      { value: 'neutral', label: 'Trung lập', score: 1 },
      { value: 'disagree', label: 'Không đồng ý', score: 0 },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: 0 }
    ]
  },
  { id: 5, question: 'Bạn thích lãnh đạo, thuyết phục người khác?', type: 'E',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: 3 },
      { value: 'agree', label: 'Đồng ý', score: 2 },
      { value: 'neutral', label: 'Trung lập', score: 1 },
      { value: 'disagree', label: 'Không đồng ý', score: 0 },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: 0 }
    ]
  },
  { id: 6, question: 'Bạn thích làm việc với dữ liệu, số liệu có tổ chức?', type: 'C',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: 3 },
      { value: 'agree', label: 'Đồng ý', score: 2 },
      { value: 'neutral', label: 'Trung lập', score: 1 },
      { value: 'disagree', label: 'Không đồng ý', score: 0 },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: 0 }
    ]
  },
  // Thêm 24 câu hỏi nữa (tổng 30 câu)
  ...Array.from({ length: 24 }, (_, i) => {
    const qId = i + 7;
    const types: ('R' | 'I' | 'A' | 'S' | 'E' | 'C')[] = ['R', 'I', 'A', 'S', 'E', 'C'];
    const type = types[qId % 6];
    const questionList = [
      'Bạn thích làm việc ngoài trời với thiết bị?',
      'Bạn thích đọc sách khoa học, nghiên cứu?',
      'Bạn thích vẽ, viết, hoặc sáng tạo nghệ thuật?',
      'Bạn thích dạy học, hướng dẫn người khác?',
      'Bạn thích bán hàng, marketing?',
      'Bạn thích sắp xếp, tổ chức tài liệu?',
      'Bạn thích xây dựng, sửa chữa nhà cửa?',
      'Bạn thích thí nghiệm, phân tích dữ liệu?',
      'Bạn thích biểu diễn, trình diễn nghệ thuật?',
      'Bạn thích tư vấn, hỗ trợ tâm lý?',
      'Bạn thích quản lý, điều hành dự án?',
      'Bạn thích tính toán, kiểm tra số liệu?',
      'Bạn thích vận hành máy móc công nghiệp?',
      'Bạn thích giải quyết vấn đề phức tạp?',
      'Bạn thích thiết kế, tạo ra cái đẹp?',
      'Bạn thích chăm sóc sức khỏe người khác?',
      'Bạn thích đàm phán, thương lượng?',
      'Bạn thích quản lý hồ sơ, tài liệu?',
      'Bạn thích làm việc với công cụ, thiết bị?',
      'Bạn thích nghiên cứu khoa học tự nhiên?',
      'Bạn thích viết văn, sáng tác?',
      'Bạn thích làm việc với trẻ em?',
      'Bạn thích khởi nghiệp, kinh doanh?',
      'Bạn thích làm việc với máy tính, phần mềm?'
    ];
    return {
      id: qId,
      question: questionList[i],
      type,
      options: [
        { value: 'strongly_agree', label: 'Rất đồng ý', score: 3 },
        { value: 'agree', label: 'Đồng ý', score: 2 },
        { value: 'neutral', label: 'Trung lập', score: 1 },
        { value: 'disagree', label: 'Không đồng ý', score: 0 },
        { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: 0 }
      ]
    };
  })
];

export default function InterestPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<InterestResult | null>(null);
  const [userInfo, setUserInfo] = useState<{ fullname: string; phone: string; email?: string } | null>(null);
  const [testSaved, setTestSaved] = useState(false);

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer });
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      // Calculate result with question types and scores
      const questionTypes: Record<number, 'R' | 'I' | 'A' | 'S' | 'E' | 'C'> = {};
      const questionScores: Record<number, number> = {};
      questions.forEach(q => {
        questionTypes[q.id] = q.type;
        const answer = answers[q.id];
        if (answer) {
          const option = q.options.find(o => o.value === answer);
          if (option) {
            questionScores[q.id] = option.score;
          }
        }
      });
      const interestResult = calculateInterest(answers, questionTypes, questionScores);
      setResult(interestResult);
    }
  };

  const handleSaveTest = async (info: { fullname: string; phone: string; email?: string }) => {
    if (!result) return;
    
    try {
      const response = await fetch('/api/test-result', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullname: info.fullname,
          phone: info.phone,
          email: info.email,
          test_type: 'interest',
          test_name: 'Test Sở Thích Nghề Nghiệp',
          result: {
            topType: result.topType,
            scores: result.scores,
            description: result.description,
            careers: result.careers,
            majors: result.majors
          }
        }),
      });

      if (response.ok) {
        setUserInfo(info);
        setTestSaved(true);
      } else {
        alert('Có lỗi xảy ra khi lưu kết quả. Vui lòng thử lại.');
      }
    } catch (error) {
      console.error('Error saving test:', error);
      alert('Có lỗi xảy ra khi lưu kết quả. Vui lòng thử lại.');
    }
  };

  if (result) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-red-400/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto py-12 px-6">
          <div className="glass-card rounded-2xl p-6 md:p-8 text-center mb-6">
            <div className="text-5xl mb-4">❤️</div>
            <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">Kết Quả Test Sở Thích</h1>
            <div className="text-3xl md:text-4xl font-bold text-red-600 mb-4">Nhóm {result.topType}</div>
          </div>

          {!testSaved && !userInfo && (
            <TestInfoForm onSave={handleSaveTest} />
          )}

          {testSaved && (
            <div className="glass-card rounded-xl p-4 mb-6 border border-green-300/50 bg-green-50/30">
              <div className="text-center">
                <div className="text-3xl mb-2">✅</div>
                <p className="text-sm md:text-base text-green-700 font-semibold">
                  Kết quả đã được lưu thành công!
                </p>
              </div>
            </div>
          )}

          <div className="glass-card rounded-xl p-4 md:p-6 mb-6">
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">{result.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
            <div className="glass-card rounded-xl p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-blue-700 mb-3">Nghề nghiệp phù hợp</h3>
              <ul className="list-disc ml-5 text-xs md:text-sm text-gray-700 space-y-1">
                {result.careers.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-xl p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-blue-700 mb-3">Ngành học phù hợp</h3>
              <div className="flex flex-wrap gap-2">
                {result.majors.map((m, i) => (
                  <span key={i} className="px-3 py-1 glass border border-blue-200/50 rounded-lg text-xs md:text-sm text-gray-700">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3 justify-center">
            <button onClick={() => { setResult(null); setCurrentQuestion(0); setAnswers({}); }} className="glass-button text-white px-6 py-3 rounded-xl text-sm md:text-base font-medium">
              Làm lại
            </button>
            <a href="/tests" className="glass-button text-white px-6 py-3 rounded-xl text-sm md:text-base font-medium transition">
              Về danh sách test
            </a>
            <a href="/test" className="glass border border-blue-200/50 text-blue-700 px-6 py-3 rounded-xl text-sm md:text-base font-medium hover:bg-blue-50/50 transition">
              Điền thông tin và nhận tư vấn chi tiết →
            </a>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-red-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-pink-400/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto py-12 px-6">
        <div className="glass-card rounded-2xl p-6 md:p-8 mb-6 text-center">
          <div className="text-4xl md:text-5xl mb-4">❤️</div>
          <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">Test Sở Thích Nghề Nghiệp</h1>
          <p className="text-sm md:text-base text-gray-600">Tìm hiểu sở thích và đam mê của bạn</p>
          
          <div className="mt-6 max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-2 text-xs md:text-sm">
              <span className="font-semibold text-gray-600">Câu {currentQuestion + 1} / {questions.length}</span>
              <span className="font-semibold text-blue-600">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-red-500 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
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
                    ? 'border-red-500 bg-red-50/50'
                    : 'border-blue-200/50 hover:border-red-400 hover:bg-red-50/30'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                    answers[question.id] === option.value
                      ? 'border-red-500 bg-red-500'
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
