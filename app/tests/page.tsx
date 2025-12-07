'use client';

interface TestType {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  questions: number;
  duration: string;
  link: string;
}

const testTypes: TestType[] = [
  {
    id: 'riasec-full',
    name: 'Bài Tư Vấn Chọn Ngành Học (RIASEC)',
    description: 'Bài test chi tiết với đầy đủ thông tin để phân tích tính cách, sở thích và đưa ra gợi ý ngành học phù hợp nhất.',
    icon: '🎯',
    color: 'blue',
    questions: 4,
    duration: '10-15 phút',
    link: '/test'
  },
  {
    id: 'riasec-20',
    name: 'RIASEC 20 Câu',
    description: 'Bài test nhanh với 20 câu hỏi để khám phá nhóm tính cách nghề nghiệp theo mô hình RIASEC.',
    icon: '⚡',
    color: 'green',
    questions: 20,
    duration: '5-10 phút',
    link: '/riasec20'
  },
  {
    id: 'personality',
    name: 'Test Tính Cách MBTI',
    description: 'Khám phá tính cách của bạn qua 16 loại tính cách MBTI để hiểu rõ bản thân và định hướng nghề nghiệp.',
    icon: '🧠',
    color: 'purple',
    questions: 28,
    duration: '15-20 phút',
    link: '/test/mbti'
  },
  {
    id: 'interest',
    name: 'Test Sở Thích Nghề Nghiệp',
    description: 'Tìm hiểu sở thích và đam mê của bạn để khám phá các ngành nghề phù hợp với đam mê.',
    icon: '❤️',
    color: 'red',
    questions: 30,
    duration: '10-15 phút',
    link: '/test/interest'
  },
  {
    id: 'aptitude',
    name: 'Test Năng Lực Học Tập',
    description: 'Đánh giá năng lực học tập và điểm mạnh trong các môn học để chọn ngành phù hợp với khả năng.',
    icon: '📚',
    color: 'orange',
    questions: 25,
    duration: '15-20 phút',
    link: '/test/aptitude'
  },
  {
    id: 'values',
    name: 'Test Giá Trị Nghề Nghiệp',
    description: 'Khám phá các giá trị quan trọng trong công việc của bạn như thu nhập, ổn định, sáng tạo, phục vụ...',
    icon: '💎',
    color: 'yellow',
    questions: 20,
    duration: '10-15 phút',
    link: '/test/values'
  }
];

const colorClasses = {
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
    button: 'bg-blue-600 hover:bg-blue-700',
    badge: 'bg-blue-100 text-blue-800'
  },
  green: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-700',
    button: 'bg-green-600 hover:bg-green-700',
    badge: 'bg-green-100 text-green-800'
  },
  purple: {
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-700',
    button: 'bg-purple-600 hover:bg-purple-700',
    badge: 'bg-purple-100 text-purple-800'
  },
  red: {
    bg: 'bg-red-50',
    border: 'border-red-200',
    text: 'text-red-700',
    button: 'bg-red-600 hover:bg-red-700',
    badge: 'bg-red-100 text-red-800'
  },
  orange: {
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-700',
    button: 'bg-orange-600 hover:bg-orange-700',
    badge: 'bg-orange-100 text-orange-800'
  },
  yellow: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    text: 'text-yellow-700',
    button: 'bg-yellow-600 hover:bg-yellow-700',
    badge: 'bg-yellow-100 text-yellow-800'
  }
};

export default function TestsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-pink-300/40 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-300/40 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
      {/* Header */}
      <div className="glass-card border-b border-blue-200/30">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-2">
                Chọn Bài Test Phù Hợp
              </h1>
              <p className="text-sm md:text-base text-gray-600 max-w-2xl">
                Khám phá bản thân qua các bài test chuyên nghiệp để tìm ra ngành học và nghề nghiệp phù hợp nhất với bạn
              </p>
            </div>
            <a
              href="/"
              className="glass-button text-white px-4 py-2 rounded-xl text-sm font-medium"
            >
              ← Về trang chủ
            </a>
          </div>
        </div>
      </div>

      {/* Test Types Grid */}
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {testTypes.map((test) => {
            const colors = colorClasses[test.color as keyof typeof colorClasses];
            return (
              <div
                key={test.id}
                className="glass-card rounded-xl overflow-hidden hover:scale-105 transition-all cursor-pointer"
              >
                <div className="p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl md:text-4xl">{test.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-base md:text-lg font-bold text-blue-700 mb-1 truncate">
                        {test.name}
                      </h2>
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <span>📝 {test.questions} câu</span>
                        <span>⏱️ {test.duration}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-2 mb-4">
                    {test.description}
                  </p>
                  <a
                    href={test.link}
                    className="block w-full glass-button text-white px-4 py-2 rounded-lg text-xs md:text-sm font-medium text-center"
                  >
                    Bắt đầu test →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Info Section */}
        <div className="mt-8 md:mt-12 glass-card rounded-xl p-6 md:p-8">
          <h2 className="text-lg md:text-xl font-bold text-blue-700 mb-4 text-center">
            Tại sao nên làm nhiều bài test?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl mb-2">🎯</div>
              <h3 className="text-sm md:text-base font-semibold text-blue-700 mb-2">Định hướng rõ ràng</h3>
              <p className="text-xs md:text-sm text-gray-600">
                Mỗi bài test cung cấp góc nhìn khác nhau về bản thân, giúp bạn có cái nhìn toàn diện hơn
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl mb-2">💡</div>
              <h3 className="text-sm md:text-base font-semibold text-blue-700 mb-2">Khám phá tiềm năng</h3>
              <p className="text-xs md:text-sm text-gray-600">
                Phát hiện những điểm mạnh và sở thích mà bạn có thể chưa nhận ra
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl mb-2">🚀</div>
              <h3 className="text-sm md:text-base font-semibold text-blue-700 mb-2">Lựa chọn đúng đắn</h3>
              <p className="text-xs md:text-sm text-gray-600">
                Kết hợp kết quả từ nhiều bài test giúp đưa ra quyết định chính xác hơn
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 md:py-8 text-gray-500 text-xs md:text-sm glass-card border-t border-blue-200/30 mt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          © 2025 Hệ Chuyên Gia Hướng Nghiệp
          <div className="mt-1 text-gray-400 text-xs">CNTT 2025.1</div>
        </div>
      </footer>
      </div>
    </div>
  );
}

