'use client';

import { useState } from 'react';
import { calculateAptitude, AptitudeResult } from '@/lib/aptitude';
import TestInfoForm from '@/app/components/TestInfoForm';

interface Question {
  id: number;
  question: string;
  subject: 'math' | 'physics' | 'chemistry' | 'biology' | 'literature' | 'english' | 'history' | 'geography' | 'computer' | 'art';
  options: {
    value: string;
    label: string;
    score: number;
  }[];
}

const questions: Question[] = [
  { id: 1, question: 'Bạn học tốt môn Toán?', subject: 'math',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: 3 },
      { value: 'agree', label: 'Đồng ý', score: 2 },
      { value: 'neutral', label: 'Trung lập', score: 1 },
      { value: 'disagree', label: 'Không đồng ý', score: 0 },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: 0 }
    ]
  },
  { id: 2, question: 'Bạn học tốt môn Vật lý?', subject: 'physics',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: 3 },
      { value: 'agree', label: 'Đồng ý', score: 2 },
      { value: 'neutral', label: 'Trung lập', score: 1 },
      { value: 'disagree', label: 'Không đồng ý', score: 0 },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: 0 }
    ]
  },
  { id: 3, question: 'Bạn học tốt môn Hóa học?', subject: 'chemistry',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: 3 },
      { value: 'agree', label: 'Đồng ý', score: 2 },
      { value: 'neutral', label: 'Trung lập', score: 1 },
      { value: 'disagree', label: 'Không đồng ý', score: 0 },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: 0 }
    ]
  },
  { id: 4, question: 'Bạn học tốt môn Sinh học?', subject: 'biology',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: 3 },
      { value: 'agree', label: 'Đồng ý', score: 2 },
      { value: 'neutral', label: 'Trung lập', score: 1 },
      { value: 'disagree', label: 'Không đồng ý', score: 0 },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: 0 }
    ]
  },
  { id: 5, question: 'Bạn học tốt môn Ngữ văn?', subject: 'literature',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: 3 },
      { value: 'agree', label: 'Đồng ý', score: 2 },
      { value: 'neutral', label: 'Trung lập', score: 1 },
      { value: 'disagree', label: 'Không đồng ý', score: 0 },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: 0 }
    ]
  },
  { id: 6, question: 'Bạn học tốt môn Tiếng Anh?', subject: 'english',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: 3 },
      { value: 'agree', label: 'Đồng ý', score: 2 },
      { value: 'neutral', label: 'Trung lập', score: 1 },
      { value: 'disagree', label: 'Không đồng ý', score: 0 },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: 0 }
    ]
  },
  { id: 7, question: 'Bạn học tốt môn Lịch sử?', subject: 'history',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: 3 },
      { value: 'agree', label: 'Đồng ý', score: 2 },
      { value: 'neutral', label: 'Trung lập', score: 1 },
      { value: 'disagree', label: 'Không đồng ý', score: 0 },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: 0 }
    ]
  },
  { id: 8, question: 'Bạn học tốt môn Địa lý?', subject: 'geography',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: 3 },
      { value: 'agree', label: 'Đồng ý', score: 2 },
      { value: 'neutral', label: 'Trung lập', score: 1 },
      { value: 'disagree', label: 'Không đồng ý', score: 0 },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: 0 }
    ]
  },
  { id: 9, question: 'Bạn học tốt môn Tin học?', subject: 'computer',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: 3 },
      { value: 'agree', label: 'Đồng ý', score: 2 },
      { value: 'neutral', label: 'Trung lập', score: 1 },
      { value: 'disagree', label: 'Không đồng ý', score: 0 },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: 0 }
    ]
  },
  { id: 10, question: 'Bạn học tốt môn Mỹ thuật?', subject: 'art',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', score: 3 },
      { value: 'agree', label: 'Đồng ý', score: 2 },
      { value: 'neutral', label: 'Trung lập', score: 1 },
      { value: 'disagree', label: 'Không đồng ý', score: 0 },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', score: 0 }
    ]
  },
  // Thêm 15 câu hỏi nữa (tổng 25 câu) - lặp lại các môn học
  ...Array.from({ length: 15 }, (_, i) => {
    const qId = i + 11;
    const subjects: Question['subject'][] = ['math', 'physics', 'chemistry', 'biology', 'literature', 'english', 'history', 'geography', 'computer', 'art'];
    const subject = subjects[qId % 10];
    const subjectLabels = {
      math: 'Toán', physics: 'Vật lý', chemistry: 'Hóa học', biology: 'Sinh học',
      literature: 'Ngữ văn', english: 'Tiếng Anh', history: 'Lịch sử', geography: 'Địa lý',
      computer: 'Tin học', art: 'Mỹ thuật'
    };
    return {
      id: qId,
      question: `Bạn có khả năng tư duy tốt trong môn ${subjectLabels[subject]}?`,
      subject,
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

export default function AptitudePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [result, setResult] = useState<AptitudeResult | null>(null);
  const [userInfo, setUserInfo] = useState<{ fullname: string; phone: string; email?: string } | null>(null);
  const [testSaved, setTestSaved] = useState(false);

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers({ ...answers, [questionId]: answer });
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      // Calculate result with question subjects and scores
      const questionSubjects: Record<number, keyof import('@/lib/aptitude').AptitudeScores> = {};
      const questionScores: Record<number, number> = {};
      questions.forEach(q => {
        questionSubjects[q.id] = q.subject;
        const answer = answers[q.id];
        if (answer) {
          const option = q.options.find(o => o.value === answer);
          if (option) {
            questionScores[q.id] = option.score;
          }
        }
      });
      const aptitudeResult = calculateAptitude(answers, questionSubjects, questionScores);
      setResult(aptitudeResult);
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
          test_type: 'aptitude',
          test_name: 'Test Năng Lực Học Tập',
          result: {
            topSubjects: result.topSubjects,
            scores: result.scores,
            description: result.description,
            recommendedMajors: result.recommendedMajors,
            examBlocks: result.examBlocks
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
          <div className="absolute top-20 right-20 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-400/30 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto py-12 px-6">
          <div className="glass-card rounded-2xl p-6 md:p-8 text-center mb-6">
            <div className="text-5xl mb-4">📚</div>
            <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">Kết Quả Test Năng Lực</h1>
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
            <h3 className="text-base md:text-lg font-semibold text-blue-700 mb-3">Môn học bạn học tốt nhất</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {result.topSubjects.map((s, i) => (
                <span key={i} className="px-4 py-2 glass-dark border border-orange-400/50 rounded-full font-bold text-sm md:text-base text-orange-600">
                  {s}
                </span>
              ))}
            </div>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">{result.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
            <div className="glass-card rounded-xl p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-blue-700 mb-3">Ngành học phù hợp</h3>
              <div className="flex flex-wrap gap-2">
                {result.recommendedMajors.map((m, i) => (
                  <span key={i} className="px-3 py-1 glass border border-blue-200/50 rounded-lg text-xs md:text-sm text-gray-700">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-xl p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-blue-700 mb-3">Khối thi phù hợp</h3>
              <div className="flex flex-wrap gap-2">
                {result.examBlocks.map((b, i) => (
                  <span key={i} className="px-4 py-2 glass-dark border border-blue-400/50 rounded-full font-bold text-sm md:text-base text-blue-600">
                    {b}
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
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-yellow-400/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto py-12 px-6">
        <div className="glass-card rounded-2xl p-6 md:p-8 mb-6 text-center">
          <div className="text-4xl md:text-5xl mb-4">📚</div>
          <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">Test Năng Lực Học Tập</h1>
          <p className="text-sm md:text-base text-gray-600">Đánh giá năng lực học tập và điểm mạnh trong các môn học</p>
          
          <div className="mt-6 max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-2 text-xs md:text-sm">
              <span className="font-semibold text-gray-600">Câu {currentQuestion + 1} / {questions.length}</span>
              <span className="font-semibold text-blue-600">{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
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
                    ? 'border-orange-500 bg-orange-50/50'
                    : 'border-blue-200/50 hover:border-orange-400 hover:bg-orange-50/30'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                    answers[question.id] === option.value
                      ? 'border-orange-500 bg-orange-500'
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
