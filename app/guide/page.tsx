export default function GuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-pink-300/40 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-300/40 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto py-12 px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="glass-card rounded-2xl p-6 md:p-8 mb-6">
            <div className="inline-block mb-4">
              <span className="text-5xl md:text-6xl">📚</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold mb-4 text-blue-700">
              Hướng Dẫn Sử Dụng Hệ Thống
            </h1>
            <p className="text-sm md:text-base text-gray-700 max-w-2xl mx-auto">
              Tài liệu chi tiết về mô hình, logic và cách thức hoạt động của hệ thống tư vấn chọn ngành học
            </p>
          </div>
        </div>

        <div className="space-y-6">
          {/* 1. Tổng quan hệ thống */}
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">1. Tổng Quan Hệ Thống</h2>
            <div className="space-y-4 text-sm md:text-base text-gray-700">
              <p>
                <strong>Hệ Tư Vấn Chọn Ngành Học</strong> là một hệ thống chuyên gia được xây dựng dựa trên các mô hình tâm lý học và giáo dục hiện đại, 
                giúp học sinh, sinh viên tìm ra ngành học phù hợp nhất với tính cách, sở thích và năng lực của mình.
              </p>
              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <h3 className="font-semibold mb-2">Mục tiêu của hệ thống:</h3>
                <ul className="list-disc ml-5 space-y-1">
                  <li>Phân tích tính cách, sở thích và năng lực của người dùng</li>
                  <li>Đề xuất nhóm ngành học phù hợp dựa trên mô hình RIASEC</li>
                  <li>Gợi ý trường đại học phù hợp với ngành học được đề xuất</li>
                  <li>Quy nạp kết quả từ nhiều bài test để đánh giá chính xác nhất</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. Mô hình RIASEC */}
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">2. Mô Hình RIASEC</h2>
            <div className="space-y-4 text-sm md:text-base text-gray-700">
              <p>
                <strong>RIASEC</strong> (Realistic, Investigative, Artistic, Social, Enterprising, Conventional) là mô hình được phát triển bởi 
                nhà tâm lý học John L. Holland vào những năm 1950-1970. Mô hình này phân loại con người và nghề nghiệp thành 6 nhóm tính cách chính.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                  <h3 className="font-semibold text-orange-700 mb-2">🔧 R - Realistic (Thực tế)</h3>
                  <p className="text-xs">Người thích làm việc với máy móc, công cụ, thực hành. Phù hợp với các ngành kỹ thuật, cơ khí, điện tử.</p>
                </div>
                <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                  <h3 className="font-semibold text-blue-700 mb-2">🔬 I - Investigative (Nghiên cứu)</h3>
                  <p className="text-xs">Người thích phân tích, nghiên cứu, tìm hiểu. Phù hợp với các ngành khoa học, công nghệ, nghiên cứu.</p>
                </div>
                <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                  <h3 className="font-semibold text-purple-700 mb-2">🎨 A - Artistic (Nghệ thuật)</h3>
                  <p className="text-xs">Người có trí tưởng tượng phong phú, sáng tạo. Phù hợp với các ngành nghệ thuật, thiết kế, sáng tạo.</p>
                </div>
                <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                  <h3 className="font-semibold text-red-700 mb-2">❤️ S - Social (Xã hội)</h3>
                  <p className="text-xs">Người thích giúp đỡ, giao tiếp với người khác. Phù hợp với các ngành giáo dục, y tế, công tác xã hội.</p>
                </div>
                <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                  <h3 className="font-semibold text-green-700 mb-2">💼 E - Enterprising (Kinh doanh)</h3>
                  <p className="text-xs">Người có tố chất lãnh đạo, thuyết phục. Phù hợp với các ngành kinh doanh, quản lý, marketing.</p>
                </div>
                <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                  <h3 className="font-semibold text-yellow-700 mb-2">📊 C - Conventional (Truyền thống)</h3>
                  <p className="text-xs">Người tỉ mỉ, làm việc có tổ chức. Phù hợp với các ngành kế toán, hành chính, văn phòng.</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Các bài test trong hệ thống */}
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">3. Các Bài Test Trong Hệ Thống</h2>
            <div className="space-y-4 text-sm md:text-base text-gray-700">
              
              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <h3 className="font-semibold mb-2">🧠 Test RIASEC 20</h3>
                <p className="mb-2">Bài test chính của hệ thống, gồm 20 câu hỏi đánh giá 6 nhóm tính cách RIASEC.</p>
                <p className="text-xs text-gray-600">
                  <strong>Logic:</strong> Mỗi câu trả lời được gán điểm cho các nhóm RIASEC tương ứng. 
                  Kết quả là điểm số cho từng nhóm (R, I, A, S, E, C), nhóm có điểm cao nhất là nhóm tính cách chủ đạo.
                </p>
              </div>

              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <h3 className="font-semibold mb-2">🧠 Test MBTI (Myers-Briggs Type Indicator)</h3>
                <p className="mb-2">Đánh giá tính cách dựa trên 4 chiều: Hướng ngoại/Hướng nội, Cảm giác/Trực giác, Suy nghĩ/Cảm xúc, Đánh giá/Nhận thức.</p>
                <p className="text-xs text-gray-600">
                  <strong>Logic:</strong> Mỗi câu hỏi có điểm số cho các chiều khác nhau. 
                  Kết quả là một trong 16 loại tính cách MBTI (ví dụ: INTJ, ENFP, ISFP...).
                </p>
              </div>

              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <h3 className="font-semibold mb-2">❤️ Test Sở Thích Nghề Nghiệp</h3>
                <p className="mb-2">Đánh giá sở thích và hứng thú của người dùng với các lĩnh vực nghề nghiệp khác nhau.</p>
                <p className="text-xs text-gray-600">
                  <strong>Logic:</strong> Câu hỏi được phân loại theo 6 nhóm RIASEC. 
                  Tính tổng điểm cho mỗi nhóm, nhóm có điểm cao nhất là sở thích nghề nghiệp chủ đạo.
                </p>
              </div>

              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <h3 className="font-semibold mb-2">📚 Test Năng Lực Học Tập</h3>
                <p className="mb-2">Đánh giá năng lực và điểm mạnh trong các môn học khác nhau.</p>
                <p className="text-xs text-gray-600">
                  <strong>Logic:</strong> Câu hỏi được phân loại theo các môn học (Toán, Lý, Hóa, Văn, Anh...). 
                  Tính điểm cho từng môn, xác định các môn học mạnh nhất và đề xuất khối thi phù hợp.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Logic quy nạp và đánh giá */}
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">4. Logic Quy Nạp Và Đánh Giá</h2>
            <div className="space-y-4 text-sm md:text-base text-gray-700">
              <p>
                Hệ thống sử dụng phương pháp <strong>quy nạp</strong> để tổng hợp kết quả từ tất cả các bài test, 
                đảm bảo đánh giá chính xác và toàn diện nhất.
              </p>

              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <h3 className="font-semibold mb-2">Bước 1: Thu thập dữ liệu</h3>
                <ul className="list-disc ml-5 space-y-1 text-xs">
                  <li>Thu thập kết quả từ bài test RIASEC (điểm số R, I, A, S, E, C)</li>
                  <li>Thu thập kết quả từ bài test MBTI (loại tính cách)</li>
                  <li>Thu thập kết quả từ bài test Sở thích (top interests)</li>
                  <li>Thu thập kết quả từ bài test Năng lực (điểm mạnh các môn học)</li>
                </ul>
              </div>

              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <h3 className="font-semibold mb-2">Bước 2: Quy nạp dữ liệu</h3>
                <ul className="list-disc ml-5 space-y-1 text-xs">
                  <li>Tổng hợp điểm số RIASEC từ tất cả các test</li>
                  <li>Điều chỉnh điểm số dựa trên kết quả MBTI (ví dụ: INTJ tăng điểm cho nhóm I)</li>
                  <li>Kết hợp với sở thích nghề nghiệp để xác nhận nhóm RIASEC chủ đạo</li>
                  <li>Xem xét năng lực học tập để đề xuất khối thi phù hợp</li>
                </ul>
              </div>

              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <h3 className="font-semibold mb-2">Bước 3: Đề xuất nhóm ngành</h3>
                <ul className="list-disc ml-5 space-y-1 text-xs">
                  <li>Sắp xếp các nhóm RIASEC theo điểm số từ cao xuống thấp</li>
                  <li>Chọn top 3 nhóm có điểm cao nhất</li>
                  <li>Tính độ phù hợp (confidence) dựa trên tỷ lệ điểm số</li>
                  <li>Đề xuất các ngành học, nghề nghiệp và khối thi tương ứng</li>
                </ul>
              </div>

              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <h3 className="font-semibold mb-2">Bước 4: Đề xuất trường đại học</h3>
                <ul className="list-disc ml-5 space-y-1 text-xs">
                  <li>Dựa trên nhóm ngành được đề xuất, tìm các trường có ngành học phù hợp</li>
                  <li>Tính điểm phù hợp dựa trên số lượng ngành học khớp</li>
                  <li>Ưu tiên trường công lập và trường có uy tín</li>
                  <li>Hiển thị top 5-10 trường phù hợp nhất</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 5. Hệ thống chuyên gia */}
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">5. Hệ Thống Chuyên Gia (Expert System)</h2>
            <div className="space-y-4 text-sm md:text-base text-gray-700">
              <p>
                Hệ thống sử dụng <strong>Expert System</strong> - một hệ thống dựa trên tri thức để đưa ra các gợi ý thông minh.
              </p>

              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <h3 className="font-semibold mb-2">Cấu trúc Expert System:</h3>
                <ul className="list-disc ml-5 space-y-1 text-xs">
                  <li><strong>Knowledge Base (Cơ sở tri thức):</strong> Chứa các quy tắc và thông tin về ngành học, nghề nghiệp</li>
                  <li><strong>Inference Engine (Bộ suy luận):</strong> Áp dụng các quy tắc để đưa ra kết luận</li>
                  <li><strong>Working Memory (Bộ nhớ làm việc):</strong> Lưu trữ dữ liệu đầu vào và kết quả trung gian</li>
                </ul>
              </div>

              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <h3 className="font-semibold mb-2">Quy tắc suy luận:</h3>
                <div className="text-xs space-y-2">
                  <p><strong>IF</strong> điểm R cao nhất <strong>THEN</strong> đề xuất nhóm "Kỹ thuật – Cơ khí – Điện tử"</p>
                  <p><strong>IF</strong> điểm I cao nhất <strong>THEN</strong> đề xuất nhóm "Khoa học – Công nghệ – Nghiên cứu"</p>
                  <p><strong>IF</strong> điểm A cao nhất <strong>THEN</strong> đề xuất nhóm "Nghệ thuật – Thiết kế – Sáng tạo"</p>
                  <p><strong>IF</strong> điểm S cao nhất <strong>THEN</strong> đề xuất nhóm "Giáo dục – Y tế – Công tác xã hội"</p>
                  <p><strong>IF</strong> điểm E cao nhất <strong>THEN</strong> đề xuất nhóm "Kinh doanh – Quản lý – Lãnh đạo"</p>
                  <p><strong>IF</strong> điểm C cao nhất <strong>THEN</strong> đề xuất nhóm "Kế toán – Hành chính – Văn phòng"</p>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Kiến trúc hệ thống */}
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">6. Kiến Trúc Hệ Thống</h2>
            <div className="space-y-4 text-sm md:text-base text-gray-700">
              
              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <h3 className="font-semibold mb-2">Frontend (Giao diện người dùng):</h3>
                <ul className="list-disc ml-5 space-y-1 text-xs">
                  <li><strong>Framework:</strong> Next.js 16 (React)</li>
                  <li><strong>Styling:</strong> Tailwind CSS với Glassmorphism design</li>
                  <li><strong>Components:</strong> Server Components và Client Components</li>
                  <li><strong>Pages:</strong> Trang chủ, Bài tư vấn, Chọn test, Ngành học, Kết quả, Admin</li>
                </ul>
              </div>

              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <h3 className="font-semibold mb-2">Backend (Xử lý logic):</h3>
                <ul className="list-disc ml-5 space-y-1 text-xs">
                  <li><strong>API Routes:</strong> Next.js API Routes cho xử lý form, lưu kết quả</li>
                  <li><strong>Database:</strong> JSON file (db.json) để lưu trữ dữ liệu</li>
                  <li><strong>Authentication:</strong> Cookie-based authentication cho admin</li>
                  <li><strong>Business Logic:</strong> Các module tính toán RIASEC, MBTI, Interest, Aptitude</li>
                </ul>
              </div>

              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <h3 className="font-semibold mb-2">Các module chính:</h3>
                <ul className="list-disc ml-5 space-y-1 text-xs">
                  <li><strong>lib/riasec.ts:</strong> Logic tính toán điểm RIASEC và hệ thống chuyên gia</li>
                  <li><strong>lib/mbti.ts:</strong> Logic tính toán và phân loại MBTI</li>
                  <li><strong>lib/interest.ts:</strong> Logic đánh giá sở thích nghề nghiệp</li>
                  <li><strong>lib/aptitude.ts:</strong> Logic đánh giá năng lực học tập</li>
                  <li><strong>lib/recommendation.ts:</strong> Logic quy nạp và đề xuất</li>
                  <li><strong>lib/db.ts:</strong> Quản lý database (CRUD operations)</li>
                  <li><strong>lib/universities.ts:</strong> Danh sách trường đại học và quốc gia du học</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 7. Luồng xử lý dữ liệu */}
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">7. Luồng Xử Lý Dữ Liệu</h2>
            <div className="space-y-4 text-sm md:text-base text-gray-700">
              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <h3 className="font-semibold mb-3">Quy trình từ đầu đến cuối:</h3>
                <ol className="list-decimal ml-5 space-y-2 text-xs">
                  <li><strong>Người dùng điền form:</strong> Trả lời các câu hỏi về sở thích, môn học mạnh, tính cách, mục tiêu</li>
                  <li><strong>Gửi dữ liệu:</strong> Form được submit đến API route /api/submit</li>
                  <li><strong>Tính toán RIASEC:</strong> Hàm calculateRIASECScores() tính điểm cho 6 nhóm</li>
                  <li><strong>Hệ thống chuyên gia:</strong> Hàm expertSystem() áp dụng quy tắc để đề xuất ngành học</li>
                  <li><strong>Đề xuất khối thi:</strong> Hàm suggestExamBlocks() gợi ý khối thi phù hợp</li>
                  <li><strong>Lưu kết quả:</strong> Dữ liệu được lưu vào db.json</li>
                  <li><strong>Quy nạp (nếu có nhiều test):</strong> Tổng hợp kết quả từ tất cả các bài test</li>
                  <li><strong>Đề xuất ngành và trường:</strong> Hiển thị kết quả với đề xuất chi tiết</li>
                </ol>
              </div>
            </div>
          </div>

          {/* 8. Công nghệ sử dụng */}
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">8. Công Nghệ Sử Dụng</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <h3 className="font-semibold mb-2 text-sm">Frontend Technologies:</h3>
                <ul className="list-disc ml-5 space-y-1 text-xs">
                  <li>Next.js 16</li>
                  <li>React 18</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <h3 className="font-semibold mb-2 text-sm">Backend Technologies:</h3>
                <ul className="list-disc ml-5 space-y-1 text-xs">
                  <li>Next.js API Routes</li>
                  <li>Node.js</li>
                  <li>bcryptjs (authentication)</li>
                  <li>JSON file storage</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 9. Hướng dẫn sử dụng chi tiết */}
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">9. Hướng Dẫn Sử Dụng Chi Tiết</h2>
            <div className="space-y-4 text-sm md:text-base text-gray-700">
              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <h3 className="font-semibold mb-3 text-base">📋 Bước 1: Làm bài tư vấn chọn ngành học</h3>
                <ol className="list-decimal ml-5 space-y-2 text-xs">
                  <li>Truy cập trang <strong>"Bài Tư Vấn Chọn Ngành Học"</strong></li>
                  <li>Trả lời các câu hỏi về:
                    <ul className="list-disc ml-5 mt-1">
                      <li><strong>Sở thích:</strong> Lĩnh vực bạn yêu thích (kỹ thuật, sáng tạo, công nghệ...)</li>
                      <li><strong>Môn học mạnh:</strong> Các môn bạn học tốt (Toán, Lý, Hóa, Văn, Anh...)</li>
                      <li><strong>Tính cách:</strong> Đặc điểm tính cách của bạn (tỉ mỉ, sáng tạo, giao tiếp...)</li>
                      <li><strong>Mục tiêu:</strong> Mục tiêu nghề nghiệp của bạn</li>
                    </ul>
                  </li>
                  <li>Chọn <strong>mong muốn học tập:</strong> Trong nước hoặc du học</li>
                  <li>Nếu chọn trong nước, có thể chọn trường đại học ưu tiên</li>
                  <li>Nếu chọn du học, chọn quốc gia mong muốn</li>
                  <li>Nhấn <strong>"Gửi yêu cầu tư vấn"</strong> để xem kết quả</li>
                </ol>
              </div>

              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <h3 className="font-semibold mb-3 text-base">🧪 Bước 2: Làm các bài test bổ sung (Tùy chọn)</h3>
                <p className="text-xs mb-2">Để có kết quả chính xác hơn, bạn nên làm thêm các bài test sau:</p>
                <ul className="list-disc ml-5 space-y-1 text-xs">
                  <li><strong>Test MBTI:</strong> Đánh giá tính cách theo 16 loại MBTI</li>
                  <li><strong>Test Sở Thích Nghề Nghiệp:</strong> Đánh giá sở thích với các lĩnh vực nghề nghiệp</li>
                  <li><strong>Test Năng Lực Học Tập:</strong> Đánh giá điểm mạnh trong các môn học</li>
                  <li><strong>Test RIASEC 20:</strong> Bài test chi tiết về 6 nhóm tính cách RIASEC</li>
                </ul>
                <p className="text-xs mt-2 text-blue-600">
                  💡 <strong>Lưu ý:</strong> Càng làm nhiều test, kết quả quy nạp càng chính xác!
                </p>
              </div>

              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <h3 className="font-semibold mb-3 text-base">📊 Bước 3: Xem kết quả tư vấn</h3>
                <p className="text-xs mb-2">Sau khi hoàn thành bài tư vấn và các test, bạn sẽ nhận được:</p>
                <ul className="list-disc ml-5 space-y-1 text-xs">
                  <li><strong>Đề xuất nhóm ngành học:</strong> Top 3 nhóm ngành phù hợp với độ phù hợp (%)</li>
                  <li><strong>Chi tiết từng nhóm:</strong> Ngành học, nghề nghiệp, khối thi tương ứng</li>
                  <li><strong>Đề xuất trường đại học:</strong> Danh sách trường phù hợp với điểm phù hợp</li>
                  <li><strong>Thông tin trường:</strong> Loại trường, địa điểm, số ngành phù hợp</li>
                </ul>
              </div>

              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <h3 className="font-semibold mb-3 text-base">💾 Bước 4: Lưu kết quả (Tùy chọn)</h3>
                <p className="text-xs mb-2">
                  Bạn có thể <strong>xem và xuất kết quả miễn phí</strong> mà không cần đăng ký. 
                  Nếu muốn lưu kết quả để trường học liên hệ hỗ trợ, bạn có thể điền thông tin (không bắt buộc):
                </p>
                <ul className="list-disc ml-5 space-y-1 text-xs">
                  <li>Họ và tên</li>
                  <li>Số điện thoại</li>
                  <li>Email</li>
                </ul>
                <p className="text-xs mt-2 text-green-600">
                  ✅ <strong>Lợi ích:</strong> Trường học có thể xem kết quả và liên hệ tư vấn chi tiết cho bạn
                </p>
              </div>
            </div>
          </div>

          {/* 10. Bảo mật và Quyền riêng tư */}
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">10. Bảo Mật Và Quyền Riêng Tư</h2>
            <div className="space-y-4 text-sm md:text-base text-gray-700">
              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <h3 className="font-semibold mb-2">🔒 Chính sách bảo mật:</h3>
                <ul className="list-disc ml-5 space-y-1 text-xs">
                  <li><strong>Xem kết quả miễn phí:</strong> Bạn có thể xem và xuất kết quả mà không cần cung cấp thông tin cá nhân</li>
                  <li><strong>Thông tin tùy chọn:</strong> Việc cung cấp thông tin (họ tên, SĐT, email) là hoàn toàn tùy chọn</li>
                  <li><strong>Kiểm soát truy cập:</strong> Hệ thống có thể kiểm soát lượt truy cập bằng IP để tránh spam</li>
                  <li><strong>Dữ liệu an toàn:</strong> Thông tin được lưu trữ an toàn và chỉ được sử dụng cho mục đích tư vấn</li>
                  <li><strong>Quyền truy cập:</strong> Chỉ admin và trường học được phép xem kết quả để hỗ trợ tư vấn</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 11. Hướng phát triển */}
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">11. Hướng Phát Triển</h2>
            <div className="space-y-4 text-sm md:text-base text-gray-700">
              <p>
                Hệ thống được thiết kế với khả năng mở rộng cao, phù hợp để xây dựng cụ thể cho từng đơn vị trường học 
                hoặc tổ chức tư vấn hướng nghiệp.
              </p>

              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <h3 className="font-semibold mb-3 text-base">🏫 Tùy chỉnh cho trường học/tổ chức:</h3>
                <ul className="list-disc ml-5 space-y-2 text-xs">
                  <li><strong>Branding tùy chỉnh:</strong> Logo, màu sắc, tên hệ thống theo từng trường/tổ chức</li>
                  <li><strong>Danh sách trường riêng:</strong> Chỉ hiển thị các trường trong khu vực hoặc hệ thống của tổ chức</li>
                  <li><strong>Quy trình tư vấn:</strong> Tích hợp với quy trình tuyển sinh và tư vấn của trường</li>
                  <li><strong>Báo cáo và thống kê:</strong> Dashboard quản trị với thống kê chi tiết về học sinh</li>
                  <li><strong>Tích hợp hệ thống:</strong> Kết nối với hệ thống quản lý học sinh (SIS) hiện có</li>
                </ul>
              </div>

              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <h3 className="font-semibold mb-3 text-base">📈 Tính năng nâng cao:</h3>
                <ul className="list-disc ml-5 space-y-2 text-xs">
                  <li><strong>Machine Learning:</strong> Cải thiện độ chính xác đề xuất bằng AI/ML</li>
                  <li><strong>Phân tích xu hướng:</strong> Thống kê xu hướng chọn ngành theo khu vực, thời gian</li>
                  <li><strong>So sánh kết quả:</strong> So sánh kết quả của học sinh với dữ liệu lịch sử</li>
                  <li><strong>Xuất báo cáo PDF:</strong> Tự động tạo báo cáo chi tiết dạng PDF</li>
                  <li><strong>API tích hợp:</strong> Cung cấp API để tích hợp với hệ thống khác</li>
                  <li><strong>Multi-language:</strong> Hỗ trợ đa ngôn ngữ cho các trường quốc tế</li>
                </ul>
              </div>

              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <h3 className="font-semibold mb-3 text-base">🔧 Công nghệ mở rộng:</h3>
                <ul className="list-disc ml-5 space-y-2 text-xs">
                  <li><strong>Database nâng cao:</strong> Chuyển từ JSON sang PostgreSQL/MySQL cho dữ liệu lớn</li>
                  <li><strong>Authentication:</strong> Hệ thống đăng nhập cho học sinh, giáo viên, admin</li>
                  <li><strong>Real-time:</strong> Cập nhật kết quả real-time với WebSocket</li>
                  <li><strong>Mobile App:</strong> Ứng dụng di động cho iOS và Android</li>
                  <li><strong>Cloud Deployment:</strong> Triển khai trên cloud (AWS, Azure, GCP) với auto-scaling</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border border-blue-200/50">
                <h3 className="font-semibold mb-2 text-base text-blue-800">💼 Dịch vụ triển khai:</h3>
                <p className="text-xs text-gray-700 mb-2">
                  Chúng tôi cung cấp dịch vụ tùy chỉnh và triển khai hệ thống cho các trường học và tổ chức tư vấn:
                </p>
                <ul className="list-disc ml-5 space-y-1 text-xs text-gray-700">
                  <li>Tư vấn và thiết kế hệ thống theo nhu cầu</li>
                  <li>Phát triển và tùy chỉnh tính năng</li>
                  <li>Đào tạo và hỗ trợ kỹ thuật</li>
                  <li>Bảo trì và cập nhật định kỳ</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 12. Kết luận */}
          <div className="glass-card rounded-2xl p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-4">12. Kết Luận</h2>
            <div className="space-y-4 text-sm md:text-base text-gray-700">
              <p>
                Hệ thống tư vấn chọn ngành học được xây dựng dựa trên các mô hình tâm lý học đã được kiểm chứng, 
                kết hợp với công nghệ hiện đại để tạo ra một công cụ hỗ trợ hữu ích cho học sinh, sinh viên trong việc 
                lựa chọn ngành học phù hợp.
              </p>
              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-4 border border-white/40">
                <h3 className="font-semibold mb-2">Ưu điểm của hệ thống:</h3>
                <ul className="list-disc ml-5 space-y-1 text-xs">
                  <li>✅ Đánh giá toàn diện dựa trên nhiều yếu tố (tính cách, sở thích, năng lực)</li>
                  <li>✅ Quy nạp kết quả từ nhiều bài test để tăng độ chính xác</li>
                  <li>✅ Đề xuất cụ thể về ngành học và trường đại học</li>
                  <li>✅ Giao diện hiện đại, dễ sử dụng với Glassmorphism design</li>
                  <li>✅ Hệ thống mở, dễ mở rộng và tùy chỉnh cho từng tổ chức</li>
                  <li>✅ Miễn phí xem và xuất kết quả, thông tin đăng ký tùy chọn</li>
                  <li>✅ Bảo mật và quyền riêng tư được đảm bảo</li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200/50">
                <p className="text-xs text-gray-700">
                  <strong>📞 Liên hệ:</strong> Để biết thêm thông tin về dịch vụ tùy chỉnh và triển khai hệ thống cho trường học/tổ chức của bạn, 
                  vui lòng liên hệ với chúng tôi.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <a href="/" className="glass-button text-white px-6 py-3 rounded-xl text-sm md:text-base font-medium inline-block">
              ← Về trang chủ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


