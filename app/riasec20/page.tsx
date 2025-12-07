'use client';

import { useState } from 'react';

interface Question {
  id: number;
  question: string;
  options: {
    value: string;
    label: string;
    scores: { R?: number; I?: number; A?: number; S?: number; E?: number; C?: number };
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: 'Bạn thích làm việc với máy móc, công cụ hơn là làm việc với con người?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { R: 3, I: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { R: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { S: 1, E: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { S: 2, E: 2 } }
    ]
  },
  {
    id: 2,
    question: 'Bạn thích nghiên cứu, tìm hiểu các vấn đề khoa học?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { I: 3, A: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { I: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { E: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { E: 2 } }
    ]
  },
  {
    id: 3,
    question: 'Bạn có khả năng sáng tạo và thích các hoạt động nghệ thuật?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { A: 3, I: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { A: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { C: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { C: 2 } }
    ]
  },
  {
    id: 4,
    question: 'Bạn thích giúp đỡ, chăm sóc và hướng dẫn người khác?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { S: 3, A: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { S: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { I: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { I: 2 } }
    ]
  },
  {
    id: 5,
    question: 'Bạn có khả năng thuyết phục và lãnh đạo người khác?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { E: 3, S: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { E: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { C: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { C: 2 } }
    ]
  },
  {
    id: 6,
    question: 'Bạn thích làm việc với dữ liệu, số liệu và quy trình có tổ chức?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { C: 3, I: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { C: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { A: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { A: 2 } }
    ]
  },
  {
    id: 7,
    question: 'Bạn thích sửa chữa, lắp ráp hoặc vận hành thiết bị?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { R: 3, C: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { R: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { S: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { S: 2 } }
    ]
  },
  {
    id: 8,
    question: 'Bạn thích đọc sách, nghiên cứu và học hỏi kiến thức mới?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { I: 3 } },
      { value: 'agree', label: 'Đồng ý', scores: { I: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { E: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { E: 2 } }
    ]
  },
  {
    id: 9,
    question: 'Bạn thích vẽ, thiết kế hoặc tạo ra các sản phẩm nghệ thuật?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { A: 3, I: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { A: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { R: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { R: 2 } }
    ]
  },
  {
    id: 10,
    question: 'Bạn thích làm việc trong môi trường giáo dục, y tế hoặc dịch vụ xã hội?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { S: 3, A: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { S: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { E: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { E: 2 } }
    ]
  },
  {
    id: 11,
    question: 'Bạn thích kinh doanh, bán hàng hoặc quản lý?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { E: 3, S: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { E: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { I: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { I: 2 } }
    ]
  },
  {
    id: 12,
    question: 'Bạn thích làm việc với các con số, bảng tính và tài liệu?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { C: 3, I: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { C: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { A: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { A: 2 } }
    ]
  },
  {
    id: 13,
    question: 'Bạn thích làm việc ngoài trời, với thiên nhiên hoặc động vật?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { R: 3, I: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { R: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { C: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { C: 2 } }
    ]
  },
  {
    id: 14,
    question: 'Bạn thích giải quyết các vấn đề phức tạp bằng tư duy logic?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { I: 3, C: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { I: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { S: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { S: 2 } }
    ]
  },
  {
    id: 15,
    question: 'Bạn thích biểu diễn, trình bày hoặc thể hiện bản thân qua nghệ thuật?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { A: 3, E: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { A: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { C: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { C: 2 } }
    ]
  },
  {
    id: 16,
    question: 'Bạn thích làm việc với trẻ em, người già hoặc người cần hỗ trợ?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { S: 3 } },
      { value: 'agree', label: 'Đồng ý', scores: { S: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { I: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { I: 2 } }
    ]
  },
  {
    id: 17,
    question: 'Bạn thích đàm phán, thuyết phục và xây dựng mối quan hệ?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { E: 3, S: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { E: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { I: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { I: 2 } }
    ]
  },
  {
    id: 18,
    question: 'Bạn thích làm việc trong môi trường ổn định, có quy trình rõ ràng?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { C: 3, S: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { C: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { A: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { A: 2 } }
    ]
  },
  {
    id: 19,
    question: 'Bạn thích xây dựng, lắp đặt hoặc tạo ra các sản phẩm vật chất?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { R: 3, C: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { R: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { A: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { A: 2 } }
    ]
  },
  {
    id: 20,
    question: 'Bạn thích làm việc độc lập, tự chủ hơn là làm việc nhóm?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { I: 2, A: 1, R: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { I: 1 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { E: 1, S: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { E: 2, S: 2 } }
    ]
  }
];

export default function RIASEC20Page() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [scores, setScores] = useState({ R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 });
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (questionId: number, optionValue: string, optionScores: any) => {
    const newAnswers = { ...answers, [questionId]: optionValue };
    setAnswers(newAnswers);

    // Update scores
    const newScores = { ...scores };
    Object.keys(optionScores).forEach((key) => {
      newScores[key as keyof typeof newScores] += optionScores[key];
    });
    setScores(newScores);

    // Move to next question
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      // Last question, show result
      setTimeout(() => {
        setShowResult(true);
      }, 300);
    }
  };

  const getResult = () => {
    const sortedScores = Object.entries(scores)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 3);

    const topType = sortedScores[0][0];
    
    const typeInfo: Record<string, { name: string; description: string; color: string; icon: string }> = {
      R: {
        name: 'Realistic - Thực tế',
        description: 'Bạn phù hợp với các ngành kỹ thuật, thực hành, máy móc và công nghệ ứng dụng.',
        color: 'orange',
        icon: '🔧'
      },
      I: {
        name: 'Investigative - Nghiên cứu',
        description: 'Bạn yêu thích phân tích, nghiên cứu, tìm hiểu bản chất sự vật, tư duy logic mạnh.',
        color: 'blue',
        icon: '🔬'
      },
      A: {
        name: 'Artistic - Nghệ thuật',
        description: 'Bạn có trí tưởng tượng phong phú, yêu cái đẹp và thích sáng tạo.',
        color: 'purple',
        icon: '🎨'
      },
      S: {
        name: 'Social - Xã hội',
        description: 'Bạn thích giúp đỡ người khác, hướng dẫn, giao tiếp và hỗ trợ xã hội.',
        color: 'red',
        icon: '❤️'
      },
      E: {
        name: 'Enterprising - Kinh doanh',
        description: 'Bạn có tố chất lãnh đạo, thích thuyết phục, kinh doanh và tổ chức.',
        color: 'green',
        icon: '💼'
      },
      C: {
        name: 'Conventional - Quy ước',
        description: 'Bạn làm tốt với dữ liệu, quy trình, tính chính xác và làm việc có tổ chức.',
        color: 'yellow',
        icon: '📊'
      }
    };

    return { topType, sortedScores, typeInfo };
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setScores({ R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 });
    setShowResult(false);
  };

  if (showResult) {
    const { topType, sortedScores, typeInfo } = getResult();
    const topTypeInfo = typeInfo[topType];

    return (
      <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen text-gray-800">
        <div className="max-w-4xl mx-auto py-12 px-6">
          <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8">
            <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
              Kết Quả Bài Test RIASEC
            </h1>

            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{topTypeInfo.icon}</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">{topTypeInfo.name}</h2>
              <p className="text-lg text-gray-600">{topTypeInfo.description}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Điểm số của bạn:</h3>
              <div className="space-y-3">
                {sortedScores.map(([type, score]) => {
                  const info = typeInfo[type];
                  const percentage = (score / sortedScores[0][1]) * 100;
                  const colorClasses: Record<string, string> = {
                    orange: 'bg-orange-600',
                    blue: 'bg-blue-600',
                    purple: 'bg-purple-600',
                    red: 'bg-red-600',
                    green: 'bg-green-600',
                    yellow: 'bg-yellow-600'
                  };
                  return (
                    <div key={type} className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-700">
                          {info.icon} {info.name} ({type})
                        </span>
                        <span className="font-bold text-blue-600">{score} điểm</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className={`${colorClasses[info.color] || 'bg-blue-600'} h-4 rounded-full transition-all duration-500`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mb-8 border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Bước tiếp theo:</h3>
              <p className="text-gray-700 mb-4">
                Để nhận được gợi ý ngành học cụ thể và chi tiết hơn, vui lòng điền thông tin và chọn ngành học bạn quan tâm.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`/test?riasec=${topType}&scores=${JSON.stringify(scores)}`}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold text-center transition"
                >
                  Điền thông tin và nhận tư vấn chi tiết →
                </a>
                <a
                  href="/majors"
                  className="flex-1 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl font-semibold text-center transition"
                >
                  Xem thông tin ngành học →
                </a>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <button
                onClick={resetTest}
                className="px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl font-semibold transition"
              >
                Làm lại bài test
              </button>
              <a
                href="/tests"
                className="px-6 py-3 glass-button text-white rounded-xl font-semibold transition"
              >
                Về danh sách test
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen text-gray-800">
      <div className="max-w-4xl mx-auto py-12 px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
            Bài Test RIASEC 20 Câu
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Trả lời 20 câu hỏi để khám phá nhóm tính cách nghề nghiệp phù hợp với bạn
          </p>
          
          {/* Progress Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-gray-600">
                Câu {currentQuestion + 1} / {questions.length}
              </span>
              <span className="text-sm font-semibold text-blue-600">
                {Math.round(progress)}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8 mb-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Câu {question.id}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {question.question}
            </p>
          </div>

          <div className="space-y-3">
            {question.options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(question.id, option.value, option.scores)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                  answers[question.id] === option.value
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center ${
                    answers[question.id] === option.value
                      ? 'border-blue-600 bg-blue-600'
                      : 'border-gray-300'
                  }`}>
                    {answers[question.id] === option.value && (
                      <div className="w-3 h-3 rounded-full bg-white"></div>
                    )}
                  </div>
                  <span className="text-lg text-gray-700 font-medium">{option.label}</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
            disabled={currentQuestion === 0}
            className={`px-6 py-3 rounded-xl font-semibold transition ${
              currentQuestion === 0
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            }`}
          >
            ← Câu trước
          </button>
          <a
            href="/tests"
            className="px-6 py-3 glass-button text-white rounded-xl font-semibold transition"
          >
            Về danh sách test
          </a>
        </div>
      </div>
    </div>
  );
}

