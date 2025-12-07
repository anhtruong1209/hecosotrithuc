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
              <a href="/tests" className="glass-button text-white px-4 py-2 rounded-xl text-sm">
                ← Về danh sách test
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

            <div className="glass-card p-6 md:p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">5️⃣</span>
                <h2 className="text-lg md:text-xl font-semibold text-blue-700">Bạn muốn học trong nước hay du học?</h2>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <label className="flex items-center p-4 glass border border-blue-200/50 rounded-xl hover:bg-blue-50/50 cursor-pointer transition flex-1">
                    <input type="radio" name="study_option" value="domestic" className="mr-3 w-5 h-5 text-blue-600 accent-blue-600" required />
                    <div>
                      <div className="font-semibold text-gray-700">🇻🇳 Học trong nước</div>
                      <div className="text-xs text-gray-600 mt-1">Các trường đại học tại Việt Nam</div>
                    </div>
                  </label>
                  <label className="flex items-center p-4 glass border border-blue-200/50 rounded-xl hover:bg-blue-50/50 cursor-pointer transition flex-1">
                    <input type="radio" name="study_option" value="abroad" className="mr-3 w-5 h-5 text-blue-600 accent-blue-600" required />
                    <div>
                      <div className="font-semibold text-gray-700">✈️ Du học</div>
                      <div className="text-xs text-gray-600 mt-1">Học tập tại nước ngoài</div>
                    </div>
                  </label>
                </div>
                
                {/* Trường đại học trong nước */}
                <div id="domestic-options" className="hidden">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Chọn trường đại học mong muốn:</label>
                  <select name="university_id" className="w-full p-3 glass border border-blue-200/50 rounded-xl bg-white/50 text-gray-800 focus:outline-none focus:border-blue-400 focus:bg-white transition">
                    <option value="">-- Chọn trường đại học --</option>
                    <optgroup label="Trường công lập - Hà Nội">
                      <option value="hust">Đại học Bách khoa Hà Nội (HUST)</option>
                      <option value="vnu">Đại học Quốc gia Hà Nội (VNU)</option>
                      <option value="neu">Đại học Kinh tế Quốc dân (NEU)</option>
                      <option value="ftu">Đại học Ngoại thương (FTU)</option>
                      <option value="hust-arch">Đại học Kiến trúc Hà Nội (HAU)</option>
                      <option value="hust-med">Đại học Y Hà Nội (HMU)</option>
                      <option value="hust-law">Đại học Luật Hà Nội (HUL)</option>
                      <option value="hust-edu">Đại học Sư phạm Hà Nội (HNUE)</option>
                      <option value="hust-arts">Đại học Mỹ thuật Việt Nam (VNUA)</option>
                      <option value="hanoi-university">Đại học Hà Nội (HANU)</option>
                      <option value="hanoi-open">Đại học Mở Hà Nội (HOU)</option>
                      <option value="hust-transport">Đại học Giao thông Vận tải (UTC)</option>
                      <option value="hust-water">Đại học Thủy lợi (TLU)</option>
                      <option value="hust-forestry">Đại học Lâm nghiệp (VNUF)</option>
                      <option value="hust-agriculture">Học viện Nông nghiệp Việt Nam (VNUA)</option>
                      <option value="hust-banking">Học viện Ngân hàng (BA)</option>
                      <option value="hust-finance">Học viện Tài chính (AOF)</option>
                      <option value="hust-diplomacy">Học viện Ngoại giao (DAV)</option>
                      <option value="hust-journalism">Học viện Báo chí và Tuyên truyền (AJC)</option>
                      <option value="hust-industry">Đại học Công nghiệp Hà Nội (HaUI)</option>
                      <option value="hust-ict">Học viện Công nghệ Bưu chính Viễn thông (PTIT)</option>
                      <option value="hust-military">Học viện Kỹ thuật Quân sự (MTA)</option>
                      <option value="hust-mining">Đại học Mỏ - Địa chất (HUMG)</option>
                      <option value="hust-environment">Đại học Tài nguyên và Môi trường Hà Nội (HUNRE)</option>
                      <option value="hust-culture">Đại học Văn hóa Hà Nội (HUC)</option>
                      <option value="hust-sports">Đại học Thể dục Thể thao (USSH)</option>
                      <option value="hust-foreign-trade">Đại học Ngoại thương (FTU)</option>
                      <option value="dai-hoc-viet-nhat">Đại học Việt Nhật (VJU)</option>
                      <option value="dai-hoc-hai-phong">Đại học Hải Phòng (HPU)</option>
                      <option value="dai-hoc-hung-yen">Đại học Sư phạm Kỹ thuật Hưng Yên (UTEHY)</option>
                      <option value="dai-hoc-vinh">Đại học Vinh (VINU)</option>
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
                    <optgroup label="Trường công lập - Miền Trung">
                      <option value="dut">Đại học Bách khoa Đà Nẵng (DUT)</option>
                      <option value="dai-hoc-kinh-te-danang">Đại học Kinh tế Đà Nẵng (DUE)</option>
                      <option value="hue">Đại học Huế (HUE)</option>
                      <option value="dai-hoc-nha-trang">Đại học Nha Trang (NTU)</option>
                      <option value="hust-fisheries">Đại học Thủy sản (NHA)</option>
                      <option value="dai-hoc-quy-nhon">Đại học Quy Nhơn (QNU)</option>
                      <option value="dai-hoc-lam-dong">Đại học Đà Lạt (DLU)</option>
                    </optgroup>
                    <optgroup label="Trường công lập - Miền Nam">
                      <option value="ctu">Đại học Cần Thơ (CTU)</option>
                      <option value="dai-hoc-an-giang">Đại học An Giang (AGU)</option>
                      <option value="dai-hoc-dong-thap">Đại học Đồng Tháp (DTHU)</option>
                      <option value="dai-hoc-tien-giang">Đại học Tiền Giang (TGU)</option>
                      <option value="dai-hoc-tra-vinh">Đại học Trà Vinh (TVU)</option>
                      <option value="dai-hoc-soc-trang">Đại học Sóc Trăng (STU)</option>
                      <option value="dai-hoc-bac-lieu">Đại học Bạc Liêu (BLU)</option>
                      <option value="dai-hoc-ca-mau">Đại học Cà Mau (CMU)</option>
                    </optgroup>
                    <optgroup label="Trường công lập - Miền Bắc">
                      <option value="dthu">Đại học Thái Nguyên (TNU)</option>
                      <option value="dai-hoc-tay-bac">Đại học Tây Bắc (QTU)</option>
                      <option value="dai-hoc-dien-bien">Đại học Điện Biên (DBU)</option>
                      <option value="dai-hoc-hung-vuong">Đại học Hùng Vương (HVU)</option>
                      <option value="dai-hoc-hai-duong">Đại học Hải Dương (HDU)</option>
                      <option value="dai-hoc-thai-binh">Đại học Thái Bình (TBU)</option>
                      <option value="dai-hoc-nam-dinh">Đại học Điều dưỡng Nam Định (NDU)</option>
                      <option value="dai-hoc-quang-binh">Đại học Quảng Bình (QBU)</option>
                      <option value="dai-hoc-quang-tri">Đại học Quảng Trị (QTU)</option>
                    </optgroup>
                    <optgroup label="Trường tư thục nổi tiếng">
                      <option value="fpt">Đại học FPT</option>
                      <option value="rmit">Đại học RMIT Việt Nam</option>
                      <option value="ton-duc-thang">Đại học Tôn Đức Thắng (TDTU)</option>
                      <option value="hutech">Đại học Công nghệ TP.HCM (HUTECH)</option>
                      <option value="greenwich">Đại học Greenwich Việt Nam</option>
                      <option value="dai-hoc-duy-tan">Đại học Duy Tân (DTU)</option>
                      <option value="dai-hoc-phenikaa">Đại học Phenikaa (PHENA)</option>
                      <option value="dai-hoc-van-lang">Đại học Văn Lang (VLU)</option>
                      <option value="dai-hoc-nguyen-tat-thanh">Đại học Nguyễn Tất Thành (NTTU)</option>
                      <option value="dai-hoc-viet-duc">Đại học Việt Đức (VGU)</option>
                      <option value="dai-hoc-binh-duong">Đại học Bình Dương (BDU)</option>
                      <option value="dai-hoc-lac-hong">Đại học Lạc Hồng (LHU)</option>
                      <option value="dai-hoc-dong-a">Đại học Đông Á (DAU)</option>
                      <option value="dai-hoc-dong-do">Đại học Đông Đô (DDU)</option>
                      <option value="dai-hoc-hong-bang">Đại học Hồng Bàng (HBU)</option>
                      <option value="dai-hoc-quoc-te-sai-gon">Đại học Quốc tế Sài Gòn (SIU)</option>
                      <option value="dai-hoc-tan-tao">Đại học Tân Tạo (TTU)</option>
                      <option value="dai-hoc-van-hien">Đại học Văn Hiến (VHU)</option>
                      <option value="dai-hoc-cong-nghe-sai-gon">Đại học Công nghệ Sài Gòn (STU)</option>
                      <option value="dai-hoc-nam-can-tho">Đại học Nam Cần Thơ (NCTU)</option>
                      <option value="dai-hoc-cu-long">Đại học Cửu Long (CLU)</option>
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

            // Handle study option selection
            const domesticOptions = document.getElementById('domestic-options');
            const abroadOptions = document.getElementById('abroad-options');
            const domesticRadio = document.querySelector('input[value="domestic"]');
            const abroadRadio = document.querySelector('input[value="abroad"]');

            function updateStudyOptions() {
              if (domesticRadio && domesticRadio.checked) {
                domesticOptions?.classList.remove('hidden');
                abroadOptions?.classList.add('hidden');
                const abroadSelect = document.querySelector('select[name="study_abroad_country"]') as HTMLSelectElement;
                if (abroadSelect) abroadSelect.value = '';
              } else if (abroadRadio && abroadRadio.checked) {
                domesticOptions?.classList.add('hidden');
                abroadOptions?.classList.remove('hidden');
                const domesticSelect = document.querySelector('select[name="university_id"]') as HTMLSelectElement;
                if (domesticSelect) domesticSelect.value = '';
              }
            }

            domesticRadio?.addEventListener('change', updateStudyOptions);
            abroadRadio?.addEventListener('change', updateStudyOptions);
          })();
        ` }} />
      </div>
    </div>
  );
}

