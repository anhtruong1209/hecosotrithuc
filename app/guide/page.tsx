'use client';

export default function GuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 via-blue-200 to-yellow-200 text-gray-800 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-pink-300/40 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-300/40 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-300/40 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-300/40 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '0.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-12 px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="clay-card clay-card-purple p-8 md:p-12 mb-8">
            <div className="text-6xl md:text-8xl mb-6 animate-bounce">📚</div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hướng Dẫn Sử Dụng Hệ Thống
            </h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Tài liệu chi tiết về mô hình, logic và cách thức hoạt động của hệ thống tư vấn chọn ngành học
            </p>
          </div>
        </div>

        <div className="space-y-8">
          {/* 1. Tổng quan hệ thống */}
          <div className="clay-card clay-card-blue p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              1. Tổng Quan Hệ Thống
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-blue-700">Hệ Tư Vấn Chọn Ngành Học</strong> là một hệ thống chuyên gia được xây dựng dựa trên các mô hình tâm lý học và giáo dục hiện đại, 
                giúp học sinh, sinh viên tìm ra ngành học phù hợp nhất với tính cách, sở thích và năng lực của mình.
              </p>
              <div className="clay-card clay-card-yellow p-5 mt-4">
                <h3 className="font-bold text-lg mb-3 text-gray-800">Mục tiêu của hệ thống:</h3>
                <ul className="list-disc ml-6 space-y-2 text-base">
                  <li>Phân tích tính cách, sở thích và năng lực của người dùng một cách toàn diện</li>
                  <li>Đề xuất nhóm ngành học phù hợp dựa trên mô hình RIASEC đã được kiểm chứng</li>
                  <li>Gợi ý trường đại học phù hợp với ngành học được đề xuất</li>
                  <li>Quy nạp kết quả từ nhiều bài test để đánh giá chính xác nhất</li>
                  <li>Hỗ trợ học sinh đưa ra quyết định chọn ngành học đúng đắn</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. Mô hình RIASEC */}
          <div className="clay-card clay-card-pink p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              2. Mô Hình RIASEC
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                <strong className="text-pink-700">RIASEC</strong> (Realistic, Investigative, Artistic, Social, Enterprising, Conventional) là mô hình được phát triển bởi 
                nhà tâm lý học <strong>John L. Holland</strong> vào những năm 1950-1970. Mô hình này phân loại con người và nghề nghiệp thành 6 nhóm tính cách chính, 
                đã được sử dụng rộng rãi trên toàn thế giới trong hơn 50 năm qua.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                <div className="clay-card clay-card-yellow p-5">
                  <h3 className="font-bold text-lg text-orange-700 mb-2">
                    R - Realistic (Thực tế)
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Người thích làm việc với máy móc, công cụ, thực hành. Phù hợp với các ngành kỹ thuật, cơ khí, điện tử, xây dựng, nông nghiệp.
                  </p>
                  <div className="mt-3 text-xs text-gray-600">
                    <strong>Ví dụ nghề:</strong> Kỹ sư, thợ điện, kiến trúc sư, nông dân
                  </div>
                </div>
                <div className="clay-card clay-card-blue p-5">
                  <h3 className="font-bold text-lg text-blue-700 mb-2">
                    I - Investigative (Nghiên cứu)
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Người thích phân tích, nghiên cứu, tìm hiểu. Phù hợp với các ngành khoa học, công nghệ, nghiên cứu, y học.
                  </p>
                  <div className="mt-3 text-xs text-gray-600">
                    <strong>Ví dụ nghề:</strong> Nhà khoa học, bác sĩ, lập trình viên, nhà toán học
                  </div>
                </div>
                <div className="clay-card clay-card-purple p-5">
                  <h3 className="font-bold text-lg text-purple-700 mb-2">
                    A - Artistic (Nghệ thuật)
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Người có trí tưởng tượng phong phú, sáng tạo. Phù hợp với các ngành nghệ thuật, thiết kế, sáng tạo, văn học.
                  </p>
                  <div className="mt-3 text-xs text-gray-600">
                    <strong>Ví dụ nghề:</strong> Nghệ sĩ, nhà thiết kế, nhà văn, nhạc sĩ
                  </div>
                </div>
                <div className="clay-card clay-card-pink p-5">
                  <h3 className="font-bold text-lg text-red-700 mb-2">
                    S - Social (Xã hội)
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Người thích giúp đỡ, giao tiếp với người khác. Phù hợp với các ngành giáo dục, y tế, công tác xã hội, tâm lý.
                  </p>
                  <div className="mt-3 text-xs text-gray-600">
                    <strong>Ví dụ nghề:</strong> Giáo viên, y tá, tâm lý học, nhân viên xã hội
                  </div>
                </div>
                <div className="clay-card clay-card-green p-5">
                  <h3 className="font-bold text-lg text-green-700 mb-2">
                    E - Enterprising (Kinh doanh)
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Người có tố chất lãnh đạo, thuyết phục. Phù hợp với các ngành kinh doanh, quản lý, marketing, luật.
                  </p>
                  <div className="mt-3 text-xs text-gray-600">
                    <strong>Ví dụ nghề:</strong> Doanh nhân, quản lý, luật sư, nhân viên bán hàng
                  </div>
                </div>
                <div className="clay-card clay-card-yellow p-5">
                  <h3 className="font-bold text-lg text-yellow-700 mb-2">
                    C - Conventional (Truyền thống)
                  </h3>
                  <p className="text-sm leading-relaxed">
                    Người tỉ mỉ, làm việc có tổ chức. Phù hợp với các ngành kế toán, hành chính, văn phòng, thống kê.
                  </p>
                  <div className="mt-3 text-xs text-gray-600">
                    <strong>Ví dụ nghề:</strong> Kế toán, thư ký, kiểm toán viên, nhân viên văn phòng
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Các bài test trong hệ thống */}
          <div className="clay-card clay-card-blue p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              3. Các Bài Test Trong Hệ Thống
            </h2>
            <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
              
              <div className="clay-card clay-card-purple p-5">
                <h3 className="font-bold text-xl mb-3 text-gray-800">
                  Bài Tư Vấn Chọn Ngành Học (RIASEC Full)
                </h3>
                <p className="mb-3 text-base">
                  Bài test chính của hệ thống, gồm các câu hỏi về sở thích, môn học mạnh, tính cách và mục tiêu nghề nghiệp.
                </p>
                <div className="clay-card clay-card-yellow p-4 mt-3">
                  <p className="text-sm font-semibold mb-2">📊 Logic tính toán:</p>
                  <ul className="list-disc ml-5 space-y-1 text-sm">
                    <li>Thu thập thông tin về sở thích, môn học mạnh, tính cách</li>
                    <li>Tính điểm cho 6 nhóm RIASEC dựa trên câu trả lời</li>
                    <li>Áp dụng hệ thống chuyên gia để đề xuất nhóm ngành</li>
                    <li>Đề xuất khối thi và trường đại học phù hợp</li>
                  </ul>
                </div>
              </div>

              <div className="clay-card clay-card-pink p-5">
                <h3 className="font-bold text-xl mb-3 text-gray-800">
                  RIASEC 20 Câu
                </h3>
                <p className="mb-3 text-base">
                  Bài test nhanh với 20 câu hỏi đánh giá 6 nhóm tính cách RIASEC một cách trực tiếp.
                </p>
                <div className="clay-card clay-card-yellow p-4 mt-3">
                  <p className="text-sm font-semibold mb-2">Logic tính toán:</p>
                  <ul className="list-disc ml-5 space-y-1 text-sm">
                    <li>Mỗi câu trả lời được gán điểm cho các nhóm RIASEC tương ứng (0-3 điểm tùy mức độ đồng ý)</li>
                    <li>Tính tổng điểm cho từng nhóm (R, I, A, S, E, C)</li>
                    <li>Nhóm có điểm cao nhất là nhóm tính cách chủ đạo</li>
                    <li>Hiển thị top 3 nhóm có điểm cao nhất với thanh progress bar</li>
                  </ul>
                </div>
                <div className="clay-card clay-card-green p-4 mt-3">
                  <p className="text-sm font-semibold mb-2">Tính năng đặc biệt:</p>
                  <ul className="list-disc ml-5 space-y-1 text-sm">
                    <li><strong>Tự động tạo submission:</strong> Sau khi hoàn thành test, bạn có thể nhập thông tin ngay tại trang kết quả</li>
                    <li><strong>Tự động redirect:</strong> Sau khi nhập thông tin và submit, hệ thống tự động tạo submission và chuyển đến trang kết quả tư vấn chi tiết</li>
                    <li><strong>Quy nạp tự động:</strong> Nếu bạn đã làm các test khác với cùng email, hệ thống sẽ tự động quy nạp tất cả kết quả</li>
                    <li><strong>Lưu kết quả test:</strong> Bạn có thể lưu kết quả test riêng (tùy chọn) hoặc tạo submission đầy đủ để nhận tư vấn</li>
                  </ul>
                </div>
              </div>

              <div className="clay-card clay-card-purple p-5">
                <h3 className="font-bold text-xl mb-3 text-gray-800">
                  Test MBTI (Myers-Briggs Type Indicator)
                </h3>
                <p className="mb-3 text-base">
                  Đánh giá tính cách dựa trên 4 chiều: Hướng ngoại/Hướng nội (E/I), Cảm giác/Trực giác (S/N), 
                  Suy nghĩ/Cảm xúc (T/F), Đánh giá/Nhận thức (J/P). Kết quả là một trong 16 loại tính cách MBTI.
                </p>
                <div className="clay-card clay-card-yellow p-4 mt-3">
                  <p className="text-sm font-semibold mb-2">Logic tính toán:</p>
                  <ul className="list-disc ml-5 space-y-1 text-sm">
                    <li>Mỗi câu hỏi có điểm số cho các chiều khác nhau (E/I, S/N, T/F, J/P)</li>
                    <li>Tính tổng điểm cho mỗi chiều</li>
                    <li>Xác định loại tính cách dựa trên chiều có điểm cao hơn</li>
                    <li>Kết quả là một trong 16 loại: INTJ, ENFP, ISFP, ESTJ, v.v.</li>
                  </ul>
                </div>
              </div>

              <div className="clay-card clay-card-pink p-5">
                <h3 className="font-bold text-xl mb-3 text-gray-800">
                  Test Sở Thích Nghề Nghiệp
                </h3>
                <p className="mb-3 text-base">
                  Đánh giá sở thích và hứng thú của người dùng với các lĩnh vực nghề nghiệp khác nhau dựa trên mô hình RIASEC.
                </p>
                <div className="clay-card clay-card-yellow p-4 mt-3">
                  <p className="text-sm font-semibold mb-2">Logic tính toán:</p>
                  <ul className="list-disc ml-5 space-y-1 text-sm">
                    <li>Câu hỏi được phân loại theo 6 nhóm RIASEC</li>
                    <li>Tính tổng điểm cho mỗi nhóm dựa trên câu trả lời</li>
                    <li>Nhóm có điểm cao nhất là sở thích nghề nghiệp chủ đạo</li>
                    <li>Đề xuất nghề nghiệp và ngành học phù hợp với sở thích</li>
                  </ul>
                </div>
              </div>

              <div className="clay-card clay-card-blue p-5">
                <h3 className="font-bold text-xl mb-3 text-gray-800">
                  Test Năng Lực Học Tập
                </h3>
                <p className="mb-3 text-base">
                  Đánh giá năng lực và điểm mạnh trong các môn học khác nhau (Toán, Lý, Hóa, Văn, Anh, Sử, Địa, Tin, Mỹ thuật).
                </p>
                <div className="clay-card clay-card-yellow p-4 mt-3">
                  <p className="text-sm font-semibold mb-2">Logic tính toán:</p>
                  <ul className="list-disc ml-5 space-y-1 text-sm">
                    <li>Câu hỏi được phân loại theo các môn học</li>
                    <li>Tính điểm cho từng môn dựa trên câu trả lời</li>
                    <li>Xác định các môn học mạnh nhất (top 3)</li>
                    <li>Đề xuất khối thi phù hợp (A00, B00, C00, D01, v.v.)</li>
                    <li>Gợi ý ngành học phù hợp với năng lực</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Logic quy nạp và đánh giá */}
          <div className="clay-card clay-card-green p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              4. Logic Quy Nạp Và Đánh Giá
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                Hệ thống sử dụng phương pháp <strong className="text-green-700">quy nạp</strong> để tổng hợp kết quả từ tất cả các bài test, 
                đảm bảo đánh giá chính xác và toàn diện nhất. Quy trình quy nạp gồm 4 bước chính:
              </p>

              <div className="clay-card clay-card-blue p-5">
                <h3 className="font-bold text-lg mb-3 text-gray-800">
                  Bước 1: Thu thập dữ liệu
                </h3>
                <ul className="list-disc ml-6 space-y-2 text-base">
                  <li>Thu thập kết quả từ bài test RIASEC (điểm số R, I, A, S, E, C)</li>
                  <li>Thu thập kết quả từ bài test MBTI (loại tính cách: INTJ, ENFP, v.v.)</li>
                  <li>Thu thập kết quả từ bài test Sở thích (top interests theo RIASEC)</li>
                  <li>Thu thập kết quả từ bài test Năng lực (điểm mạnh các môn học và khối thi)</li>
                </ul>
              </div>

              <div className="clay-card clay-card-purple p-5">
                <h3 className="font-bold text-lg mb-3 text-gray-800 flex items-center gap-2">
                  <span>🔄</span>
                  <span>Bước 2: Quy nạp dữ liệu</span>
                </h3>
                <ul className="list-disc ml-6 space-y-2 text-base">
                  <li><strong>Tổng hợp điểm số RIASEC:</strong> Cộng dồn điểm từ tất cả các test có liên quan (Bài tư vấn chính, RIASEC 20, Test Sở thích)</li>
                  <li><strong>Điều chỉnh dựa trên MBTI:</strong> Ví dụ, INTJ tăng điểm cho nhóm I (Investigative), ENFP tăng điểm cho nhóm E (Enterprising)</li>
                  <li><strong>Kết hợp với sở thích:</strong> Xác nhận nhóm RIASEC chủ đạo dựa trên sở thích nghề nghiệp từ Test Sở thích</li>
                  <li><strong>Xem xét năng lực:</strong> Đề xuất khối thi phù hợp dựa trên điểm mạnh môn học từ Test Năng lực</li>
                  <li><strong>Ưu tiên dữ liệu:</strong> Dữ liệu từ bài test chính (Bài tư vấn chọn ngành) được ưu tiên, sau đó là các test bổ sung</li>
                </ul>
                <div className="clay-card clay-card-blue p-4 mt-3">
                  <p className="text-sm font-semibold mb-2">💡 Ví dụ quy nạp:</p>
                  <ul className="list-disc ml-5 space-y-1 text-xs">
                    <li>Bài tư vấn chính: I=15, A=12, S=10 → Nhóm I cao nhất</li>
                    <li>RIASEC 20: I=32, A=25, S=20 → Nhóm I vẫn cao nhất</li>
                    <li>MBTI: INTJ → Tăng điểm cho nhóm I</li>
                    <li>Test Sở thích: Top interest = I → Xác nhận nhóm I</li>
                    <li><strong>Kết quả quy nạp:</strong> Nhóm I (Investigative) với độ phù hợp cao nhất (95%)</li>
                  </ul>
                </div>
              </div>

              <div className="clay-card clay-card-pink p-5">
                <h3 className="font-bold text-lg mb-3 text-gray-800 flex items-center gap-2">
                  <span>🎯</span>
                  <span>Bước 3: Đề xuất nhóm ngành</span>
                </h3>
                <ul className="list-disc ml-6 space-y-2 text-base">
                  <li><strong>Sắp xếp nhóm RIASEC:</strong> Theo điểm số từ cao xuống thấp</li>
                  <li><strong>Chọn top 3 nhóm:</strong> Các nhóm có điểm cao nhất</li>
                  <li><strong>Tính độ phù hợp (confidence):</strong> Dựa trên tỷ lệ điểm số (10-100%)</li>
                  <li><strong>Đề xuất chi tiết:</strong> Ngành học, nghề nghiệp và khối thi tương ứng với mỗi nhóm</li>
                </ul>
              </div>

              <div className="clay-card clay-card-yellow p-5">
                <h3 className="font-bold text-lg mb-3 text-gray-800 flex items-center gap-2">
                  <span>🏫</span>
                  <span>Bước 4: Đề xuất trường đại học</span>
                </h3>
                <ul className="list-disc ml-6 space-y-2 text-base">
                  <li><strong>Tìm trường phù hợp:</strong> Dựa trên nhóm ngành được đề xuất</li>
                  <li><strong>Tính điểm phù hợp:</strong> Dựa trên số lượng ngành học khớp với đề xuất</li>
                  <li><strong>Ưu tiên trường:</strong> Trường công lập và trường có uy tín được ưu tiên</li>
                  <li><strong>Hiển thị kết quả:</strong> Top 5-10 trường phù hợp nhất với điểm phù hợp và lý do</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 5. Hệ thống chuyên gia */}
          <div className="clay-card clay-card-purple p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="text-4xl">5️⃣</span>
              <span>Hệ Thống Chuyên Gia (Expert System)</span>
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                Hệ thống sử dụng <strong className="text-purple-700">Expert System</strong> - một hệ thống dựa trên tri thức để đưa ra các gợi ý thông minh. 
                Expert System mô phỏng quá trình suy luận của chuyên gia tư vấn hướng nghiệp.
              </p>

              <div className="clay-card clay-card-blue p-5">
                <h3 className="font-bold text-lg mb-3 text-gray-800">🏗️ Cấu trúc Expert System:</h3>
                <ul className="list-disc ml-6 space-y-2 text-base">
                  <li><strong>Knowledge Base (Cơ sở tri thức):</strong> Chứa các quy tắc và thông tin về ngành học, nghề nghiệp, trường đại học</li>
                  <li><strong>Inference Engine (Bộ suy luận):</strong> Áp dụng các quy tắc để đưa ra kết luận dựa trên dữ liệu đầu vào</li>
                  <li><strong>Working Memory (Bộ nhớ làm việc):</strong> Lưu trữ dữ liệu đầu vào và kết quả trung gian trong quá trình suy luận</li>
                </ul>
              </div>

              <div className="clay-card clay-card-yellow p-5">
                <h3 className="font-bold text-lg mb-3 text-gray-800">📋 Quy tắc suy luận (IF-THEN Rules):</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-white/50 p-3 rounded-lg border border-gray-200">
                    <p><strong className="text-blue-700">IF</strong> điểm R cao nhất <strong className="text-blue-700">THEN</strong> đề xuất nhóm "Kỹ thuật – Cơ khí – Điện tử"</p>
                  </div>
                  <div className="bg-white/50 p-3 rounded-lg border border-gray-200">
                    <p><strong className="text-blue-700">IF</strong> điểm I cao nhất <strong className="text-blue-700">THEN</strong> đề xuất nhóm "Khoa học – Công nghệ – Nghiên cứu"</p>
                  </div>
                  <div className="bg-white/50 p-3 rounded-lg border border-gray-200">
                    <p><strong className="text-blue-700">IF</strong> điểm A cao nhất <strong className="text-blue-700">THEN</strong> đề xuất nhóm "Nghệ thuật – Thiết kế – Sáng tạo"</p>
                  </div>
                  <div className="bg-white/50 p-3 rounded-lg border border-gray-200">
                    <p><strong className="text-blue-700">IF</strong> điểm S cao nhất <strong className="text-blue-700">THEN</strong> đề xuất nhóm "Giáo dục – Y tế – Công tác xã hội"</p>
                  </div>
                  <div className="bg-white/50 p-3 rounded-lg border border-gray-200">
                    <p><strong className="text-blue-700">IF</strong> điểm E cao nhất <strong className="text-blue-700">THEN</strong> đề xuất nhóm "Kinh doanh – Quản lý – Lãnh đạo"</p>
                  </div>
                  <div className="bg-white/50 p-3 rounded-lg border border-gray-200">
                    <p><strong className="text-blue-700">IF</strong> điểm C cao nhất <strong className="text-blue-700">THEN</strong> đề xuất nhóm "Kế toán – Hành chính – Văn phòng"</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Kiến trúc hệ thống */}
          <div className="clay-card clay-card-blue p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="text-4xl">6️⃣</span>
              <span>Kiến Trúc Hệ Thống</span>
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              
              <div className="clay-card clay-card-pink p-5">
                <h3 className="font-bold text-lg mb-3 text-gray-800">💻 Frontend (Giao diện người dùng):</h3>
                <ul className="list-disc ml-6 space-y-2 text-base">
                  <li><strong>Framework:</strong> Next.js 16 (React) với Server Components và Client Components</li>
                  <li><strong>Styling:</strong> Tailwind CSS với Claymorphism design (thiết kế đất sét hiện đại)</li>
                  <li><strong>Components:</strong> Các component tái sử dụng cho form, card, button</li>
                  <li><strong>Pages:</strong> Trang chủ, Bài tư vấn, Chọn test, Ngành học, Kết quả, Hướng dẫn, Admin</li>
                  <li><strong>Routing:</strong> Next.js App Router với dynamic routes</li>
                </ul>
              </div>

              <div className="clay-card clay-card-purple p-5">
                <h3 className="font-bold text-lg mb-3 text-gray-800">⚙️ Backend (Xử lý logic):</h3>
                <ul className="list-disc ml-6 space-y-2 text-base">
                  <li><strong>API Routes:</strong> Next.js API Routes cho xử lý form, lưu kết quả, authentication</li>
                  <li><strong>Database:</strong> JSON file (db.json) để lưu trữ dữ liệu submissions và test results</li>
                  <li><strong>Authentication:</strong> Cookie-based authentication cho admin với bcryptjs</li>
                  <li><strong>Business Logic:</strong> Các module tính toán RIASEC, MBTI, Interest, Aptitude, Recommendation</li>
                </ul>
              </div>

              <div className="clay-card clay-card-yellow p-5">
                <h3 className="font-bold text-lg mb-3 text-gray-800">📦 Các module chính:</h3>
                <ul className="list-disc ml-6 space-y-2 text-base">
                  <li><strong>lib/riasec.ts:</strong> Logic tính toán điểm RIASEC và hệ thống chuyên gia</li>
                  <li><strong>lib/mbti.ts:</strong> Logic tính toán và phân loại MBTI (16 loại tính cách)</li>
                  <li><strong>lib/interest.ts:</strong> Logic đánh giá sở thích nghề nghiệp theo RIASEC</li>
                  <li><strong>lib/aptitude.ts:</strong> Logic đánh giá năng lực học tập và đề xuất khối thi</li>
                  <li><strong>lib/recommendation.ts:</strong> Logic quy nạp và đề xuất ngành học, trường đại học</li>
                  <li><strong>lib/db.ts:</strong> Quản lý database (CRUD operations: create, read, update, delete)</li>
                  <li><strong>lib/universities.ts:</strong> Danh sách trường đại học và quốc gia du học</li>
                  <li><strong>lib/auth.ts:</strong> Xử lý authentication và authorization</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 7. Luồng xử lý dữ liệu */}
          <div className="clay-card clay-card-green p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="text-4xl">7️⃣</span>
              <span>Luồng Xử Lý Dữ Liệu</span>
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <div className="clay-card clay-card-blue p-5">
                <h3 className="font-bold text-lg mb-4 text-gray-800">🔄 Quy trình từ đầu đến cuối:</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-base mb-2 text-blue-700">📋 Luồng 1: Bài Tư Vấn Chọn Ngành Học (Form đầy đủ)</h4>
                    <ol className="list-decimal ml-6 space-y-2 text-sm">
                      <li><strong>Người dùng điền form:</strong> Trả lời các câu hỏi về sở thích, môn học mạnh, tính cách, mục tiêu, lựa chọn học tập</li>
                      <li><strong>Gửi dữ liệu:</strong> Form được submit đến API route <code className="bg-gray-100 px-2 py-1 rounded text-xs">/api/submit</code></li>
                      <li><strong>Tính toán RIASEC:</strong> Hàm <code className="bg-gray-100 px-2 py-1 rounded text-xs">calculateRIASECScores()</code> tính điểm cho 6 nhóm</li>
                      <li><strong>Hệ thống chuyên gia:</strong> Hàm <code className="bg-gray-100 px-2 py-1 rounded text-xs">expertSystem()</code> áp dụng quy tắc để đề xuất ngành học</li>
                      <li><strong>Đề xuất khối thi:</strong> Hàm <code className="bg-gray-100 px-2 py-1 rounded text-xs">suggestExamBlocks()</code> gợi ý khối thi phù hợp</li>
                      <li><strong>Lưu submission:</strong> Dữ liệu được lưu vào <code className="bg-gray-100 px-2 py-1 rounded text-xs">db.json</code> với submission ID</li>
                      <li><strong>Hiển thị kết quả:</strong> Redirect đến trang <code className="bg-gray-100 px-2 py-1 rounded text-xs">/result?id=123</code> (với ID là submission ID)</li>
                      <li><strong>Quy nạp (nếu có test khác):</strong> Hàm <code className="bg-gray-100 px-2 py-1 rounded text-xs">aggregateTestResults()</code> tổng hợp kết quả từ tất cả các bài test đã làm</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-2 text-purple-700">⚡ Luồng 2: Test RIASEC 20 (Tự động tạo submission)</h4>
                    <ol className="list-decimal ml-6 space-y-2 text-sm">
                      <li><strong>Người dùng làm test:</strong> Trả lời 20 câu hỏi về tính cách RIASEC</li>
                      <li><strong>Tính điểm:</strong> Tính tổng điểm cho 6 nhóm RIASEC (R, I, A, S, E, C)</li>
                      <li><strong>Hiển thị kết quả:</strong> Hiển thị top 3 nhóm có điểm cao nhất với progress bar</li>
                      <li><strong>Nhập thông tin (tùy chọn):</strong> Người dùng có thể nhập họ tên, SĐT, email ngay tại trang kết quả</li>
                      <li><strong>Tạo submission tự động:</strong> Khi submit, gọi API <code className="bg-gray-100 px-2 py-1 rounded text-xs">/api/submit/from-riasec</code></li>
                      <li><strong>Hệ thống chuyên gia:</strong> Áp dụng <code className="bg-gray-100 px-2 py-1 rounded text-xs">expertSystem()</code> dựa trên điểm RIASEC để đề xuất ngành học</li>
                      <li><strong>Lưu và redirect:</strong> Tạo submission đầy đủ và tự động redirect đến <code className="bg-gray-100 px-2 py-1 rounded text-xs">/result?id=123</code> (với ID là submission ID)</li>
                      <li><strong>Quy nạp tự động:</strong> Nếu có email, hệ thống tự động quy nạp với các test khác đã làm</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-semibold text-base mb-2 text-green-700">🧪 Luồng 3: Các Test Khác (MBTI, Interest, Aptitude)</h4>
                    <ol className="list-decimal ml-6 space-y-2 text-sm">
                      <li><strong>Người dùng làm test:</strong> Trả lời các câu hỏi của test</li>
                      <li><strong>Tính toán kết quả:</strong> Tính điểm/loại tính cách dựa trên logic của từng test</li>
                      <li><strong>Lưu test result:</strong> Gọi API <code className="bg-gray-100 px-2 py-1 rounded text-xs">/api/test-result</code> để lưu kết quả</li>
                      <li><strong>Liên kết với submission:</strong> Nếu có email, test result được liên kết với submission có cùng email</li>
                      <li><strong>Quy nạp tự động:</strong> Khi xem kết quả submission, hệ thống tự động quy nạp tất cả test results</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 8. Công nghệ sử dụng */}
          <div className="clay-card clay-card-pink p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="text-4xl">8️⃣</span>
              <span>Công Nghệ Sử Dụng</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="clay-card clay-card-blue p-5">
                <h3 className="font-bold text-lg mb-3 text-gray-800">💻 Frontend Technologies:</h3>
                <ul className="list-disc ml-6 space-y-2 text-base">
                  <li><strong>Next.js 16:</strong> React framework với Server Components</li>
                  <li><strong>React 18:</strong> UI library với hooks và context</li>
                  <li><strong>TypeScript:</strong> Type-safe JavaScript</li>
                  <li><strong>Tailwind CSS:</strong> Utility-first CSS framework</li>
                  <li><strong>Claymorphism:</strong> Modern UI design trend</li>
                </ul>
              </div>
              <div className="clay-card clay-card-purple p-5">
                <h3 className="font-bold text-lg mb-3 text-gray-800">⚙️ Backend Technologies:</h3>
                <ul className="list-disc ml-6 space-y-2 text-base">
                  <li><strong>Next.js API Routes:</strong> Serverless API endpoints</li>
                  <li><strong>Node.js:</strong> JavaScript runtime</li>
                  <li><strong>bcryptjs:</strong> Password hashing cho authentication</li>
                  <li><strong>JSON file storage:</strong> Lightweight database solution</li>
                  <li><strong>File System:</strong> Đọc/ghi file JSON</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 9. Hướng dẫn sử dụng chi tiết */}
          <div className="clay-card clay-card-yellow p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="text-4xl">9️⃣</span>
              <span>Hướng Dẫn Sử Dụng Chi Tiết</span>
            </h2>
            <div className="space-y-6 text-base md:text-lg text-gray-700 leading-relaxed">
              <div className="clay-card clay-card-blue p-6">
                <h3 className="font-bold text-xl mb-4 text-gray-800 flex items-center gap-2">
                  <span>📋</span>
                  <span>Bước 1: Làm bài tư vấn chọn ngành học</span>
                </h3>
                <ol className="list-decimal ml-6 space-y-3 text-base">
                  <li>Truy cập trang <strong>"Bài Tư Vấn Chọn Ngành Học"</strong> từ menu hoặc trang chủ</li>
                  <li>Trả lời các câu hỏi về:
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li><strong>Sở thích:</strong> Lĩnh vực bạn yêu thích (kỹ thuật, sáng tạo, công nghệ, nghệ thuật, kinh doanh...)</li>
                      <li><strong>Môn học mạnh:</strong> Các môn bạn học tốt (Toán, Lý, Hóa, Văn, Anh, Sử, Địa, Tin, Mỹ thuật) - chọn tối đa 3 môn</li>
                      <li><strong>Tính cách:</strong> Đặc điểm tính cách của bạn (tỉ mỉ, sáng tạo, giao tiếp, lãnh đạo, nghiên cứu...)</li>
                      <li><strong>Mục tiêu:</strong> Mục tiêu nghề nghiệp của bạn (ví dụ: trở thành kỹ sư, bác sĩ, giáo viên...)</li>
                    </ul>
                  </li>
                  <li>Chọn <strong>mong muốn học tập:</strong> Trong nước hoặc du học</li>
                  <li>Nếu chọn trong nước, có thể chọn trường đại học ưu tiên (tùy chọn)</li>
                  <li>Nếu chọn du học, chọn quốc gia mong muốn (Mỹ, Anh, Úc, Canada, Nhật Bản, Hàn Quốc...)</li>
                  <li>Nhấn <strong>"Gửi yêu cầu tư vấn"</strong> để xem kết quả</li>
                </ol>
              </div>

              <div className="clay-card clay-card-purple p-6">
                <h3 className="font-bold text-xl mb-4 text-gray-800 flex items-center gap-2">
                  <span>🧪</span>
                  <span>Bước 2: Làm các bài test bổ sung (Tùy chọn nhưng khuyến khích)</span>
                </h3>
                <p className="text-base mb-3">
                  Để có kết quả chính xác hơn, bạn nên làm thêm các bài test sau. Càng làm nhiều test, kết quả quy nạp càng chính xác!
                </p>
                <ul className="list-disc ml-6 space-y-3 text-base">
                  <li><strong>Test MBTI:</strong> Đánh giá tính cách theo 16 loại MBTI (28 câu, 15-20 phút)</li>
                  <li><strong>Test Sở Thích Nghề Nghiệp:</strong> Đánh giá sở thích với các lĩnh vực nghề nghiệp (30 câu, 10-15 phút)</li>
                  <li><strong>Test Năng Lực Học Tập:</strong> Đánh giá điểm mạnh trong các môn học (25 câu, 15-20 phút)</li>
                  <li><strong>Test RIASEC 20:</strong> Bài test chi tiết về 6 nhóm tính cách RIASEC (20 câu, 5-10 phút)</li>
                </ul>
                <div className="clay-card clay-card-yellow p-4 mt-4">
                  <p className="text-sm font-semibold text-gray-800 mb-2">
                    💡 <strong>Lưu ý quan trọng:</strong>
                  </p>
                  <ul className="list-disc ml-5 space-y-1 text-sm">
                    <li>Sau mỗi bài test, bạn có thể điền thông tin (tùy chọn) để lưu kết quả</li>
                    <li><strong>Nếu bạn điền cùng một email</strong>, hệ thống sẽ tự động quy nạp tất cả các kết quả test để đưa ra đề xuất chính xác nhất!</li>
                    <li><strong>Test RIASEC 20 đặc biệt:</strong> Sau khi hoàn thành, bạn có thể nhập thông tin ngay tại trang kết quả và hệ thống sẽ tự động tạo submission đầy đủ, sau đó redirect đến trang kết quả tư vấn chi tiết</li>
                    <li>Bạn có thể lưu kết quả test riêng (chỉ lưu test result) hoặc tạo submission đầy đủ (để nhận tư vấn ngành học chi tiết)</li>
                  </ul>
                </div>
              </div>

              <div className="clay-card clay-card-pink p-6">
                <h3 className="font-bold text-xl mb-4 text-gray-800 flex items-center gap-2">
                  <span>📊</span>
                  <span>Bước 3: Xem kết quả tư vấn</span>
                </h3>
                <p className="text-base mb-3">
                  Sau khi hoàn thành bài tư vấn và các test, bạn sẽ nhận được kết quả chi tiết:
                </p>
                <ul className="list-disc ml-6 space-y-3 text-base">
                  <li><strong>Đề xuất nhóm ngành học:</strong> Top 3 nhóm ngành phù hợp với độ phù hợp (%) và lý do</li>
                  <li><strong>Chi tiết từng nhóm:</strong> 
                    <ul className="list-disc ml-6 mt-2 space-y-1">
                      <li>Danh sách ngành học cụ thể</li>
                      <li>Nghề nghiệp phù hợp</li>
                      <li>Khối thi tương ứng (A00, B00, C00, D01...)</li>
                      <li>Điểm mạnh cần có</li>
                    </ul>
                  </li>
                  <li><strong>Đề xuất trường đại học:</strong> Danh sách trường phù hợp với điểm phù hợp và lý do</li>
                  <li><strong>Thông tin trường:</strong> Loại trường (công lập/tư thục), địa điểm, số ngành phù hợp</li>
                </ul>
              </div>

              <div className="clay-card clay-card-green p-6">
                <h3 className="font-bold text-xl mb-4 text-gray-800 flex items-center gap-2">
                  <span>💾</span>
                  <span>Bước 4: Lưu kết quả (Tùy chọn)</span>
                </h3>
                <p className="text-base mb-3">
                  Bạn có thể <strong className="text-green-700">xem và xuất kết quả miễn phí</strong> mà không cần đăng ký. 
                  Nếu muốn lưu kết quả để trường học liên hệ hỗ trợ, bạn có thể điền thông tin (không bắt buộc):
                </p>
                <ul className="list-disc ml-6 space-y-2 text-base">
                  <li><strong>Họ và tên:</strong> Để trường học có thể liên hệ</li>
                  <li><strong>Số điện thoại:</strong> Để nhận tư vấn trực tiếp</li>
                  <li><strong>Email:</strong> Để liên kết tất cả các bài test và nhận báo cáo chi tiết</li>
                </ul>
                <div className="clay-card clay-card-yellow p-4 mt-4">
                  <p className="text-sm font-semibold text-gray-800">
                    ✅ <strong>Lợi ích khi lưu kết quả:</strong>
                  </p>
                  <ul className="list-disc ml-6 mt-2 space-y-1 text-sm">
                    <li>Trường học có thể xem kết quả và liên hệ tư vấn chi tiết cho bạn</li>
                    <li>Hệ thống tự động quy nạp tất cả các bài test bạn đã làm (nếu dùng cùng email)</li>
                    <li>Nhận đề xuất chính xác và toàn diện hơn</li>
                    <li>Lưu trữ lịch sử để xem lại sau này</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* 10. Bảo mật và Quyền riêng tư */}
          <div className="clay-card clay-card-blue p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="text-4xl">🔟</span>
              <span>Bảo Mật Và Quyền Riêng Tư</span>
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <div className="clay-card clay-card-pink p-5">
                <h3 className="font-bold text-lg mb-3 text-gray-800 flex items-center gap-2">
                  <span>🔒</span>
                  <span>Chính sách bảo mật:</span>
                </h3>
                <ul className="list-disc ml-6 space-y-2 text-base">
                  <li><strong>Xem kết quả miễn phí:</strong> Bạn có thể xem và xuất kết quả mà không cần cung cấp thông tin cá nhân</li>
                  <li><strong>Thông tin tùy chọn:</strong> Việc cung cấp thông tin (họ tên, SĐT, email) là hoàn toàn tùy chọn</li>
                  <li><strong>Kiểm soát truy cập:</strong> Hệ thống có thể kiểm soát lượt truy cập bằng IP để tránh spam và lạm dụng</li>
                  <li><strong>Dữ liệu an toàn:</strong> Thông tin được lưu trữ an toàn và chỉ được sử dụng cho mục đích tư vấn hướng nghiệp</li>
                  <li><strong>Quyền truy cập:</strong> Chỉ admin và trường học được phép xem kết quả để hỗ trợ tư vấn, không chia sẻ với bên thứ ba</li>
                  <li><strong>Mã hóa:</strong> Mật khẩu admin được mã hóa bằng bcryptjs để đảm bảo an toàn</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 11. Hướng phát triển */}
          <div className="clay-card clay-card-purple p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="text-4xl">1️⃣1️⃣</span>
              <span>Hướng Phát Triển</span>
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                Hệ thống được thiết kế với khả năng mở rộng cao, phù hợp để xây dựng cụ thể cho từng đơn vị trường học 
                hoặc tổ chức tư vấn hướng nghiệp.
              </p>

              <div className="clay-card clay-card-blue p-5">
                <h3 className="font-bold text-lg mb-3 text-gray-800 flex items-center gap-2">
                  <span>🏫</span>
                  <span>Tùy chỉnh cho trường học/tổ chức:</span>
                </h3>
                <ul className="list-disc ml-6 space-y-2 text-base">
                  <li><strong>Branding tùy chỉnh:</strong> Logo, màu sắc, tên hệ thống theo từng trường/tổ chức</li>
                  <li><strong>Danh sách trường riêng:</strong> Chỉ hiển thị các trường trong khu vực hoặc hệ thống của tổ chức</li>
                  <li><strong>Quy trình tư vấn:</strong> Tích hợp với quy trình tuyển sinh và tư vấn của trường</li>
                  <li><strong>Báo cáo và thống kê:</strong> Dashboard quản trị với thống kê chi tiết về học sinh, xu hướng chọn ngành</li>
                  <li><strong>Tích hợp hệ thống:</strong> Kết nối với hệ thống quản lý học sinh (SIS) hiện có</li>
                  <li><strong>Multi-tenant:</strong> Hỗ trợ nhiều trường/tổ chức trên cùng một hệ thống</li>
                </ul>
              </div>

              <div className="clay-card clay-card-pink p-5">
                <h3 className="font-bold text-lg mb-3 text-gray-800 flex items-center gap-2">
                  <span>📈</span>
                  <span>Tính năng nâng cao:</span>
                </h3>
                <ul className="list-disc ml-6 space-y-2 text-base">
                  <li><strong>Machine Learning:</strong> Cải thiện độ chính xác đề xuất bằng AI/ML dựa trên dữ liệu lịch sử</li>
                  <li><strong>Phân tích xu hướng:</strong> Thống kê xu hướng chọn ngành theo khu vực, thời gian, giới tính</li>
                  <li><strong>So sánh kết quả:</strong> So sánh kết quả của học sinh với dữ liệu lịch sử và xu hướng</li>
                  <li><strong>Xuất báo cáo PDF:</strong> Tự động tạo báo cáo chi tiết dạng PDF với biểu đồ và thống kê</li>
                  <li><strong>API tích hợp:</strong> Cung cấp REST API để tích hợp với hệ thống khác (CRM, LMS, SIS)</li>
                  <li><strong>Multi-language:</strong> Hỗ trợ đa ngôn ngữ cho các trường quốc tế (tiếng Anh, tiếng Trung...)</li>
                  <li><strong>Mobile App:</strong> Ứng dụng di động cho iOS và Android</li>
                </ul>
              </div>

              <div className="clay-card clay-card-yellow p-5">
                <h3 className="font-bold text-lg mb-3 text-gray-800 flex items-center gap-2">
                  <span>🔧</span>
                  <span>Công nghệ mở rộng:</span>
                </h3>
                <ul className="list-disc ml-6 space-y-2 text-base">
                  <li><strong>Database nâng cao:</strong> Chuyển từ JSON sang PostgreSQL/MySQL cho dữ liệu lớn và hiệu năng tốt hơn</li>
                  <li><strong>Authentication:</strong> Hệ thống đăng nhập cho học sinh, giáo viên, admin với OAuth2</li>
                  <li><strong>Real-time:</strong> Cập nhật kết quả real-time với WebSocket hoặc Server-Sent Events</li>
                  <li><strong>Cloud Deployment:</strong> Triển khai trên cloud (AWS, Azure, GCP) với auto-scaling và load balancing</li>
                  <li><strong>Microservices:</strong> Chia nhỏ hệ thống thành các microservices độc lập</li>
                  <li><strong>CI/CD:</strong> Tự động hóa quy trình build, test và deploy</li>
                </ul>
              </div>

              <div className="clay-card clay-card-green p-5">
                <h3 className="font-bold text-lg mb-3 text-gray-800 flex items-center gap-2">
                  <span>💼</span>
                  <span>Dịch vụ triển khai:</span>
                </h3>
                <p className="text-base mb-3">
                  Chúng tôi cung cấp dịch vụ tùy chỉnh và triển khai hệ thống cho các trường học và tổ chức tư vấn:
                </p>
                <ul className="list-disc ml-6 space-y-2 text-base">
                  <li><strong>Tư vấn và thiết kế:</strong> Phân tích nhu cầu và thiết kế hệ thống theo yêu cầu cụ thể</li>
                  <li><strong>Phát triển và tùy chỉnh:</strong> Phát triển tính năng mới và tùy chỉnh theo brand của tổ chức</li>
                  <li><strong>Đào tạo và hỗ trợ:</strong> Đào tạo nhân viên sử dụng hệ thống và hỗ trợ kỹ thuật 24/7</li>
                  <li><strong>Bảo trì và cập nhật:</strong> Bảo trì định kỳ, cập nhật tính năng mới và fix lỗi</li>
                  <li><strong>Migration:</strong> Chuyển đổi dữ liệu từ hệ thống cũ sang hệ thống mới</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 12. Kết luận */}
          <div className="clay-card clay-card-pink p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="text-4xl">1️⃣2️⃣</span>
              <span>Kết Luận</span>
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <p>
                Hệ thống tư vấn chọn ngành học được xây dựng dựa trên các mô hình tâm lý học đã được kiểm chứng, 
                kết hợp với công nghệ hiện đại để tạo ra một công cụ hỗ trợ hữu ích cho học sinh, sinh viên trong việc 
                lựa chọn ngành học phù hợp.
              </p>
              <div className="clay-card clay-card-yellow p-5">
                <h3 className="font-bold text-lg mb-3 text-gray-800">✨ Ưu điểm của hệ thống:</h3>
                <ul className="list-disc ml-6 space-y-2 text-base">
                  <li>✅ Đánh giá toàn diện dựa trên nhiều yếu tố (tính cách, sở thích, năng lực)</li>
                  <li>✅ Quy nạp kết quả từ nhiều bài test để tăng độ chính xác</li>
                  <li>✅ Đề xuất cụ thể về ngành học và trường đại học</li>
                  <li>✅ Giao diện hiện đại, dễ sử dụng với Claymorphism design</li>
                  <li>✅ Hệ thống mở, dễ mở rộng và tùy chỉnh cho từng tổ chức</li>
                  <li>✅ Miễn phí xem và xuất kết quả, thông tin đăng ký tùy chọn</li>
                  <li>✅ Bảo mật và quyền riêng tư được đảm bảo</li>
                  <li>✅ Hỗ trợ đa ngôn ngữ và tích hợp với hệ thống khác</li>
                </ul>
              </div>
              <div className="clay-card clay-card-green p-5">
                <p className="text-base text-gray-700">
                  <strong className="text-green-700">📞 Liên hệ:</strong> Để biết thêm thông tin về dịch vụ tùy chỉnh và triển khai hệ thống cho trường học/tổ chức của bạn, 
                  vui lòng liên hệ với chúng tôi qua email hoặc số điện thoại được cung cấp trên trang chủ.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <a href="/" className="clay-button text-white px-8 py-4 rounded-full text-lg font-bold inline-block hover:scale-105 transition-transform">
              ← Về trang chủ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
