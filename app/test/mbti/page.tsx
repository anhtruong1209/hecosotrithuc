'use client';

import { useState } from 'react';
import { calculateMBTI, MBTIResult } from '@/lib/mbti';
import TestInfoForm from '@/app/components/TestInfoForm';

interface Question {
  id: number;
  question: string;
  dimension: 'EI' | 'SN' | 'TF' | 'JP';
  questionType: 'scale' | 'yesno' | 'choice';
  options: {
    value: string;
    label: string;
    score: { [key: string]: number };
  }[];
}

const questions: Question[] = [
  // Câu hỏi scale (5 mức độ)
  { id: 1, question: 'Bạn cảm thấy năng lượng hơn khi ở trong nhóm đông người?', dimension: 'EI', questionType: 'scale',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: { E: 3 } },
      { value: 'agree', label: 'Đồng ý', score: { E: 2 } },
      { value: 'neutral', label: 'Trung lập', score: {} },
      { value: 'disagree', label: 'Không đồng ý', score: { I: 2 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: { I: 3 } }
    ]
  },
  // Câu hỏi Yes/No
  { id: 2, question: 'Bạn thích làm việc độc lập hơn là làm việc nhóm?', dimension: 'EI', questionType: 'yesno',
    options: [
      { value: 'yes', label: 'Có', score: { I: 3 } },
      { value: 'no', label: 'Không', score: { E: 3 } }
    ]
  },
  // Câu hỏi lựa chọn
  { id: 3, question: 'Bạn thích tập trung vào điều gì hơn?', dimension: 'SN', questionType: 'choice',
    options: [
      { value: 'details', label: 'Chi tiết cụ thể', score: { S: 3 } },
      { value: 'big_picture', label: 'Bức tranh tổng thể', score: { N: 3 } },
      { value: 'both', label: 'Cả hai', score: {} }
    ]
  },
  { id: 4, question: 'Bạn thường đưa ra quyết định dựa trên logic hơn là cảm xúc?', dimension: 'TF', questionType: 'scale',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: { T: 3 } },
      { value: 'agree', label: 'Đồng ý', score: { T: 2 } },
      { value: 'neutral', label: 'Trung lập', score: {} },
      { value: 'disagree', label: 'Không đồng ý', score: { F: 2 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: { F: 3 } }
    ]
  },
  { id: 5, question: 'Bạn thích lập kế hoạch trước hơn là hành động tự phát?', dimension: 'JP', questionType: 'yesno',
    options: [
      { value: 'yes', label: 'Có', score: { J: 3 } },
      { value: 'no', label: 'Không', score: { P: 3 } }
    ]
  },
  { id: 6, question: 'Bạn cảm thấy thoải mái hơn khi ở một mình?', dimension: 'EI', questionType: 'yesno',
    options: [
      { value: 'yes', label: 'Có', score: { I: 3 } },
      { value: 'no', label: 'Không', score: { E: 3 } }
    ]
  },
  { id: 7, question: 'Bạn thích các hoạt động thực tế, cụ thể hơn là các ý tưởng trừu tượng?', dimension: 'SN', questionType: 'scale',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: { S: 3 } },
      { value: 'agree', label: 'Đồng ý', score: { S: 2 } },
      { value: 'neutral', label: 'Trung lập', score: {} },
      { value: 'disagree', label: 'Không đồng ý', score: { N: 2 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: { N: 3 } }
    ]
  },
  { id: 8, question: 'Bạn đưa ra quyết định dựa trên điều gì?', dimension: 'TF', questionType: 'choice',
    options: [
      { value: 'logic', label: 'Logic và phân tích', score: { T: 3 } },
      { value: 'feelings', label: 'Cảm xúc và giá trị', score: { F: 3 } },
      { value: 'both', label: 'Cả hai', score: {} }
    ]
  },
  { id: 9, question: 'Bạn thích hoàn thành công việc trước deadline?', dimension: 'JP', questionType: 'yesno',
    options: [
      { value: 'yes', label: 'Có', score: { J: 3 } },
      { value: 'no', label: 'Không', score: { P: 3 } }
    ]
  },
  { id: 10, question: 'Bạn thích giao tiếp với nhiều người?', dimension: 'EI', questionType: 'scale',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: { E: 3 } },
      { value: 'agree', label: 'Đồng ý', score: { E: 2 } },
      { value: 'neutral', label: 'Trung lập', score: {} },
      { value: 'disagree', label: 'Không đồng ý', score: { I: 2 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: { I: 3 } }
    ]
  },
  { id: 11, question: 'Bạn thích các ý tưởng mới và khả năng hơn là kinh nghiệm đã được chứng minh?', dimension: 'SN', questionType: 'yesno',
    options: [
      { value: 'yes', label: 'Có', score: { N: 3 } },
      { value: 'no', label: 'Không', score: { S: 3 } }
    ]
  },
  { id: 12, question: 'Bạn quan tâm đến hòa hợp và cảm xúc của mọi người khi đưa ra quyết định?', dimension: 'TF', questionType: 'scale',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: { F: 3 } },
      { value: 'agree', label: 'Đồng ý', score: { F: 2 } },
      { value: 'neutral', label: 'Trung lập', score: {} },
      { value: 'disagree', label: 'Không đồng ý', score: { T: 2 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: { T: 3 } }
    ]
  },
  { id: 13, question: 'Bạn thích khám phá và thử nghiệm hơn là tuân theo kế hoạch?', dimension: 'JP', questionType: 'choice',
    options: [
      { value: 'explore', label: 'Khám phá và thử nghiệm', score: { P: 3 } },
      { value: 'plan', label: 'Tuân theo kế hoạch', score: { J: 3 } },
      { value: 'both', label: 'Cả hai', score: {} }
    ]
  },
  { id: 14, question: 'Bạn cần thời gian một mình để nạp lại năng lượng?', dimension: 'EI', questionType: 'yesno',
    options: [
      { value: 'yes', label: 'Có', score: { I: 3 } },
      { value: 'no', label: 'Không', score: { E: 3 } }
    ]
  },
  { id: 15, question: 'Bạn tin tưởng vào kinh nghiệm đã được chứng minh hơn là các khả năng mới?', dimension: 'SN', questionType: 'yesno',
    options: [
      { value: 'yes', label: 'Có', score: { S: 3 } },
      { value: 'no', label: 'Không', score: { N: 3 } }
    ]
  },
  { id: 16, question: 'Bạn ưu tiên sự thật và công bằng hơn là cảm xúc?', dimension: 'TF', questionType: 'yesno',
    options: [
      { value: 'yes', label: 'Có', score: { T: 3 } },
      { value: 'no', label: 'Không', score: { F: 3 } }
    ]
  },
  { id: 17, question: 'Bạn thích có cấu trúc và tổ chức trong cuộc sống?', dimension: 'JP', questionType: 'scale',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: { J: 3 } },
      { value: 'agree', label: 'Đồng ý', score: { J: 2 } },
      { value: 'neutral', label: 'Trung lập', score: {} },
      { value: 'disagree', label: 'Không đồng ý', score: { P: 2 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: { P: 3 } }
    ]
  },
  { id: 18, question: 'Bạn thích các hoạt động xã hội?', dimension: 'EI', questionType: 'yesno',
    options: [
      { value: 'yes', label: 'Có', score: { E: 3 } },
      { value: 'no', label: 'Không', score: { I: 3 } }
    ]
  },
  { id: 19, question: 'Bạn thích các mô hình và lý thuyết hơn là thực tế?', dimension: 'SN', questionType: 'choice',
    options: [
      { value: 'theory', label: 'Mô hình và lý thuyết', score: { N: 3 } },
      { value: 'practice', label: 'Thực tế', score: { S: 3 } },
      { value: 'both', label: 'Cả hai', score: {} }
    ]
  },
  { id: 20, question: 'Bạn đánh giá cao các giá trị cá nhân khi đưa ra quyết định?', dimension: 'TF', questionType: 'yesno',
    options: [
      { value: 'yes', label: 'Có', score: { F: 3 } },
      { value: 'no', label: 'Không', score: { T: 3 } }
    ]
  },
  { id: 21, question: 'Bạn thích tự do và linh hoạt hơn là có kế hoạch cụ thể?', dimension: 'JP', questionType: 'yesno',
    options: [
      { value: 'yes', label: 'Có', score: { P: 3 } },
      { value: 'no', label: 'Không', score: { J: 3 } }
    ]
  },
  { id: 22, question: 'Bạn thích suy nghĩ kỹ trước khi nói?', dimension: 'EI', questionType: 'scale',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: { I: 3 } },
      { value: 'agree', label: 'Đồng ý', score: { I: 2 } },
      { value: 'neutral', label: 'Trung lập', score: {} },
      { value: 'disagree', label: 'Không đồng ý', score: { E: 2 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: { E: 3 } }
    ]
  },
  { id: 23, question: 'Bạn thích các sự kiện thực tế hơn là các khả năng tương lai?', dimension: 'SN', questionType: 'yesno',
    options: [
      { value: 'yes', label: 'Có', score: { S: 3 } },
      { value: 'no', label: 'Không', score: { N: 3 } }
    ]
  },
  { id: 24, question: 'Bạn phân tích vấn đề một cách khách quan?', dimension: 'TF', questionType: 'yesno',
    options: [
      { value: 'yes', label: 'Có', score: { T: 3 } },
      { value: 'no', label: 'Không', score: { F: 3 } }
    ]
  },
  { id: 25, question: 'Bạn thích đưa ra quyết định nhanh chóng?', dimension: 'JP', questionType: 'choice',
    options: [
      { value: 'quick', label: 'Nhanh chóng', score: { J: 3 } },
      { value: 'slow', label: 'Từ từ, cân nhắc', score: { P: 3 } },
      { value: 'depends', label: 'Tùy tình huống', score: {} }
    ]
  },
  { id: 26, question: 'Bạn thích tưởng tượng về tương lai hơn là tập trung vào hiện tại?', dimension: 'SN', questionType: 'scale',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: { N: 3 } },
      { value: 'agree', label: 'Đồng ý', score: { N: 2 } },
      { value: 'neutral', label: 'Trung lập', score: {} },
      { value: 'disagree', label: 'Không đồng ý', score: { S: 2 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: { S: 3 } }
    ]
  },
  { id: 27, question: 'Bạn thường cân nhắc cảm xúc của người khác khi quyết định?', dimension: 'TF', questionType: 'yesno',
    options: [
      { value: 'yes', label: 'Có', score: { F: 3 } },
      { value: 'no', label: 'Không', score: { T: 3 } }
    ]
  },
  { id: 28, question: 'Bạn thích giữ mọi thứ linh hoạt và mở cửa cho các khả năng?', dimension: 'JP', questionType: 'scale',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: { P: 3 } },
      { value: 'agree', label: 'Đồng ý', score: { P: 2 } },
      { value: 'neutral', label: 'Trung lập', score: {} },
      { value: 'disagree', label: 'Không đồng ý', score: { J: 2 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: { J: 3 } }
    ]
  }
];

export default function MBTIPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<MBTIResult | null>(null);
  const [userInfo, setUserInfo] = useState<{ fullname: string; phone: string; email?: string } | null>(null);
  const [testSaved, setTestSaved] = useState(false);

  const handleAnswer = (questionId: number, answer: string) => {
    const newAnswers = { ...answers, [questionId]: answer };
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      // Calculate result with question scores
      const questionScores: Record<number, { [key: string]: number }> = {};
      questions.forEach(q => {
        const answer = newAnswers[q.id];
        if (answer) {
          const option = q.options.find(o => o.value === answer);
          if (option) {
            questionScores[q.id] = option.score;
          }
        }
      });
      const mbtiResult = calculateMBTI(newAnswers, questionScores);
      setResult(mbtiResult);
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
          test_type: 'mbti',
          test_name: 'Test Tính Cách MBTI',
          result: {
            type: result.type,
            name: result.name,
            description: result.description,
            strengths: result.strengths,
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

          <div className={`space-y-3 ${
            question.questionType === 'yesno' ? 'grid grid-cols-2 gap-3' : 
            question.questionType === 'choice' ? 'grid grid-cols-1 md:grid-cols-3 gap-3' : 
            'space-y-3'
          }`}>
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(question.id, option.value)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  answers[question.id] === option.value
                    ? 'border-blue-600 bg-blue-50/50'
                    : 'border-blue-200/50 hover:border-blue-400 hover:bg-blue-50/30'
                } ${question.questionType === 'yesno' ? 'text-center' : ''}`}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center flex-shrink-0 ${
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
