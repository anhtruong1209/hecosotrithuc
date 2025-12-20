'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Demo progress animation
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const courses = [
    {
      id: 1,
      title: 'Bài Tư Vấn Chọn Ngành Học',
      icon: '🎯',
      description: 'Bài test chi tiết với đầy đủ thông tin để phân tích tính cách, sở thích và đưa ra gợi ý ngành học phù hợp nhất.',
      questions: 4,
      duration: '10-15 phút',
      color: 'pink',
      link: '/test'
    },
    {
      id: 2,
      title: 'Test Tính Cách MBTI',
      icon: '🧠',
      description: 'Khám phá tính cách của bạn qua 16 loại tính cách MBTI để hiểu rõ bản thân và định hướng nghề nghiệp.',
      questions: 28,
      duration: '15-20 phút',
      color: 'blue',
      link: '/test/mbti'
    },
    {
      id: 3,
      title: 'Test Sở Thích Nghề Nghiệp',
      icon: '❤️',
      description: 'Tìm hiểu sở thích và đam mê của bạn để khám phá các ngành nghề phù hợp với đam mê.',
      questions: 30,
      duration: '10-15 phút',
      color: 'purple',
      link: '/test/interest'
    },
    {
      id: 4,
      title: 'Test Năng Lực Học Tập',
      icon: '📚',
      description: 'Đánh giá năng lực học tập và điểm mạnh trong các môn học để chọn ngành phù hợp với khả năng.',
      questions: 25,
      duration: '15-20 phút',
      color: 'yellow',
      link: '/test/aptitude'
    },
    {
      id: 5,
      title: 'RIASEC 20 Câu',
      icon: '⚡',
      description: 'Bài test nhanh với 20 câu hỏi để khám phá nhóm tính cách nghề nghiệp theo mô hình RIASEC.',
      questions: 20,
      duration: '5-10 phút',
      color: 'green',
      link: '/riasec20'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Nguyễn Văn A',
      role: 'Học sinh lớp 12',
      avatar: '👨‍🎓',
      text: 'Hệ thống giúp em hiểu rõ bản thân và tìm được ngành học phù hợp. Em rất hài lòng với kết quả!',
      rating: 5
    },
    {
      id: 2,
      name: 'Trần Thị B',
      role: 'Học sinh lớp 11',
      avatar: '👩‍🎓',
      text: 'Các bài test rất thú vị và dễ hiểu. Kết quả tư vấn rất chi tiết và hữu ích cho việc định hướng nghề nghiệp.',
      rating: 5
    },
    {
      id: 3,
      name: 'Lê Văn C',
      role: 'Học sinh lớp 12',
      avatar: '👨‍🎓',
      text: 'Giao diện đẹp, dễ sử dụng. Em đã làm nhiều bài test và kết quả rất chính xác!',
      rating: 5
    }
  ];

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
        {/* Hero Section */}
        <section className="text-center py-16 md:py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="clay-card clay-card-pink p-8 md:p-12 mb-8">
              <div className="text-6xl md:text-8xl mb-6 animate-bounce">🎓</div>
              <h1 className="text-4xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent" style={{ lineHeight: '2' }}>
                Hệ Chuyên Gia Tư Vấn Chọn Ngành Học
              </h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
                Khám phá ngành học phù hợp với tính cách, năng lực và sở thích của bạn thông qua các bài test chuyên nghiệp
              </p>
              <div className="flex justify-center items-center gap-4 flex-wrap">
                <a href="/tests" className="clay-button text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform">
                  🚀 Bắt Đầu Ngay
                </a>
                <a href="/majors" className="clay-button-secondary text-white px-8 py-4 rounded-full text-lg font-bold hover:scale-105 transition-transform">
                  📚 Xem Ngành Học
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Course Catalog Preview */}
        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                📚 Danh Sách Bài Test
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Chọn bài test phù hợp để khám phá bản thân và tìm ngành học lý tưởng
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {courses.map((course) => {
                const colorClass = `clay-card-${course.color}`;
                return (
                  <a key={course.id} href={course.link} className={`clay-card ${colorClass} p-6 md:p-8 block`}>
                    <div className="text-5xl mb-4">{course.icon}</div>
                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">{course.title}</h3>
                    <p className="text-sm md:text-base text-gray-700 mb-4 leading-relaxed">{course.description}</p>
                    <div className="flex items-center justify-between text-xs md:text-sm text-gray-600">
                      <span>📝 {course.questions} câu</span>
                      <span>⏱️ {course.duration}</span>
                    </div>
                    <div className="mt-4 text-center">
                      <span className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition">
                        Bắt đầu test →
                      </span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Progress Tracking Demo */}
        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="clay-card clay-card-blue p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
                📊 Theo Dõi Tiến Độ Học Tập
              </h2>
              <div className="space-y-6">
                {[
                  { name: 'Bài Tư Vấn Chọn Ngành', progress: 75, color: 'from-pink-500 to-red-500' },
                  { name: 'Test MBTI', progress: 50, color: 'from-blue-500 to-purple-500' },
                  { name: 'Test Sở Thích Nghề Nghiệp', progress: 100, color: 'from-purple-500 to-pink-500' },
                  { name: 'Test Năng Lực Học Tập', progress: 25, color: 'from-yellow-500 to-orange-500' }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm md:text-base font-semibold text-gray-700">{item.name}</span>
                      <span className="text-sm md:text-base font-bold text-gray-700">{item.progress}%</span>
                    </div>
                    <div className="progress-bar-clay h-6 md:h-8">
                      <div 
                        className={`progress-fill-clay h-full bg-gradient-to-r ${item.color}`}
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <a href="/tests" className="clay-button-secondary text-white px-6 py-3 rounded-full text-base font-semibold inline-block hover:scale-105 transition-transform">
                  Xem Tất Cả Bài Test →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Student Testimonials */}
        <section className="py-12 md:py-16 px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                💬 Phản Hồi Từ Học Sinh
              </h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Những chia sẻ chân thật từ các học sinh đã sử dụng hệ thống
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="clay-card clay-card-yellow p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <div className="text-4xl mr-4">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-500 text-lg">⭐</span>
                    ))}
                  </div>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enrollment CTA */}
        <section className="py-16 md:py-24 px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="clay-card clay-card-purple p-10 md:p-16 text-center">
              <div className="text-6xl md:text-8xl mb-6 animate-bounce">🎉</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Sẵn Sàng Khám Phá Ngành Học Phù Hợp?
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
                Bắt đầu hành trình tìm kiếm ngành học lý tưởng của bạn ngay hôm nay. Hoàn toàn miễn phí và không cần đăng ký!
              </p>
              <div className="flex justify-center items-center gap-4 flex-wrap">
                <a href="/test" className="clay-button text-white px-10 py-5 rounded-full text-xl font-bold hover:scale-110 transition-transform shadow-lg">
                  🚀 Bắt Đầu Test Ngay
                </a>
                <a href="/guide" className="clay-button-secondary text-white px-10 py-5 rounded-full text-xl font-bold hover:scale-110 transition-transform shadow-lg">
                  📖 Xem Hướng Dẫn
                </a>
              </div>
              <div className="mt-8 flex justify-center items-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  <span>Miễn phí 100%</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⚡</span>
                  <span>Kết quả nhanh</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🎯</span>
                  <span>Chính xác cao</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
