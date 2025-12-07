export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-400/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto py-12 px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="glass-card rounded-2xl p-6 md:p-8 mb-6">
            <div className="inline-block mb-4">
              <span className="text-5xl md:text-6xl">🎯</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-blue-700">
              Bài Tư Vấn Chọn Ngành Học
            </h1>
            <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto">
              Vui lòng trả lời các câu hỏi dưới đây để hệ chuyên gia phân tích và đưa ra gợi ý ngành học phù hợp nhất với bạn.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <a href="/" className="glass-button text-white px-4 py-2 rounded-xl text-sm">
                ← Về trang chủ
              </a>
              <a href="/tests" className="glass-button text-white px-4 py-2 rounded-xl text-sm">
                Xem các bài test khác →
              </a>
            </div>
          </div>
        </div>

          <form action="/api/submit" method="POST" className="space-y-6">
            <div className="glass-card p-6 md:p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">👤</span>
                <h2 className="text-lg md:text-xl font-semibold text-blue-700">Thông tin người tham gia tư vấn</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <input type="text" name="fullname" placeholder="Họ và tên" required className="p-3 glass border border-blue-200/50 rounded-xl bg-white/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:bg-white transition" />
                <input type="tel" name="phone" placeholder="Số điện thoại" required className="p-3 glass border border-blue-200/50 rounded-xl bg-white/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:bg-white transition" />
                <input type="email" name="email" placeholder="Địa chỉ email" required className="p-3 glass border border-blue-200/50 rounded-xl bg-white/50 text-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-400 focus:bg-white transition" />
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">1️⃣</span>
                <h2 className="text-lg md:text-xl font-semibold text-blue-700">Bạn thích hoạt động nào nhất?</h2>
              </div>
              <select name="sothich" required className="w-full p-3 glass border border-blue-200/50 rounded-xl bg-white/50 text-gray-800 focus:outline-none focus:border-blue-400 focus:bg-white transition">
                <option value="" disabled selected>-- Chọn sở thích --</option>
                <option value="kythuat">Làm việc với máy móc, kỹ thuật</option>
                <option value="sangtao">Các hoạt động sáng tạo, thiết kế</option>
                <option value="congnghe">Công nghệ thông tin, máy tính</option>
                <option value="xahoi">Làm việc với con người, giao tiếp</option>
                <option value="kinhte">Kinh tế, kinh doanh</option>
                <option value="quanly">Quản lý</option>
                <option value="dichvu">Dịch vụ</option>
                <option value="khachsan">Khách sạn</option>
                <option value="dulich">Du lịch</option>
                <option value="llvt">Lực lượng vũ trang</option>
              </select>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">2️⃣</span>
                <h2 className="text-lg md:text-xl font-semibold text-blue-700">Môn học nào bạn học tốt nhất? (Tối đa 3 môn)</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                {['toan', 'ly', 'hoa', 'van', 'anh', 'sinh', 'tinhoc', 'congnghe', 'lichsu', 'dialy', 'gdtc', 'mythuat', 'amnhac'].map(subject => {
                  const labels: Record<string, string> = {
                    toan: 'Toán', ly: 'Vật lý', hoa: 'Hóa học', van: 'Ngữ văn', anh: 'Tiếng Anh',
                    sinh: 'Sinh học', tinhoc: 'Tin học', congnghe: 'Công nghệ', lichsu: 'Lịch sử',
                    dialy: 'Địa lý', gdtc: 'Giáo dục thể chất', mythuat: 'Mỹ thuật', amnhac: 'Âm nhạc'
                  };
                  return (
                    <label key={subject} className="flex items-center p-3 glass border border-blue-200/50 rounded-xl hover:bg-blue-50/50 cursor-pointer transition">
                      <input type="checkbox" name="monmanh" value={subject} className="mr-3 w-5 h-5 text-blue-600 accent-blue-600" />
                      <span className="text-gray-700">{labels[subject]}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">3️⃣</span>
                <h2 className="text-lg md:text-xl font-semibold text-blue-700">Tính cách nào mô tả bạn nhất? (Có thể chọn nhiều)</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                {[
                  { value: 'logic', label: 'Tư duy logic' },
                  { value: 'sangtao', label: 'Sáng tạo, tưởng tượng phong phú' },
                  { value: 'huongngoai', label: 'Hướng ngoại, giao tiếp tốt' },
                  { value: 'tinhte', label: 'Tỉ mỉ, cẩn thận' },
                  { value: 'thucte', label: 'Thực tế, thích hoạt động thể chất' },
                  { value: 'kiendinh', label: 'Kiên nhẫn, kiên trì' },
                  { value: 'tomo', label: 'Tò mò, thích khám phá' },
                  { value: 'doclap', label: 'Độc lập, tự chủ' },
                  { value: 'phantich', label: 'Thích phân tích, nghiên cứu' },
                  { value: 'thantrong', label: 'Thận trọng, cẩn trọng' },
                  { value: 'tudo', label: 'Tự do, không thích ràng buộc' },
                  { value: 'bieucam', label: 'Biểu cảm, giàu cảm xúc' },
                  { value: 'nhaycam', label: 'Nhạy cảm, tinh tế' },
                  { value: 'linhhoat', label: 'Linh hoạt, thích ứng nhanh' },
                  { value: 'thanthien', label: 'Thân thiện, dễ gần' },
                  { value: 'giupdo', label: 'Thích giúp đỡ người khác' },
                  { value: 'dongcam', label: 'Đồng cảm, thấu hiểu' },
                  { value: 'tuccam', label: 'Tự tin, mạnh mẽ' },
                  { value: 'thamvong', label: 'Tham vọng, có hoài bão' },
                  { value: 'nangdong', label: 'Năng động, nhiệt huyết' },
                  { value: 'quyetdoan', label: 'Quyết đoán, dám nghĩ dám làm' },
                  { value: 'ngannap', label: 'Ngăn nắp, có tổ chức' },
                  { value: 'dangtincay', label: 'Đáng tin cậy, trung thực' },
                  { value: 'tuanthu', label: 'Tuân thủ quy tắc, kỷ luật' },
                ].map(trait => (
                  <label key={trait.value} className="flex items-center p-3 glass border border-blue-200/50 rounded-xl hover:bg-blue-50/50 cursor-pointer transition">
                    <input type="checkbox" name="tinhcach" value={trait.value} className="mr-3 w-5 h-5 text-blue-600 accent-blue-600" />
                    <span className="text-gray-700">{trait.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">4️⃣</span>
                <h2 className="text-lg md:text-xl font-semibold text-blue-700">Mục tiêu nghề nghiệp của bạn là gì?</h2>
              </div>
              <select name="muctieu" required className="w-full p-3 glass border border-blue-200/50 rounded-xl bg-white/50 text-gray-800 focus:outline-none focus:border-blue-400 focus:bg-white transition">
                <option value="" disabled selected>-- Chọn mục tiêu nghề nghiệp --</option>
                <option value="luongcao">Thu nhập cao</option>
                <option value="on_dinh">Ổn định, ít áp lực</option>
                <option value="sangtao">Được sáng tạo</option>
                <option value="phucvu">Phục vụ cộng đồng</option>
                <option value="lanhdao">Có cơ hội lãnh đạo</option>
              </select>
            </div>

            <div className="text-center pt-8">
              <button type="submit" className="glass-button px-8 md:px-12 py-3 md:py-4 text-white rounded-xl text-base md:text-lg font-semibold hover:scale-105 transition-transform">
                🚀 Xem kết quả tư vấn →
              </button>
              <p className="text-xs md:text-sm text-gray-600 mt-4">
                Kết quả sẽ được phân tích tự động và gửi về email của bạn
              </p>
            </div>
          </form>

        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            const maxSelections = 3;
            const toast = document.createElement('div');
            toast.id = 'toast-limit';
            toast.className = 'hidden fixed top-5 right-5 bg-red-500 text-white px-5 py-3 rounded-xl shadow-lg z-50';
            toast.innerHTML = 'Bạn chỉ được chọn tối đa <b>3 môn mạnh</b>!';
            document.body.appendChild(toast);

            function showToast() {
              toast.classList.remove('hidden');
              setTimeout(() => toast.classList.add('hidden'), 1800);
            }

            document.querySelectorAll('input[name="monmanh"]').forEach(cb => {
              cb.addEventListener('change', () => {
                const checked = document.querySelectorAll('input[name="monmanh"]:checked');
                if (checked.length > maxSelections) {
                  cb.checked = false;
                  showToast();
                }
              });
            });
          })();
        ` }} />
      </div>
    </div>
  );
}

