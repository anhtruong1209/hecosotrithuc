'use client';

import { useState } from 'react';

interface MajorGroup {
  code: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  majors: string[];
  jobs: string[];
  examBlocks: string[];
  strengths: string[];
}

const majorGroups: MajorGroup[] = [
  {
    code: 'R',
    name: 'Kỹ thuật – Cơ khí – Điện tử',
    description: 'Nhóm ngành phù hợp với những người yêu thích làm việc với máy móc, kỹ thuật, thực hành và công nghệ ứng dụng. Bạn có kỹ năng thao tác tốt, tư duy kỹ thuật và khả năng sửa chữa, vận hành thiết bị.',
    icon: '🔧',
    color: 'orange',
    majors: [
      'Cơ điện tử',
      'Tự động hóa',
      'Kỹ thuật ô tô',
      'An ninh quốc phòng',
      'Kỹ thuật cơ khí',
      'Kỹ thuật điện',
      'Kỹ thuật điện tử',
      'Kỹ thuật công nghiệp',
      'Kỹ thuật xây dựng',
      'Kỹ thuật môi trường'
    ],
    jobs: [
      'Kỹ sư cơ khí',
      'Kỹ thuật điện',
      'Kỹ thuật viên vận hành',
      'Lực lượng vũ trang',
      'Kỹ sư tự động hóa',
      'Kỹ sư sản xuất',
      'Chuyên viên bảo trì',
      'Kỹ sư thiết kế'
    ],
    examBlocks: ['A00', 'A01', 'D07'],
    strengths: [
      'Kỹ năng thao tác',
      'Tư duy kỹ thuật',
      'Sửa chữa – vận hành tốt',
      'Kiên nhẫn, tỉ mỉ',
      'Khả năng giải quyết vấn đề thực tế'
    ]
  },
  {
    code: 'I',
    name: 'Khoa học – Công nghệ – Nghiên cứu',
    description: 'Nhóm ngành dành cho những người yêu thích phân tích, nghiên cứu, tìm hiểu bản chất sự vật và có tư duy logic mạnh. Bạn thích khám phá, tò mò và có khả năng tư duy hệ thống.',
    icon: '🔬',
    color: 'blue',
    majors: [
      'Công nghệ sinh học',
      'Khoa học máy tính',
      'Toán ứng dụng',
      'Vật lý học',
      'Hóa học',
      'Sinh học',
      'Khoa học dữ liệu',
      'Trí tuệ nhân tạo',
      'Công nghệ thông tin',
      'Kỹ thuật phần mềm'
    ],
    jobs: [
      'Nhà nghiên cứu',
      'Khoa học dữ liệu',
      'Kỹ sư AI',
      'Nhà khoa học',
      'Lập trình viên',
      'Kỹ sư phần mềm',
      'Chuyên viên phân tích dữ liệu',
      'Nhà toán học'
    ],
    examBlocks: ['A00', 'A01', 'B00'],
    strengths: [
      'Phân tích',
      'Nghiên cứu',
      'Tư duy hệ thống',
      'Logic, chính xác',
      'Khả năng giải quyết vấn đề phức tạp'
    ]
  },
  {
    code: 'A',
    name: 'Nghệ thuật – Thiết kế – Sáng tạo',
    description: 'Nhóm ngành phù hợp với những người có trí tưởng tượng phong phú, yêu cái đẹp và thích sáng tạo. Bạn có khả năng thẩm mỹ tốt, ý tưởng sáng tạo và khả năng hình ảnh hóa.',
    icon: '🎨',
    color: 'purple',
    majors: [
      'Đồ họa',
      'Truyền thông đa phương tiện',
      'Thiết kế thời trang',
      'Thiết kế nội thất',
      'Kiến trúc',
      'Mỹ thuật',
      'Nhiếp ảnh',
      'Quay phim',
      'Thiết kế đồ họa',
      'Thiết kế UI/UX'
    ],
    jobs: [
      'Designer',
      'UI/UX Designer',
      'Họa sĩ kỹ thuật số',
      'Kiến trúc sư',
      'Nhiếp ảnh gia',
      'Nhà thiết kế thời trang',
      'Giám đốc sáng tạo',
      'Chuyên viên marketing sáng tạo'
    ],
    examBlocks: ['V00', 'H00', 'N00'],
    strengths: [
      'Thẩm mỹ',
      'Ý tưởng sáng tạo',
      'Hình ảnh hóa tốt',
      'Trí tưởng tượng phong phú',
      'Khả năng biểu đạt'
    ]
  },
  {
    code: 'S',
    name: 'Giáo dục – Y tế – Công tác xã hội',
    description: 'Nhóm ngành dành cho những người thích giúp đỡ người khác, hướng dẫn, giao tiếp và hỗ trợ xã hội. Bạn có khả năng giao tiếp tốt, đồng cảm và mong muốn phục vụ cộng đồng.',
    icon: '❤️',
    color: 'red',
    majors: [
      'Tâm lý học',
      'Công tác xã hội',
      'Sư phạm',
      'Quản trị khách sạn',
      'Quản trị du lịch',
      'Y học',
      'Điều dưỡng',
      'Dược học',
      'Giáo dục mầm non',
      'Công tác thanh thiếu niên'
    ],
    jobs: [
      'Giáo viên',
      'Điều dưỡng',
      'Tư vấn viên',
      'Dịch vụ',
      'Khách sạn',
      'Du lịch',
      'Bác sĩ',
      'Nhân viên công tác xã hội',
      'Chuyên viên tâm lý',
      'Hướng dẫn viên du lịch'
    ],
    examBlocks: ['C00', 'C14', 'D01'],
    strengths: [
      'Giao tiếp',
      'Đồng cảm',
      'Hỗ trợ người khác',
      'Kiên nhẫn',
      'Khả năng lắng nghe'
    ]
  },
  {
    code: 'E',
    name: 'Kinh doanh – Quản lý – Lãnh đạo',
    description: 'Nhóm ngành phù hợp với những người có tố chất lãnh đạo, thích thuyết phục, kinh doanh và tổ chức. Bạn có khả năng đàm phán, tư duy chiến lược và tham vọng.',
    icon: '💼',
    color: 'green',
    majors: [
      'Kinh tế',
      'Marketing',
      'Quản trị nhân lực',
      'Quản trị khách sạn',
      'Quản trị du lịch',
      'Quản trị kinh doanh',
      'Tài chính ngân hàng',
      'Kinh doanh quốc tế',
      'Thương mại điện tử',
      'Quản lý dự án'
    ],
    jobs: [
      'Quản trị kinh doanh',
      'Kinh doanh',
      'Marketing',
      'Quản lý',
      'Quản trị khách sạn',
      'Quản trị du lịch',
      'Giám đốc điều hành',
      'Chuyên viên tư vấn',
      'Nhà quản lý dự án',
      'Giám đốc marketing'
    ],
    examBlocks: ['D01', 'A01'],
    strengths: [
      'Thuyết phục',
      'Đàm phán',
      'Tư duy chiến lược',
      'Lãnh đạo',
      'Năng động, quyết đoán'
    ]
  },
  {
    code: 'C',
    name: 'Kế toán – Hành chính – Văn phòng',
    description: 'Nhóm ngành dành cho những người làm tốt với dữ liệu, quy trình, tính chính xác và làm việc có tổ chức. Bạn tỉ mỉ, cẩn thận và có khả năng quản lý tài liệu tốt.',
    icon: '📊',
    color: 'yellow',
    majors: [
      'Kế toán kiểm toán',
      'Tài chính',
      'Hệ thống thông tin quản lý',
      'Quản trị văn phòng',
      'Thư ký văn phòng',
      'Quản lý tài chính',
      'Kế toán tài chính',
      'Kiểm toán nội bộ',
      'Quản trị hành chính',
      'Thống kê'
    ],
    jobs: [
      'Kế toán',
      'Hành chính văn phòng',
      'Thống kê',
      'Kiểm toán viên',
      'Chuyên viên tài chính',
      'Thư ký',
      'Quản lý hành chính',
      'Chuyên viên phân tích tài chính'
    ],
    examBlocks: ['A01', 'D01'],
    strengths: [
      'Tỉ mỉ',
      'Chính xác',
      'Quản lý tài liệu',
      'Ngăn nắp, có tổ chức',
      'Tuân thủ quy tắc'
    ]
  }
];

const colorClasses = {
  orange: {
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-700',
    button: 'bg-orange-600 hover:bg-orange-700',
    badge: 'bg-orange-100 text-orange-800'
  },
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-700',
    button: 'bg-blue-600 hover:bg-blue-700',
    badge: 'bg-blue-100 text-blue-800'
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
  green: {
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-700',
    button: 'bg-green-600 hover:bg-green-700',
    badge: 'bg-green-100 text-green-800'
  },
  yellow: {
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    text: 'text-yellow-700',
    button: 'bg-yellow-600 hover:bg-yellow-700',
    badge: 'bg-yellow-100 text-yellow-800'
  }
};

export default function MajorsPage() {
  const [selectedGroup, setSelectedGroup] = useState<MajorGroup | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGroups = majorGroups.filter(group =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.majors.some(major => major.toLowerCase().includes(searchTerm.toLowerCase())) ||
    group.jobs.some(job => job.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-pink-300/40 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-300/40 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
      {/* Header */}
      <div className="glass-card border-b border-white/30">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">
                Thông Tin Ngành Học
              </h1>
              <p className="text-gray-600 text-base md:text-lg">
                Khám phá các nhóm ngành học theo mô hình RIASEC
              </p>
            </div>
            <a
              href="/"
              className="glass-button text-white px-6 py-3 rounded-xl text-sm md:text-base font-medium hover:scale-105 transition"
            >
              ← Về trang chủ
            </a>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="glass-card rounded-2xl p-4">
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">🔍</span>
            <input
              type="text"
              placeholder="Tìm kiếm ngành học, nghề nghiệp..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 glass border border-white/40 rounded-xl focus:outline-none focus:border-white/60 focus:bg-white/60 text-gray-800 placeholder-gray-500 transition text-base"
            />
          </div>
        </div>
      </div>

      {/* Major Groups Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => {
            const colors = colorClasses[group.color as keyof typeof colorClasses];
            return (
              <div
                key={group.code}
                className="glass-card rounded-xl overflow-hidden hover:scale-[1.02] hover:shadow-xl transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedGroup(group)}
              >
                <div className="p-4 md:p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="text-3xl md:text-4xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {group.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="inline-block px-2 py-1 rounded-full text-xs font-bold bg-white/40 backdrop-blur-sm border border-white/50 mb-1.5 text-gray-800">
                        {group.code}
                      </div>
                      <h2 className="text-sm md:text-base font-bold mt-1 text-gray-800 leading-tight line-clamp-2">
                        {group.name}
                      </h2>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3 line-clamp-2">
                    {group.description}
                  </p>
                  <div className="mb-3">
                    <div className="flex flex-wrap gap-1.5">
                      {group.majors.slice(0, 2).map((major, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 bg-white/30 backdrop-blur-sm border border-white/40 rounded text-gray-700">
                          {major}
                        </span>
                      ))}
                      {group.majors.length > 2 && (
                        <span className="text-xs px-2 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded text-gray-600">
                          +{group.majors.length - 2} ngành
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    className="w-full glass-button text-white px-4 py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 hover:scale-105"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedGroup(group);
                    }}
                  >
                    Xem chi tiết →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredGroups.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Không tìm thấy ngành học phù hợp với từ khóa của bạn.</p>
          </div>
        )}
      </div>

      {/* Modal Detail - Compact */}
      {selectedGroup && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={() => setSelectedGroup(null)}
        >
          <div
            className="glass-card rounded-xl max-w-lg w-full max-h-[80vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Compact */}
            <div className="p-4 border-b border-white/30 sticky top-0 bg-white/10 backdrop-blur-sm">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <span className="text-3xl flex-shrink-0">{selectedGroup.icon}</span>
                  <div className="min-w-0 flex-1">
                    <div className="inline-block px-2 py-0.5 rounded-full text-xs font-bold bg-white/40 backdrop-blur-sm border border-white/50 mb-1 text-gray-800">
                      {selectedGroup.code}
                    </div>
                    <h2 className="text-base md:text-lg font-bold text-gray-800 leading-tight line-clamp-2">
                      {selectedGroup.name}
                    </h2>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedGroup(null)}
                  className="text-gray-500 hover:text-gray-800 text-xl font-bold transition flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/30"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Content Compact */}
            <div className="p-4 space-y-4">
              {/* Description */}
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                {selectedGroup.description}
              </p>

              {/* Majors */}
              <div>
                <h3 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Ngành học</h3>
                <div className="flex flex-wrap gap-1.5">
                  {selectedGroup.majors.slice(0, 6).map((major, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white/30 backdrop-blur-sm border border-white/40 rounded text-gray-700 text-xs">
                      {major}
                    </span>
                  ))}
                  {selectedGroup.majors.length > 6 && (
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded text-gray-600 text-xs">
                      +{selectedGroup.majors.length - 6} ngành
                    </span>
                  )}
                </div>
              </div>

              {/* Jobs */}
              <div>
                <h3 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Nghề nghiệp</h3>
                <div className="flex flex-wrap gap-1.5">
                  {selectedGroup.jobs.slice(0, 5).map((job, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white/30 backdrop-blur-sm border border-white/40 rounded text-gray-700 text-xs">
                      {job}
                    </span>
                  ))}
                  {selectedGroup.jobs.length > 5 && (
                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm border border-white/30 rounded text-gray-600 text-xs">
                      +{selectedGroup.jobs.length - 5} nghề
                    </span>
                  )}
                </div>
              </div>

              {/* Strengths */}
              <div>
                <h3 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Điểm mạnh</h3>
                <div className="flex flex-wrap gap-1.5">
                  {selectedGroup.strengths.map((strength, idx) => (
                    <span key={idx} className="px-2 py-1 bg-white/30 backdrop-blur-sm border border-white/40 rounded-full text-gray-700 text-xs">
                      {strength}
                    </span>
                  ))}
                </div>
              </div>

              {/* Exam Blocks */}
              <div>
                <h3 className="text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Khối thi</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedGroup.examBlocks.map((block, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-white/40 backdrop-blur-sm border border-white/50 rounded-full font-bold text-xs text-gray-800">
                      {block}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-3 border-t border-white/30">
                <a
                  href="/test"
                  className="flex-1 glass-button text-white px-4 py-2 rounded-lg text-xs md:text-sm font-medium text-center hover:scale-105 transition"
                >
                  Làm test →
                </a>
                <button
                  onClick={() => setSelectedGroup(null)}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/40 hover:bg-white/30 text-gray-700 rounded-lg text-xs md:text-sm font-medium transition"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      </div>
    </div>
  );
}

