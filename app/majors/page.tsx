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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
      {/* Header */}
      <div className="glass-dark border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Thông Tin Ngành Học
              </h1>
              <p className="text-gray-300">
                Khám phá các nhóm ngành học theo mô hình RIASEC
              </p>
            </div>
            <a
              href="/"
              className="glass-button text-white px-6 py-2 rounded-xl font-semibold"
            >
              ← Về trang chủ
            </a>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="glass-card rounded-2xl border border-white/20 p-4">
          <input
            type="text"
            placeholder="Tìm kiếm ngành học, nghề nghiệp..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 glass-dark border border-white/20 rounded-xl focus:outline-none focus:border-blue-400/50 focus:bg-white/10 text-white placeholder-gray-400 transition"
          />
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
                className="glass-card rounded-2xl border border-white/20 overflow-hidden hover:border-white/30 transition-all cursor-pointer hover:scale-105"
                onClick={() => setSelectedGroup(group)}
              >
                <div className="glass-dark p-6 border-b border-white/10">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-4xl">{group.icon}</span>
                    <div>
                      <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${colors.badge}`}>
                        {group.code}
                      </div>
                      <h2 className={`text-xl font-bold mt-2 ${colors.text}`}>
                        {group.name}
                      </h2>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {group.description}
                  </p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-500 mb-2">Một số ngành học:</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.majors.slice(0, 3).map((major, idx) => (
                        <span key={idx} className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-700">
                          {major}
                        </span>
                      ))}
                      {group.majors.length > 3 && (
                        <span className="text-xs px-2 py-1 bg-gray-100 rounded text-gray-500">
                          +{group.majors.length - 3} ngành khác
                        </span>
                      )}
                    </div>
                  </div>
                  <button
                    className={`w-full ${colors.button} text-white px-4 py-2 rounded-xl font-semibold transition`}
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

      {/* Modal Detail */}
      {selectedGroup && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
          onClick={() => setSelectedGroup(null)}
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <div
            className="glass-card rounded-2xl border border-white/20 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="glass-dark p-6 border-b border-white/10">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-5xl">{selectedGroup.icon}</span>
                  <div>
                    <div className="inline-block px-3 py-1 rounded-full text-sm font-bold glass-dark border border-white/20 mb-2">
                      Nhóm {selectedGroup.code}
                    </div>
                    <h2 className="text-3xl font-bold text-white">
                      {selectedGroup.name}
                    </h2>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedGroup(null)}
                  className="text-gray-400 hover:text-white text-2xl font-bold transition"
                >
                  ×
                </button>
              </div>
              <p className="text-gray-300 mt-4 text-lg leading-relaxed">
                {selectedGroup.description}
              </p>
            </div>

            <div className="p-6 space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Các ngành học phù hợp</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedGroup.majors.map((major, idx) => (
                    <div key={idx} className="p-3 glass-dark rounded-lg border border-white/10 text-gray-200">
                      {major}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Nghề nghiệp phù hợp</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {selectedGroup.jobs.map((job, idx) => (
                    <div key={idx} className="p-3 glass-dark rounded-lg border border-white/10 text-gray-200">
                      {job}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Điểm mạnh nổi bật</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedGroup.strengths.map((strength, idx) => (
                    <span key={idx} className="px-4 py-2 glass-dark border border-white/20 rounded-full font-medium text-gray-200">
                      {strength}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-3">Khối thi phù hợp</h3>
                <div className="flex flex-wrap gap-3">
                  {selectedGroup.examBlocks.map((block, idx) => (
                    <span key={idx} className="px-4 py-2 glass-dark border border-blue-400/30 rounded-full font-bold text-lg text-blue-300">
                      {block}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <a
                  href="/test"
                  className="flex-1 glass-button text-white px-6 py-3 rounded-xl font-semibold text-center border border-white/20"
                >
                  Làm bài test ngay →
                </a>
                <button
                  onClick={() => setSelectedGroup(null)}
                  className="px-6 py-3 glass-dark hover:bg-white/10 text-gray-300 rounded-xl font-semibold transition border border-white/10"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 text-sm glass-dark border-t border-white/10 mt-12">
        <div className="max-w-7xl mx-auto px-6">
          © 2025 Hệ Chuyên Gia Hướng Nghiệp – All rights reserved.
          <div className="mt-2 text-gray-500">Bản quyền thuộc về nhóm Học viên CNTT 2025.1</div>
        </div>
      </footer>
      </div>
    </div>
  );
}

