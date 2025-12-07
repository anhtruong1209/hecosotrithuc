'use client';

import { useState } from 'react';

export default function TestPage() {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionId, setSubmissionId] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.id) {
          setSubmissionId(data.id);
          setShowModal(true);
        } else {
          alert('Có lỗi xảy ra khi xử lý yêu cầu. Vui lòng thử lại.');
        }
      } else {
        const errorData = await response.json().catch(() => ({}));
        alert(errorData.error || 'Có lỗi xảy ra khi xử lý yêu cầu. Vui lòng thử lại.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Có lỗi xảy ra khi xử lý yêu cầu. Vui lòng thử lại.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-pink-300/40 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-300/40 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
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
              <a href="/tests" className="glass-button text-white px-4 py-2 rounded-xl text-sm">
                ← Về danh sách test
              </a>
            </div>
          </div>
        </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="glass-card p-6 md:p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">1️⃣</span>
                <h2 className="text-lg md:text-xl font-semibold text-blue-700">Bạn thích hoạt động nào nhất?</h2>
              </div>
              <select name="sothich" required defaultValue="" className="w-full p-3 glass border border-blue-200/50 rounded-xl bg-white/50 text-gray-800 focus:outline-none focus:border-blue-400 focus:bg-white transition">
                <option value="" disabled>-- Chọn sở thích --</option>
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
                  { value: 'phantich', label: 'Phân tích, suy nghĩ sâu sắc' },
                  { value: 'thantrong', label: 'Thận trọng, cẩn thận' },
                  { value: 'tudo', label: 'Tự do, linh hoạt' },
                  { value: 'bieucam', label: 'Biểu cảm, nghệ thuật' },
                  { value: 'nhaycam', label: 'Nhạy cảm, đồng cảm' },
                  { value: 'linhhoat', label: 'Linh hoạt, thích ứng nhanh' },
                  { value: 'thanthien', label: 'Thân thiện, hòa đồng' },
                  { value: 'giupdo', label: 'Giúp đỡ, hỗ trợ người khác' },
                  { value: 'dongcam', label: 'Đồng cảm, hiểu người khác' },
                  { value: 'tuccam', label: 'Tự cường, quyết đoán' },
                  { value: 'thamvong', label: 'Tham vọng, có mục tiêu rõ ràng' },
                  { value: 'quyetdoan', label: 'Quyết đoán, dám nghĩ dám làm' },
                  { value: 'ngannap', label: 'Ngăn nắp, có tổ chức' },
                  { value: 'dangtincay', label: 'Đáng tin cậy, trung thực' },
                  { value: 'tuanthu', label: 'Tuân thủ quy tắc, kỷ luật' }
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
              <select name="muctieu" required defaultValue="" className="w-full p-3 glass border border-blue-200/50 rounded-xl bg-white/50 text-gray-800 focus:outline-none focus:border-blue-400 focus:bg-white transition">
                <option value="" disabled>-- Chọn mục tiêu nghề nghiệp --</option>
                <option value="nghiencuu">Nghiên cứu, phát triển</option>
                <option value="kinhdoanh">Kinh doanh, khởi nghiệp</option>
                <option value="quanly">Quản lý, lãnh đạo</option>
                <option value="chuyengia">Chuyên gia, tư vấn</option>
                <option value="giaoduc">Giáo dục, đào tạo</option>
                <option value="sangtao">Sáng tạo, nghệ thuật</option>
                <option value="phucvu">Phục vụ, chăm sóc</option>
                <option value="kythuat">Kỹ thuật, vận hành</option>
              </select>
            </div>

            <div className="glass-card p-6 md:p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">5️⃣</span>
                <h2 className="text-lg md:text-xl font-semibold text-blue-700">Bạn muốn học trong nước hay du học?</h2>
              </div>
              <div className="space-y-4">
                <label className="flex items-start p-4 glass border border-blue-200/50 rounded-xl hover:bg-blue-50/50 cursor-pointer transition">
                  <input type="radio" name="study_option" value="domestic" defaultChecked className="mt-1 mr-3 w-5 h-5 text-blue-600 accent-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-800">🇻🇳 Học trong nước</div>
                    <div className="text-sm text-gray-600">Các trường đại học tại Việt Nam</div>
                  </div>
                </label>
                <label className="flex items-start p-4 glass border border-blue-200/50 rounded-xl hover:bg-blue-50/50 cursor-pointer transition">
                  <input type="radio" name="study_option" value="abroad" className="mt-1 mr-3 w-5 h-5 text-blue-600 accent-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-800">✈️ Du học</div>
                    <div className="text-sm text-gray-600">Học tập tại nước ngoài</div>
                  </div>
                </label>

                {/* Trong nước */}
                <div id="domestic-options">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Chọn trường đại học mong muốn:</label>
                  <select name="university_id" className="w-full p-3 glass border border-blue-200/50 rounded-xl bg-white/50 text-gray-800 focus:outline-none focus:border-blue-400 focus:bg-white transition">
                    <option value="">-- Chọn trường đại học --</option>
                    <optgroup label="Trường công lập - Hà Nội">
                      <option value="hust">Đại học Bách khoa Hà Nội (HUST)</option>
                      <option value="hust-it">Đại học Công nghệ - ĐHQG Hà Nội (UET)</option>
                      <option value="hanoi-university">Đại học Hà Nội (HANU)</option>
                      <option value="neu">Đại học Kinh tế Quốc dân (NEU)</option>
                      <option value="hcmus-hn">Đại học Khoa học Tự nhiên - ĐHQG Hà Nội (HUS)</option>
                      <option value="vnu-hn">Đại học Quốc gia Hà Nội (VNU)</option>
                      <option value="hn-arch">Đại học Kiến trúc Hà Nội (HAU)</option>
                      <option value="hn-med">Đại học Y Hà Nội (HMU)</option>
                      <option value="hn-law">Đại học Luật Hà Nội (HLU)</option>
                      <option value="hn-edu">Đại học Sư phạm Hà Nội (HNUE)</option>
                      <option value="hn-arts">Đại học Mỹ thuật Việt Nam (VNUA)</option>
                      <option value="hn-open">Đại học Mở Hà Nội (HOU)</option>
                      <option value="hn-industry">Đại học Công nghiệp Hà Nội (HAUI)</option>
                      <option value="hn-foreign">Đại học Ngoại ngữ - ĐHQG Hà Nội (ULIS)</option>
                      <option value="hn-pedagogy">Đại học Sư phạm Hà Nội 2 (HPU2)</option>
                    </optgroup>
                    <optgroup label="Trường công lập - TP.HCM">
                      <option value="hust-hcm">Đại học Bách khoa TP.HCM (HCMUT)</option>
                      <option value="hcmus">Đại học Khoa học Tự nhiên TP.HCM (HCMUS)</option>
                      <option value="ueh">Đại học Kinh tế TP.HCM (UEH)</option>
                      <option value="vnu-hcm">Đại học Quốc gia TP.HCM (VNU-HCM)</option>
                      <option value="hcm-arch">Đại học Kiến trúc TP.HCM (UAH)</option>
                      <option value="hcm-med">Đại học Y Dược TP.HCM (UMP)</option>
                      <option value="hcm-law">Đại học Luật TP.HCM (UL)</option>
                      <option value="hcm-edu">Đại học Sư phạm TP.HCM (HCMUE)</option>
                      <option value="hcm-arts">Đại học Mỹ thuật TP.HCM (HCMUFA)</option>
                      <option value="hcm-open">Đại học Mở TP.HCM (OU)</option>
                      <option value="hcm-industry">Đại học Công nghiệp TP.HCM (IUH)</option>
                      <option value="hcm-environment">Đại học Tài nguyên và Môi trường TP.HCM (HCMUNRE)</option>
                      <option value="hcm-culture">Đại học Văn hóa TP.HCM (HCMUC)</option>
                      <option value="dai-hoc-quoc-te">Đại học Quốc tế - ĐHQG TP.HCM (IU)</option>
                    </optgroup>
                    <optgroup label="Trường tư thục nổi tiếng">
                      <option value="fpt">Đại học FPT</option>
                      <option value="rmit">Đại học RMIT Việt Nam</option>
                      <option value="ton-duc-thang">Đại học Tôn Đức Thắng (TDTU)</option>
                      <option value="hutech">Đại học Công nghệ TP.HCM (HUTECH)</option>
                      <option value="greenwich">Đại học Greenwich Việt Nam</option>
                    </optgroup>
                  </select>
                </div>

                {/* Du học */}
                <div id="abroad-options" className="hidden">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Chọn quốc gia muốn du học:</label>
                  <select name="study_abroad_country" className="w-full p-3 glass border border-blue-200/50 rounded-xl bg-white/50 text-gray-800 focus:outline-none focus:border-blue-400 focus:bg-white transition">
                    <option value="">-- Chọn quốc gia --</option>
                    <optgroup label="Phổ biến">
                      <option value="us">🇺🇸 Hoa Kỳ</option>
                      <option value="uk">🇬🇧 Vương quốc Anh</option>
                      <option value="au">🇦🇺 Úc</option>
                      <option value="ca">🇨🇦 Canada</option>
                      <option value="sg">🇸🇬 Singapore</option>
                      <option value="jp">🇯🇵 Nhật Bản</option>
                      <option value="kr">🇰🇷 Hàn Quốc</option>
                      <option value="de">🇩🇪 Đức</option>
                      <option value="fr">🇫🇷 Pháp</option>
                    </optgroup>
                    <optgroup label="Khác">
                      <option value="nl">🇳🇱 Hà Lan</option>
                      <option value="nz">🇳🇿 New Zealand</option>
                      <option value="ch">🇨🇭 Thụy Sĩ</option>
                      <option value="se">🇸🇪 Thụy Điển</option>
                      <option value="tw">🇹🇼 Đài Loan</option>
                      <option value="cn">🇨🇳 Trung Quốc</option>
                    </optgroup>
                  </select>
                </div>
              </div>
            </div>

            <div className="text-center pt-8">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="glass-button px-8 md:px-12 py-3 md:py-4 text-white rounded-xl text-base md:text-lg font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Đang xử lý...' : '🚀 Xem kết quả tư vấn →'}
              </button>
            </div>
          </form>

        {/* Modal */}
        {showModal && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <div
              className="glass-card rounded-xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">🎉</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    Kết quả tư vấn đã sẵn sàng!
                  </h2>
                  <p className="text-sm md:text-base text-gray-600">
                    Hệ thống đã phân tích và đưa ra gợi ý ngành học phù hợp với bạn.
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="glass-card rounded-xl p-4 border border-white/30">
                    <h3 className="font-semibold text-gray-800 mb-3">💡 Để xem kết quả chi tiết và nhận đề xuất tốt nhất:</h3>
                    <ul className="text-sm text-gray-700 space-y-2 mb-4">
                      <li>• Đăng ký tài khoản để lưu kết quả</li>
                      <li>• Xem đề xuất nhóm ngành học phù hợp</li>
                      <li>• Nhận gợi ý trường đại học tốt nhất</li>
                      <li>• Quy nạp tất cả các bài test để đánh giá chuẩn nhất</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <a
                    href={`/result?id=${submissionId}`}
                    className="glass-button text-white px-6 py-3 rounded-xl text-base font-semibold text-center hover:scale-105 transition"
                  >
                    🎯 Xem kết quả ngay →
                  </a>
                  <button
                    onClick={() => setShowModal(false)}
                    className="px-6 py-3 bg-white/20 backdrop-blur-sm border border-white/40 hover:bg-white/30 text-gray-700 rounded-xl text-base font-medium transition"
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

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

            // Handle study option selection
            const domesticOptions = document.getElementById('domestic-options');
            const abroadOptions = document.getElementById('abroad-options');
            const domesticRadio = document.querySelector('input[value="domestic"]');
            const abroadRadio = document.querySelector('input[value="abroad"]');

            function updateStudyOptions() {
              if (domesticRadio && (domesticRadio as HTMLInputElement).checked) {
                domesticOptions?.classList.remove('hidden');
                abroadOptions?.classList.add('hidden');
                const abroadSelect = document.querySelector('select[name="study_abroad_country"]') as HTMLSelectElement;
                if (abroadSelect) abroadSelect.value = '';
              } else if (abroadRadio && (abroadRadio as HTMLInputElement).checked) {
                abroadOptions?.classList.remove('hidden');
                domesticOptions?.classList.add('hidden');
                const domesticSelect = document.querySelector('select[name="university_id"]') as HTMLSelectElement;
                if (domesticSelect) domesticSelect.value = '';
              }
            }

            domesticRadio?.addEventListener('change', updateStudyOptions);
            abroadRadio?.addEventListener('change', updateStudyOptions);
            updateStudyOptions();
          })();
        `}} />
      </div>
    </div>
  );
}
