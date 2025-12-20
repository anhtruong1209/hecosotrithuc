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
  const colorMap: Record<string, string> = {
    blue: 'clay-card-blue',
    green: 'clay-card-green',
    purple: 'clay-card-purple',
    red: 'clay-card-pink',
    orange: 'clay-card-yellow',
    yellow: 'clay-card-yellow'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 via-blue-200 to-yellow-200 text-gray-800 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300/40 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-300/40 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-300/40 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-300/40 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-12">
          <div className="clay-card clay-card-purple p-6 md:p-8 mb-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-3xl md:text-2xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Chọn Bài Test Phù Hợp
                </h1>
                <p className="text-base md:text-lg text-gray-700 max-w-2xl leading-relaxed">
                  Khám phá bản thân qua các bài test chuyên nghiệp để tìm ra ngành học và nghề nghiệp phù hợp nhất với bạn
                </p>
              </div>
              <a
                href="/"
                className="clay-button-secondary text-white px-6 py-3 rounded-full text-base font-semibold hover:scale-105 transition-transform"
              >
                ← Về trang chủ
              </a>
            </div>
          </div>

          {/* Test Types Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {testTypes.map((test) => {
              const clayClass = colorMap[test.color] || 'clay-card';
              return (
                <a
                  key={test.id}
                  href={test.link}
                  className={`clay-card ${clayClass} p-6 md:p-8 block cursor-pointer`}
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="text-4xl md:text-5xl flex-shrink-0">
                      {test.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-lg md:text-xl font-bold text-gray-800 leading-tight">
                        {test.name}
                      </h2>
                    </div>
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 line-clamp-3">
                    {test.description}
                  </p>
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-3 py-1 bg-white/60 border border-white/80 rounded-lg text-gray-700 font-medium">
                        📝 {test.questions} câu
                      </span>
                      <span className="text-xs px-3 py-1 bg-white/60 border border-white/80 rounded-lg text-gray-700 font-medium">
                        ⏱️ {test.duration}
                      </span>
                    </div>
                  </div>
                  <button className="w-full clay-button-secondary text-white px-4 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 hover:scale-105 min-h-[48px] flex items-center justify-center">
                    Bắt đầu test →
                  </button>
                </a>
              );
            })}
          </div>

          {/* Info Section */}
          <div className="clay-card clay-card-blue p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Tại sao nên làm nhiều bài test?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="clay-card clay-card-yellow p-6 text-center">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">Định hướng rõ ràng</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Mỗi bài test cung cấp góc nhìn khác nhau về bản thân, giúp bạn có cái nhìn toàn diện hơn
                </p>
              </div>
              <div className="clay-card clay-card-pink p-6 text-center">
                <div className="text-5xl mb-4">💡</div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">Khám phá tiềm năng</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Phát hiện những điểm mạnh và sở thích mà bạn có thể chưa nhận ra
                </p>
              </div>
              <div className="clay-card clay-card-green p-6 text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3">Lựa chọn đúng đắn</h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                  Kết hợp kết quả từ nhiều bài test giúp đưa ra quyết định chính xác hơn
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

