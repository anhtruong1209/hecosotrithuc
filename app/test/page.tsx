'use client';

import { useState } from 'react';
import RegisterForm from '@/app/components/RegisterForm';

interface ResultData {
  id: number;
  major: string;
  description: string;
  strengths: string[];
  jobs: string[];
  related_majors: string[];
  suggested_blocks: string[];
  r_scores: Record<string, number>;
  study_option: 'domestic' | 'abroad';
  university_id?: string;
  study_abroad_country?: string;
  fullname?: string;
  phone?: string;
  email?: string;
}

export default function TestPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resultData, setResultData] = useState<ResultData | null>(null);
  const [showForm, setShowForm] = useState(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
        credentials: 'include',
      });

      let data;
      try {
        data = await response.json();
      } catch (parseError) {
        console.error('Failed to parse response:', parseError);
        alert('Có lỗi xảy ra khi xử lý phản hồi từ server. Vui lòng thử lại.');
        setIsSubmitting(false);
        return;
      }
      
      if (response.ok && data.success && data.data) {
        // Save result data and hide form
        setResultData(data.data);
        setShowForm(false);
        setIsSubmitting(false);
        // Scroll to top to show results
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        console.error('Submit error:', data);
        alert(data.error || 'Có lỗi xảy ra khi xử lý yêu cầu. Vui lòng thử lại.');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Có lỗi xảy ra khi xử lý yêu cầu. Vui lòng thử lại.');
      setIsSubmitting(false);
    }
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

      <div className="relative z-10 max-w-7xl mx-auto py-12 px-6">
        {/* Header */}
        <div className="mb-8">
          <div className="clay-card clay-card-purple p-6 md:p-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {resultData ? 'Kết Quả Tư Vấn Ngành Học' : 'Bài Tư Vấn Chọn Ngành Học'}
                </h1>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  {resultData 
                    ? 'Dựa trên thông tin bạn cung cấp, hệ chuyên gia đã phân tích và gợi ý ngành phù hợp nhất.'
                    : 'Vui lòng trả lời các câu hỏi dưới đây để hệ chuyên gia phân tích và đưa ra gợi ý ngành học phù hợp nhất với bạn.'}
                </p>
              </div>
              <div className="flex gap-3">
                {resultData && (
                  <button
                    onClick={() => {
                      setResultData(null);
                      setShowForm(true);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="clay-button-secondary text-white px-6 py-3 rounded-full text-base font-semibold hover:scale-105 transition-transform"
                  >
                    Làm lại
                  </button>
                )}
                <a href="/tests" className="clay-button-secondary text-white px-6 py-3 rounded-full text-base font-semibold hover:scale-105 transition-transform">
                  ← Về danh sách test
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Results Display */}
        {resultData && (
          <div className="space-y-6 mb-8">
            {/* Form đăng ký để lưu thông tin */}
            <RegisterForm 
              submissionId={resultData.id}
              onSuccess={(userInfo) => {
                // Update resultData with user info
                setResultData({
                  ...resultData,
                  fullname: userInfo.fullname,
                  phone: userInfo.phone,
                  email: userInfo.email
                });
              }}
            />

            {/* Thông tin người tham gia (nếu đã đăng ký) */}
            {(resultData.fullname || resultData.phone || resultData.email) && (
              <div className="clay-card clay-card-blue rounded-xl p-4 mb-6">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Thông tin người tham gia</h4>
                <div className="text-xs md:text-sm text-gray-700 space-y-1">
                  {resultData.fullname && <div><strong>Họ tên:</strong> {resultData.fullname}</div>}
                  {resultData.phone && <div><strong>SĐT:</strong> {resultData.phone}</div>}
                  {resultData.email && <div><strong>Email:</strong> {resultData.email}</div>}
                </div>
              </div>
            )}

            {/* Kết quả từ bài tư vấn chính */}
            <div className="clay-card clay-card-purple rounded-2xl p-6 md:p-8 text-center">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-3">{resultData.major}</h2>
              <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                {resultData.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div className="clay-card clay-card-yellow rounded-xl p-4 md:p-6">
                <h3 className="text-base md:text-lg font-semibold mb-3 text-gray-800">Điểm mạnh nổi bật</h3>
                <ul className="list-disc ml-5 text-xs md:text-sm text-gray-700 space-y-1">
                  {resultData.strengths.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div className="clay-card clay-card-pink rounded-xl p-4 md:p-6">
                <h3 className="text-base md:text-lg font-semibold mb-3 text-gray-800">Các nghề nghiệp phù hợp</h3>
                <ul className="list-disc ml-5 text-xs md:text-sm text-gray-700 space-y-1">
                  {resultData.jobs.map((job, i) => (
                    <li key={i}>{job}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="clay-card clay-card-green rounded-xl p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold mb-3 text-gray-800">Một số ngành học liên quan</h3>
              <div className="flex flex-wrap gap-2">
                {resultData.related_majors.map((item, i) => (
                  <span key={i} className="px-3 py-1 bg-white/60 border border-white/80 rounded-lg text-xs md:text-sm text-gray-700">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="clay-card clay-card-blue rounded-xl p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold mb-3 text-gray-800">Gợi ý khối thi phù hợp</h3>
              {resultData.suggested_blocks && resultData.suggested_blocks.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {resultData.suggested_blocks.map((block, i) => (
                    <span key={i} className="px-3 py-1.5 bg-white/70 border border-white/90 rounded-full font-bold text-sm text-gray-800">
                      {block}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-sm text-gray-600">Không có gợi ý khối thi cụ thể.</p>
              )}
            </div>
          </div>
        )}

        {showForm && (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="clay-card clay-card-blue p-4 md:p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">1️⃣</span>
                <h2 className="text-base md:text-lg font-semibold text-gray-800">Bạn thích hoạt động nào nhất?</h2>
              </div>
              <select name="sothich" required defaultValue="" className="w-full p-2.5 bg-white/80 border border-white/60 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-blue-400 focus:bg-white transition">
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

            <div className="clay-card clay-card-pink p-4 md:p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">2️⃣</span>
                <h2 className="text-base md:text-lg font-semibold text-gray-800">Môn học nào bạn học tốt nhất? (Tối đa 3 môn)</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-3">
                {['toan', 'ly', 'hoa', 'van', 'anh', 'sinh', 'tinhoc', 'congnghe', 'lichsu', 'dialy', 'gdtc', 'mythuat', 'amnhac'].map(subject => {
                  const labels: Record<string, string> = {
                    toan: 'Toán', ly: 'Vật lý', hoa: 'Hóa học', van: 'Ngữ văn', anh: 'Tiếng Anh',
                    sinh: 'Sinh học', tinhoc: 'Tin học', congnghe: 'Công nghệ', lichsu: 'Lịch sử',
                    dialy: 'Địa lý', gdtc: 'Giáo dục thể chất', mythuat: 'Mỹ thuật', amnhac: 'Âm nhạc'
                  };
                  return (
                    <label key={subject} className="flex items-center p-2 bg-white/60 border border-white/80 rounded-lg hover:bg-white/80 cursor-pointer transition">
                      <input type="checkbox" name="monmanh" value={subject} className="mr-2 w-4 h-4 text-pink-600 accent-pink-600" />
                      <span className="text-gray-700 text-sm">{labels[subject]}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="clay-card clay-card-purple p-4 md:p-6 lg:col-span-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">3️⃣</span>
                <h2 className="text-base md:text-lg font-semibold text-gray-800">Tính cách nào mô tả bạn nhất? (Có thể chọn nhiều)</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-3">
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
                  <label key={trait.value} className="flex items-center p-2 bg-white/60 border border-white/80 rounded-lg hover:bg-white/80 cursor-pointer transition">
                    <input type="checkbox" name="tinhcach" value={trait.value} className="mr-2 w-4 h-4 text-purple-600 accent-purple-600" />
                    <span className="text-gray-700 text-xs">{trait.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="clay-card clay-card-yellow p-4 md:p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">4️⃣</span>
                <h2 className="text-base md:text-lg font-semibold text-gray-800">Mục tiêu nghề nghiệp của bạn là gì?</h2>
              </div>
              <select name="muctieu" required defaultValue="" className="w-full p-2.5 bg-white/80 border border-white/60 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-blue-400 focus:bg-white transition">
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

            <div className="clay-card clay-card-green p-4 md:p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">5️⃣</span>
                <h2 className="text-base md:text-lg font-semibold text-gray-800">Bạn muốn học trong nước hay du học?</h2>
              </div>
              <div className="space-y-3">
                <label className="flex items-start p-3 bg-white/60 border border-white/80 rounded-lg hover:bg-white/80 cursor-pointer transition">
                  <input type="radio" name="study_option" value="domestic" defaultChecked className="mt-1 mr-2 w-4 h-4 text-green-600 accent-green-600" />
                  <div>
                    <div className="font-semibold text-sm text-gray-800">🇻🇳 Học trong nước</div>
                    <div className="text-xs text-gray-600">Các trường đại học tại Việt Nam</div>
                  </div>
                </label>
                <label className="flex items-start p-3 bg-white/60 border border-white/80 rounded-lg hover:bg-white/80 cursor-pointer transition">
                  <input type="radio" name="study_option" value="abroad" className="mt-1 mr-2 w-4 h-4 text-green-600 accent-green-600" />
                  <div>
                    <div className="font-semibold text-sm text-gray-800">✈️ Du học</div>
                    <div className="text-xs text-gray-600">Học tập tại nước ngoài</div>
                  </div>
                </label>

                {/* Trong nước */}
                <div id="domestic-options">
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">Chọn trường đại học mong muốn:</label>
                  <select name="university_id" className="w-full p-2.5 bg-white/80 border border-white/60 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-blue-400 focus:bg-white transition">
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
                  <label className="block text-xs font-medium text-gray-700 mb-1.5">Chọn quốc gia muốn du học:</label>
                  <select name="study_abroad_country" className="w-full p-2.5 bg-white/80 border border-white/60 rounded-lg text-sm text-gray-800 focus:outline-none focus:border-blue-400 focus:bg-white transition">
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

            <div className="lg:col-span-2 text-center pt-2">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="clay-button px-6 md:px-8 py-2.5 md:py-3 text-white rounded-lg text-sm md:text-base font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Đang xử lý...' : '🚀 Xem kết quả tư vấn →'}
              </button>
            </div>
          </form>
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
              if (domesticRadio && domesticRadio.checked) {
                domesticOptions?.classList.remove('hidden');
                abroadOptions?.classList.add('hidden');
                const abroadSelect = document.querySelector('select[name="study_abroad_country"]');
                if (abroadSelect) abroadSelect.value = '';
              } else if (abroadRadio && abroadRadio.checked) {
                abroadOptions?.classList.remove('hidden');
                domesticOptions?.classList.add('hidden');
                const domesticSelect = document.querySelector('select[name="university_id"]');
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
