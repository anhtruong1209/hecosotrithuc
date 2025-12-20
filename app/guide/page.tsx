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
            <h1 className="text-3xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
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
                  <p className="text-sm font-semibold mb-2">📊 Cách tính điểm:</p>
                  <p className="text-xs mb-2 text-gray-700">
                    Bài tư vấn chính thu thập thông tin từ nhiều nguồn khác nhau và tính điểm cho 6 nhóm RIASEC:
                  </p>
                  <ul className="list-disc ml-5 space-y-1 text-xs mb-3">
                    <li><strong>Sở thích:</strong> Mỗi lựa chọn sở thích (kỹ thuật, công nghệ, nghệ thuật...) được gán điểm cho nhóm RIASEC tương ứng (thường 2-5 điểm)</li>
                    <li><strong>Môn học mạnh:</strong> Mỗi môn học bạn chọn (Toán, Lý, Hóa, Văn...) được gán điểm cho nhóm phù hợp (thường 1-3 điểm mỗi môn)</li>
                    <li><strong>Tính cách:</strong> Mỗi đặc điểm tính cách (tỉ mỉ, sáng tạo, giao tiếp...) được gán điểm cho nhóm tương ứng (thường 1-3 điểm mỗi đặc điểm)</li>
                    <li><strong>Mục tiêu nghề nghiệp:</strong> Mục tiêu của bạn (kỹ sư, bác sĩ, giáo viên...) được gán điểm cho nhóm phù hợp (thường 3-5 điểm)</li>
                  </ul>
                  <div className="bg-white/50 p-3 rounded-lg border border-yellow-200 mb-2">
                    <p className="text-xs font-semibold mb-1">💡 Ví dụ cụ thể:</p>
                    <p className="text-xs text-gray-700 mb-1">
                      <strong>Nếu bạn chọn:</strong>
                    </p>
                    <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-600">
                      <li>Sở thích: "Công nghệ" → Nhóm I (Investigative) = +5 điểm</li>
                      <li>Môn học mạnh: "Toán", "Lý", "Hóa" → Nhóm I = +3 điểm, Nhóm R (Realistic) = +2 điểm</li>
                      <li>Tính cách: "Phân tích", "Tỉ mỉ", "Logic" → Nhóm I = +6 điểm (2 điểm mỗi đặc điểm)</li>
                      <li>Mục tiêu: "Trở thành kỹ sư phần mềm" → Nhóm I = +4 điểm</li>
                    </ul>
                    <p className="text-xs text-gray-700 mt-2">
                      <strong>Tổng điểm nhóm I:</strong> 5 + 3 + 6 + 4 = 18 điểm
                    </p>
                    <p className="text-xs text-gray-700 mt-1">
                      Hệ thống tính tương tự cho các nhóm khác, sau đó áp dụng quy tắc chuyên gia để đề xuất ngành học.
                    </p>
                  </div>
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
                  <p className="text-sm font-semibold mb-2">📊 Cách tính điểm:</p>
                  <p className="text-xs mb-2 text-gray-700">
                    Mỗi câu hỏi có 5 lựa chọn, mỗi lựa chọn sẽ cho điểm cho một hoặc nhiều nhóm RIASEC:
                  </p>
                  <ul className="list-disc ml-5 space-y-1 text-xs mb-3">
                    <li><strong>Rất đồng ý:</strong> 3 điểm cho nhóm chính + có thể 1 điểm cho nhóm phụ</li>
                    <li><strong>Đồng ý:</strong> 2 điểm cho nhóm chính</li>
                    <li><strong>Trung lập:</strong> 0 điểm (không ảnh hưởng đến kết quả)</li>
                    <li><strong>Không đồng ý:</strong> 1 điểm cho nhóm đối lập</li>
                    <li><strong>Hoàn toàn không đồng ý:</strong> 2 điểm cho nhóm đối lập</li>
                  </ul>
                  <div className="bg-white/50 p-3 rounded-lg border border-yellow-200 mb-2">
                    <p className="text-xs font-semibold mb-1">💡 Ví dụ cụ thể:</p>
                    <p className="text-xs text-gray-700 mb-1">
                      <strong>Câu hỏi:</strong> "Bạn thích nghiên cứu, tìm hiểu các vấn đề khoa học?"
                    </p>
                    <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-600">
                      <li>Rất đồng ý → Nhóm I (Investigative) = 3 điểm, Nhóm A (Artistic) = 1 điểm</li>
                      <li>Đồng ý → Nhóm I = 2 điểm</li>
                      <li>Trung lập → 0 điểm</li>
                      <li>Không đồng ý → Nhóm E (Enterprising) = 1 điểm</li>
                      <li>Hoàn toàn không đồng ý → Nhóm E = 2 điểm</li>
                    </ul>
                  </div>
                  <p className="text-xs font-semibold mb-1">🔄 Quy trình tính điểm:</p>
                  <ul className="list-disc ml-5 space-y-1 text-xs">
                    <li>Hệ thống cộng dồn điểm từ tất cả 20 câu hỏi cho mỗi nhóm RIASEC</li>
                    <li>Ví dụ: Nếu bạn chọn "Rất đồng ý" cho 5 câu về nghiên cứu → Nhóm I = 5 × 3 = 15 điểm</li>
                    <li>Nhóm có tổng điểm cao nhất là nhóm tính cách chủ đạo của bạn</li>
                    <li>Hệ thống hiển thị top 3 nhóm có điểm cao nhất với thanh progress bar</li>
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
                  <p className="text-sm font-semibold mb-2">📊 Cách tính điểm:</p>
                  <p className="text-xs mb-2 text-gray-700">
                    Bài test MBTI có 28 câu hỏi, đánh giá 4 chiều tính cách. Có 3 loại câu hỏi khác nhau:
                  </p>
                  <ul className="list-disc ml-5 space-y-1 text-xs mb-3">
                    <li><strong>Chiều 1 - Hướng ngoại (E) / Hướng nội (I):</strong> Cách bạn tiếp nhận năng lượng</li>
                    <li><strong>Chiều 2 - Cảm giác (S) / Trực giác (N):</strong> Cách bạn thu thập thông tin</li>
                    <li><strong>Chiều 3 - Suy nghĩ (T) / Cảm xúc (F):</strong> Cách bạn ra quyết định</li>
                    <li><strong>Chiều 4 - Đánh giá (J) / Nhận thức (P):</strong> Cách bạn tổ chức cuộc sống</li>
                  </ul>
                  <div className="bg-white/50 p-3 rounded-lg border border-yellow-200 mb-2">
                    <p className="text-xs font-semibold mb-1">📝 3 loại câu hỏi và cách tính điểm:</p>
                    <p className="text-xs text-gray-700 mb-1">
                      <strong>1. Câu hỏi thang điểm (Scale - 5 mức độ):</strong>
                    </p>
                    <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-600 mb-2">
                      <li>Rất đồng ý = 3 điểm cho chiều tương ứng</li>
                      <li>Đồng ý = 2 điểm</li>
                      <li>Trung lập = 0 điểm</li>
                      <li>Không đồng ý = 2 điểm cho chiều đối lập</li>
                      <li>Hoàn toàn không đồng ý = 3 điểm cho chiều đối lập</li>
                    </ul>
                    <p className="text-xs text-gray-700 mb-1">
                      <strong>Ví dụ:</strong> "Bạn cảm thấy năng lượng hơn khi ở trong nhóm đông người?" (Chiều E/I)
                    </p>
                    <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-600 mb-2">
                      <li>Rất đồng ý → E = 3 điểm</li>
                      <li>Đồng ý → E = 2 điểm</li>
                      <li>Trung lập → 0 điểm</li>
                      <li>Không đồng ý → I = 2 điểm</li>
                      <li>Hoàn toàn không đồng ý → I = 3 điểm</li>
                    </ul>
                    <p className="text-xs text-gray-700 mb-1">
                      <strong>2. Câu hỏi Có/Không (Yes/No):</strong>
                    </p>
                    <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-600 mb-2">
                      <li>Có = 3 điểm cho chiều tương ứng</li>
                      <li>Không = 3 điểm cho chiều đối lập</li>
                    </ul>
                    <p className="text-xs text-gray-700 mb-1">
                      <strong>Ví dụ:</strong> "Bạn thích làm việc độc lập hơn là làm việc nhóm?" (Chiều E/I)
                    </p>
                    <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-600 mb-2">
                      <li>Có → I = 3 điểm</li>
                      <li>Không → E = 3 điểm</li>
                    </ul>
                    <p className="text-xs text-gray-700 mb-1">
                      <strong>3. Câu hỏi lựa chọn (Choice):</strong>
                    </p>
                    <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-600 mb-2">
                      <li>Mỗi lựa chọn = 3 điểm cho chiều tương ứng</li>
                      <li>Lựa chọn "Cả hai" = 0 điểm</li>
                    </ul>
                    <p className="text-xs text-gray-700 mb-1">
                      <strong>Ví dụ:</strong> "Bạn thích tập trung vào điều gì hơn?" (Chiều S/N)
                    </p>
                    <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-600 mb-2">
                      <li>Chi tiết cụ thể → S = 3 điểm</li>
                      <li>Bức tranh tổng thể → N = 3 điểm</li>
                      <li>Cả hai → 0 điểm</li>
                    </ul>
                    <p className="text-xs text-gray-700 mt-2 mb-1">
                      <strong>Kết quả cuối cùng:</strong>
                    </p>
                    <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-600">
                      <li>Hệ thống tính tổng điểm cho mỗi chiều từ tất cả câu hỏi</li>
                      <li>So sánh điểm giữa 2 chiều đối lập: E vs I, S vs N, T vs F, J vs P</li>
                      <li>Chiều nào có điểm cao hơn sẽ được chọn</li>
                      <li>Kết hợp 4 chiều → 1 trong 16 loại tính cách (ví dụ: INTJ, ENFP, ISFP, ESTJ...)</li>
                    </ul>
                  </div>
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
                  <p className="text-sm font-semibold mb-2">📊 Cách tính điểm:</p>
                  <p className="text-xs mb-2 text-gray-700">
                    Bài test có 30 câu hỏi, mỗi câu hỏi về một lĩnh vực nghề nghiệp cụ thể và thuộc một nhóm RIASEC.
                  </p>
                  <ul className="list-disc ml-5 space-y-1 text-xs mb-3">
                    <li><strong>Thang điểm:</strong> Mỗi câu hỏi có 5 lựa chọn với điểm số như sau:
                      <ul className="list-disc ml-4 mt-1 space-y-0.5">
                        <li>Rất đồng ý = 3 điểm</li>
                        <li>Đồng ý = 2 điểm</li>
                        <li>Trung lập = 1 điểm</li>
                        <li>Không đồng ý = 0 điểm</li>
                        <li>Hoàn toàn không đồng ý = 0 điểm</li>
                      </ul>
                    </li>
                    <li><strong>Phân bổ câu hỏi:</strong> Mỗi nhóm RIASEC có khoảng 5 câu hỏi (30 câu ÷ 6 nhóm)</li>
                    <li><strong>Tính tổng điểm:</strong> Hệ thống cộng dồn điểm cho mỗi nhóm từ tất cả các câu hỏi thuộc nhóm đó</li>
                  </ul>
                  <div className="bg-white/50 p-3 rounded-lg border border-yellow-200 mb-2">
                    <p className="text-xs font-semibold mb-1">💡 Ví dụ cụ thể:</p>
                    <p className="text-xs text-gray-700 mb-1">
                      <strong>Câu hỏi 1:</strong> "Bạn thích sửa chữa, lắp ráp hoặc vận hành máy móc?" (Nhóm R)
                    </p>
                    <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-600">
                      <li>Rất đồng ý → Nhóm R = 3 điểm</li>
                      <li>Đồng ý → Nhóm R = 2 điểm</li>
                      <li>Trung lập → Nhóm R = 1 điểm</li>
                      <li>Không đồng ý → Nhóm R = 0 điểm</li>
                      <li>Hoàn toàn không đồng ý → Nhóm R = 0 điểm</li>
                    </ul>
                    <p className="text-xs text-gray-700 mt-2 mb-1">
                      <strong>Ví dụ tính tổng:</strong> Nếu bạn trả lời "Rất đồng ý" cho 4 câu về nhóm R và "Đồng ý" cho 1 câu:
                    </p>
                    <p className="text-xs text-gray-600 ml-4">
                      Tổng điểm nhóm R = (4 × 3) + (1 × 2) = 12 + 2 = 14 điểm
                    </p>
                    <p className="text-xs text-gray-700 mt-2">
                      Nhóm có tổng điểm cao nhất là lĩnh vực nghề nghiệp bạn yêu thích nhất.
                    </p>
                  </div>
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
                  <p className="text-sm font-semibold mb-2">📊 Cách tính điểm:</p>
                  <p className="text-xs mb-2 text-gray-700">
                    Bài test có 25 câu hỏi, đánh giá năng lực của bạn trong 10 môn học: Toán, Lý, Hóa, Sinh, Văn, Anh, Sử, Địa, Tin học, Mỹ thuật.
                  </p>
                  <ul className="list-disc ml-5 space-y-1 text-xs mb-3">
                    <li><strong>Thang điểm:</strong> Mỗi câu hỏi có 5 lựa chọn với điểm số như sau:
                      <ul className="list-disc ml-4 mt-1 space-y-0.5">
                        <li>Rất đồng ý = 3 điểm</li>
                        <li>Đồng ý = 2 điểm</li>
                        <li>Trung lập = 1 điểm</li>
                        <li>Không đồng ý = 0 điểm</li>
                        <li>Hoàn toàn không đồng ý = 0 điểm</li>
                      </ul>
                    </li>
                    <li><strong>Phân bổ câu hỏi:</strong> Mỗi môn học có khoảng 2-3 câu hỏi</li>
                    <li><strong>Tính tổng điểm:</strong> Hệ thống cộng dồn điểm cho mỗi môn từ tất cả các câu hỏi về môn đó</li>
                  </ul>
                  <div className="bg-white/50 p-3 rounded-lg border border-yellow-200 mb-2">
                    <p className="text-xs font-semibold mb-1">💡 Ví dụ cụ thể:</p>
                    <p className="text-xs text-gray-700 mb-1">
                      <strong>Câu hỏi 1:</strong> "Bạn học tốt môn Toán?" (Môn Toán)
                    </p>
                    <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-600">
                      <li>Rất đồng ý → Môn Toán = 3 điểm</li>
                      <li>Đồng ý → Môn Toán = 2 điểm</li>
                      <li>Trung lập → Môn Toán = 1 điểm</li>
                      <li>Không đồng ý → Môn Toán = 0 điểm</li>
                      <li>Hoàn toàn không đồng ý → Môn Toán = 0 điểm</li>
                    </ul>
                    <p className="text-xs text-gray-700 mt-2 mb-1">
                      <strong>Ví dụ tính tổng:</strong> Nếu bạn có 3 câu hỏi về môn Toán và trả lời:
                    </p>
                    <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-600">
                      <li>Câu 1: "Rất đồng ý" = 3 điểm</li>
                      <li>Câu 2: "Rất đồng ý" = 3 điểm</li>
                      <li>Câu 3: "Đồng ý" = 2 điểm</li>
                    </ul>
                    <p className="text-xs text-gray-600 ml-4 mt-1">
                      Tổng điểm môn Toán = 3 + 3 + 2 = 8 điểm
                    </p>
                    <p className="text-xs text-gray-700 mt-2 mb-1">
                      Sau khi tính điểm cho tất cả các môn, hệ thống sẽ:
                    </p>
                    <ul className="list-disc ml-4 space-y-0.5 text-xs text-gray-600">
                      <li>Xác định top 3 môn bạn học tốt nhất (có điểm cao nhất)</li>
                      <li>Đề xuất khối thi phù hợp dựa trên top 3 môn (ví dụ: Toán-Lý-Hóa → Khối A00, Toán-Văn-Anh → Khối D01)</li>
                      <li>Gợi ý ngành học phù hợp với năng lực của bạn</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Logic quy nạp và đánh giá */}
          <div className="clay-card clay-card-green p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
              4. Quy Nạp Và Đánh Giá - Hệ Cơ Sở Tri Thức (Expert System)
            </h2>
            <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
              <div className="clay-card clay-card-purple p-5 mb-6">
                <h3 className="font-bold text-xl mb-3 text-gray-800 flex items-center gap-2">
                  <span>🧠</span>
                  <span>Giới Thiệu Về Hệ Cơ Sở Tri Thức (Expert System)</span>
                </h3>
                <p className="text-base mb-3">
                  Hệ thống tư vấn chọn ngành học được xây dựng dựa trên <strong className="text-purple-700">Hệ Cơ Sở Tri Thức (Expert System)</strong> - 
                  một loại hệ thống trí tuệ nhân tạo mô phỏng khả năng suy luận và ra quyết định của chuyên gia trong lĩnh vực tư vấn hướng nghiệp.
                </p>
                <div className="clay-card clay-card-blue p-4 mt-3">
                  <p className="text-sm font-semibold mb-2">📚 Lý thuyết về Expert System:</p>
                  <ul className="list-disc ml-5 space-y-1 text-sm">
                    <li><strong>Expert System</strong> là hệ thống dựa trên tri thức (Knowledge-based System) được phát triển từ những năm 1970</li>
                    <li>Hệ thống sử dụng <strong>Knowledge Base</strong> (Cơ sở tri thức) chứa các quy tắc và sự kiện từ chuyên gia</li>
                    <li><strong>Inference Engine</strong> (Bộ suy luận) áp dụng các quy tắc để đưa ra kết luận từ dữ liệu đầu vào</li>
                    <li><strong>Working Memory</strong> (Bộ nhớ làm việc) lưu trữ dữ liệu hiện tại và kết quả trung gian</li>
                    <li>Phương pháp <strong>Forward Chaining</strong> (Suy luận tiến) và <strong>Backward Chaining</strong> (Suy luận lùi) được sử dụng</li>
                  </ul>
                </div>
              </div>

              <div className="clay-card clay-card-yellow p-5 mb-6">
                <h3 className="font-bold text-xl mb-3 text-gray-800 flex items-center gap-2">
                  <span>🏗️</span>
                  <span>Cấu Trúc Hệ Cơ Sở Tri Thức Trong Hệ Thống</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="clay-card clay-card-blue p-4">
                    <h4 className="font-bold text-base mb-2 text-blue-700">📖 Cơ Sở Tri Thức<br/>(Knowledge Base)</h4>
                    <ul className="list-disc ml-4 space-y-1 text-xs">
                      <li>Chứa các quy tắc "Nếu-Thì" về ngành học</li>
                      <li>Bảng chuyển đổi từ nhóm tính cách sang ngành học</li>
                      <li>Danh sách trường đại học và ngành học của từng trường</li>
                      <li>Các quy tắc để tổng hợp kết quả từ nhiều bài test</li>
                      <li>Mối quan hệ giữa các bài test khác nhau</li>
                    </ul>
                  </div>
                  <div className="clay-card clay-card-pink p-4">
                    <h4 className="font-bold text-base mb-2 text-pink-700">⚙️ Bộ Suy Luận<br/>(Inference Engine)</h4>
                    <ul className="list-disc ml-4 space-y-1 text-xs">
                      <li>Tổng hợp kết quả từ tất cả các bài test</li>
                      <li>Đề xuất nhóm ngành dựa trên quy tắc</li>
                      <li>Áp dụng hệ thống chuyên gia để đưa ra gợi ý</li>
                      <li>Tính toán và sắp xếp điểm số RIASEC</li>
                      <li>Điều chỉnh kết quả dựa trên MBTI và các yếu tố khác</li>
                    </ul>
                  </div>
                  <div className="clay-card clay-card-green p-4">
                    <h4 className="font-bold text-base mb-2 text-green-700">💾 Bộ Nhớ Làm Việc<br/>(Working Memory)</h4>
                    <ul className="list-disc ml-4 space-y-1 text-xs">
                      <li>Lưu trữ kết quả các bài test bạn đã làm</li>
                      <li>Lưu điểm số RIASEC sau khi tính toán</li>
                      <li>Lưu kết quả sau khi tổng hợp từ nhiều test</li>
                      <li>Lưu danh sách nhóm ngành được đề xuất</li>
                      <li>Lưu thông tin bài làm của bạn</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-base">
                Hệ thống sử dụng phương pháp <strong className="text-green-700">quy nạp (Induction)</strong> kết hợp với <strong className="text-green-700">Expert System</strong> 
                để tổng hợp kết quả từ tất cả các bài test, đảm bảo đánh giá chính xác và toàn diện nhất. 
                Quy trình quy nạp và đánh giá gồm 4 bước chính:
              </p>

              <div className="clay-card clay-card-blue p-5">
                <h3 className="font-bold text-lg mb-3 text-gray-800 flex items-center gap-2">
                  <span>📥</span>
                  <span>Bước 1: Thu Thập Dữ Liệu (Data Collection)</span>
                </h3>
                <p className="text-sm mb-3 text-gray-600">
                  Hệ thống bắt đầu bằng việc thu thập tất cả kết quả từ các bài test bạn đã làm và lưu vào bộ nhớ để xử lý.
                </p>
                <ul className="list-disc ml-6 space-y-2 text-base">
                  <li><strong>Test RIASEC:</strong> Thu thập điểm số cho 6 nhóm tính cách (R, I, A, S, E, C) từ bài tư vấn chính, bài RIASEC 20 câu, hoặc Test Sở thích</li>
                  <li><strong>Test MBTI:</strong> Thu thập loại tính cách của bạn (ví dụ: INTJ, ENFP, ISFP, ESTJ...) - có tổng cộng 16 loại tính cách</li>
                  <li><strong>Test Sở Thích:</strong> Thu thập các lĩnh vực nghề nghiệp bạn yêu thích nhất để xác nhận nhóm tính cách chủ đạo</li>
                  <li><strong>Test Năng Lực:</strong> Thu thập thông tin về các môn học bạn học tốt (Toán, Lý, Hóa, Văn, Anh...) và khối thi phù hợp</li>
                </ul>
                <div className="clay-card clay-card-yellow p-3 mt-3">
                  <p className="text-xs font-semibold mb-1">💡 Giải thích đơn giản:</p>
                  <p className="text-xs">Giống như bạn thu thập tất cả thông tin vào một tờ giấy, hệ thống lưu tất cả kết quả test vào bộ nhớ để phân tích tiếp theo</p>
                </div>
              </div>

              <div className="clay-card clay-card-purple p-5">
                <h3 className="font-bold text-lg mb-3 text-gray-800 flex items-center gap-2">
                  <span>🔄</span>
                  <span>Bước 2: Quy Nạp Dữ Liệu (Data Aggregation) - Inference Engine Hoạt Động</span>
                </h3>
                <p className="text-sm mb-3 text-gray-600">
                  Đây là bước quan trọng nhất! Hệ thống sẽ tổng hợp và phân tích tất cả kết quả test của bạn theo các quy tắc đã được lập trình sẵn, 
                  giống như một chuyên gia tư vấn đang xem xét tất cả thông tin để đưa ra nhận định.
                </p>
                <ul className="list-disc ml-6 space-y-2 text-base">
                  <li><strong>Tổng hợp điểm số RIASEC:</strong> 
                    <ul className="list-disc ml-5 mt-1 space-y-1 text-sm">
                      <li>Hệ thống cộng dồn điểm từ tất cả các bài test có liên quan (Bài tư vấn chính, RIASEC 20, Test Sở thích)</li>
                      <li>Ví dụ: Nếu bài tư vấn chính cho nhóm I = 15 điểm, và RIASEC 20 cho nhóm I = 32 điểm, thì tổng điểm nhóm I = 47 điểm</li>
                      <li>Sau đó xác định nhóm nào có điểm cao nhất</li>
                    </ul>
                  </li>
                  <li><strong>Điều chỉnh dựa trên MBTI:</strong> 
                    <ul className="list-disc ml-5 mt-1 space-y-1 text-sm">
                      <li>Nếu bạn có tính cách INTJ hoặc INTP (người thích nghiên cứu, phân tích), hệ thống sẽ tăng thêm điểm cho nhóm I (Investigative) khoảng 10%</li>
                      <li>Nếu bạn có tính cách ENFP hoặc ESFP (người năng động, sáng tạo), hệ thống sẽ tăng điểm cho nhóm A (Artistic) và S (Social) khoảng 5%</li>
                      <li>Điều này giúp kết quả chính xác hơn vì MBTI bổ sung thông tin về tính cách</li>
                    </ul>
                  </li>
                  <li><strong>Kết hợp với sở thích:</strong> 
                    <ul className="list-disc ml-5 mt-1 space-y-1 text-sm">
                      <li>Nếu Test Sở thích cho thấy bạn thích lĩnh vực nghiên cứu (nhóm I), và điểm RIASEC cũng cho nhóm I cao nhất, 
                      thì hệ thống sẽ xác nhận chắc chắn rằng nhóm I phù hợp với bạn</li>
                      <li>Điều này giúp tăng độ tin cậy của kết quả</li>
                    </ul>
                  </li>
                  <li><strong>Xem xét năng lực:</strong> 
                    <ul className="list-disc ml-5 mt-1 space-y-1 text-sm">
                      <li>Dựa trên các môn học bạn học tốt, hệ thống sẽ đề xuất khối thi phù hợp</li>
                      <li>Ví dụ: Nếu bạn mạnh Toán, Lý, Hóa → đề xuất khối A00</li>
                      <li>Nếu bạn mạnh Toán, Văn, Anh → đề xuất khối D01</li>
                    </ul>
                  </li>
                  <li><strong>Ưu tiên dữ liệu:</strong> Kết quả từ bài tư vấn chính được ưu tiên cao nhất, sau đó mới đến các test bổ sung</li>
                </ul>
                <div className="clay-card clay-card-blue p-4 mt-3">
                  <p className="text-sm font-semibold mb-2">💡 Ví dụ minh họa quy trình quy nạp:</p>
                  <div className="space-y-2 text-xs">
                    <div className="bg-white/50 p-2 rounded">
                      <strong>📊 Dữ liệu đầu vào (Kết quả các bài test):</strong>
                      <ul className="list-disc ml-4 mt-1">
                        <li>Bài tư vấn chính: Nhóm I = 15 điểm, Nhóm A = 12 điểm, Nhóm S = 10 điểm</li>
                        <li>Bài RIASEC 20: Nhóm I = 32 điểm, Nhóm A = 25 điểm, Nhóm S = 20 điểm</li>
                        <li>Test MBTI: Bạn có tính cách INTJ (người thích nghiên cứu, phân tích)</li>
                        <li>Test Sở thích: Lĩnh vực bạn thích nhất là nghiên cứu (nhóm I)</li>
                  </ul>
                    </div>
                    <div className="bg-white/50 p-2 rounded">
                      <strong>🔧 Quy tắc xử lý (Áp dụng logic):</strong>
                      <ul className="list-disc ml-4 mt-1">
                        <li>Cộng dồn điểm từ tất cả bài test: Nhóm I = 15 + 32 = 47 điểm</li>
                        <li>Vì MBTI là INTJ (người nghiên cứu), tăng thêm 10% điểm cho nhóm I</li>
                        <li>Vì sở thích cũng là nhóm I, xác nhận nhóm I là phù hợp nhất</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-2 rounded border border-green-200">
                      <strong>✅ Kết quả cuối cùng:</strong>
                      <ul className="list-disc ml-4 mt-1">
                        <li>Nhóm I (Investigative - Nghiên cứu) với độ phù hợp 95%</li>
                        <li>Đề xuất: Nhóm ngành "Khoa học – Công nghệ – Nghiên cứu"</li>
                        <li>Gợi ý các ngành: Công nghệ thông tin, Khoa học máy tính, Toán ứng dụng, Vật lý học...</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="clay-card clay-card-pink p-5">
                <h3 className="font-bold text-lg mb-3 text-gray-800 flex items-center gap-2">
                  <span>🎯</span>
                  <span>Bước 3: Đề Xuất Nhóm Ngành (Rule-Based Recommendation)</span>
                </h3>
                <p className="text-sm mb-3 text-gray-600">
                  Dựa trên kết quả quy nạp từ bước 2, hệ thống sẽ đề xuất các nhóm ngành phù hợp với bạn. 
                  Hệ thống sử dụng các quy tắc đã được lập trình sẵn để đưa ra gợi ý.
                </p>
                <ul className="list-disc ml-6 space-y-2 text-base">
                  <li><strong>Sắp xếp nhóm RIASEC:</strong> 
                    <ul className="list-disc ml-5 mt-1 space-y-1 text-sm">
                      <li>Hệ thống sắp xếp 6 nhóm tính cách theo điểm số từ cao xuống thấp</li>
                      <li>Ví dụ: Nhóm I = 47 điểm, Nhóm A = 37 điểm, Nhóm S = 30 điểm...</li>
                    </ul>
                  </li>
                  <li><strong>Chọn top 3 nhóm:</strong> 
                    <ul className="list-disc ml-5 mt-1 space-y-1 text-sm">
                      <li>Hệ thống chọn 3 nhóm có điểm cao nhất để đề xuất</li>
                      <li>Ví dụ: Top 3 là Nhóm I (47 điểm), Nhóm A (37 điểm), Nhóm S (30 điểm)</li>
                    </ul>
                  </li>
                  <li><strong>Tính độ phù hợp:</strong> 
                    <ul className="list-disc ml-5 mt-1 space-y-1 text-sm">
                      <li>Hệ thống tính toán độ phù hợp (từ 10% đến 100%) dựa trên tỷ lệ điểm số</li>
                      <li>Nhóm có điểm cao nhất sẽ có độ phù hợp cao nhất (thường trên 80%)</li>
                      <li>Ví dụ: Nhóm I có độ phù hợp 95%, Nhóm A có độ phù hợp 75%, Nhóm S có độ phù hợp 60%</li>
                    </ul>
                  </li>
                  <li><strong>Đề xuất chi tiết:</strong> 
                    <ul className="list-disc ml-5 mt-1 space-y-1 text-sm">
                      <li>Với mỗi nhóm, hệ thống sẽ tra cứu trong cơ sở dữ liệu để đưa ra:</li>
                      <li>• Tên nhóm ngành (ví dụ: "Khoa học – Công nghệ – Nghiên cứu")</li>
                      <li>• Danh sách ngành học cụ thể (ví dụ: Công nghệ thông tin, Khoa học máy tính, Toán ứng dụng...)</li>
                      <li>• Các nghề nghiệp phù hợp (ví dụ: Lập trình viên, Nhà nghiên cứu, Kỹ sư AI...)</li>
                      <li>• Khối thi tương ứng (ví dụ: A00, A01, B00...)</li>
                    </ul>
                  </li>
                </ul>
                <div className="clay-card clay-card-yellow p-3 mt-3">
                  <p className="text-xs font-semibold mb-1">📋 Ví dụ đề xuất:</p>
                  <div className="text-xs space-y-1">
                    <p><strong>Nhóm I (Investigative) - Độ phù hợp: 95%</strong></p>
                    <ul className="list-disc ml-4 mt-1 space-y-1">
                      <li><strong>Nhóm ngành:</strong> "Khoa học – Công nghệ – Nghiên cứu"</li>
                      <li><strong>Ngành học:</strong> Công nghệ thông tin, Khoa học máy tính, Toán ứng dụng, Vật lý học, Hóa học...</li>
                      <li><strong>Nghề nghiệp:</strong> Lập trình viên, Nhà nghiên cứu, Kỹ sư AI, Nhà khoa học dữ liệu...</li>
                      <li><strong>Khối thi:</strong> A00, A01, B00</li>
                </ul>
                  </div>
                </div>
              </div>

              <div className="clay-card clay-card-yellow p-5">
                <h3 className="font-bold text-lg mb-3 text-gray-800 flex items-center gap-2">
                  <span>🏫</span>
                  <span>Bước 4: Đề Xuất Trường Đại Học (Final Recommendation)</span>
                </h3>
                <p className="text-sm mb-3 text-gray-600">
                  Cuối cùng, hệ thống sẽ tìm các trường đại học có các ngành học phù hợp với nhóm ngành được đề xuất ở bước 3.
                </p>
                <ul className="list-disc ml-6 space-y-2 text-base">
                  <li><strong>Tìm trường phù hợp:</strong> 
                    <ul className="list-disc ml-5 mt-1 space-y-1 text-sm">
                      <li>Hệ thống duyệt qua danh sách tất cả các trường đại học</li>
                      <li>Kiểm tra xem trường nào có các ngành học khớp với nhóm ngành được đề xuất</li>
                      <li>Ví dụ: Nếu bạn được đề xuất nhóm "Khoa học – Công nghệ", hệ thống sẽ tìm các trường có ngành Công nghệ thông tin, Khoa học máy tính...</li>
                    </ul>
                  </li>
                  <li><strong>Tính điểm phù hợp:</strong> 
                    <ul className="list-disc ml-5 mt-1 space-y-1 text-sm">
                      <li>Mỗi ngành học của trường khớp với đề xuất: +10 điểm</li>
                      <li>Nếu là trường công lập: +5 điểm (ưu tiên trường công lập)</li>
                      <li>Nếu trường ở vị trí bạn ưu tiên (ví dụ: TP.HCM): +10 điểm</li>
                      <li>Ví dụ: Trường A có 3 ngành khớp, là công lập, ở TP.HCM → Điểm = 3×10 + 5 + 10 = 45 điểm</li>
                    </ul>
                  </li>
                  <li><strong>Ưu tiên trường:</strong> 
                    <ul className="list-disc ml-5 mt-1 space-y-1 text-sm">
                      <li>Trường công lập được ưu tiên hơn trường tư thục</li>
                      <li>Trường có nhiều ngành phù hợp được ưu tiên hơn</li>
                      <li>Trường ở vị trí bạn ưu tiên được ưu tiên hơn</li>
                    </ul>
                  </li>
                  <li><strong>Hiển thị kết quả:</strong> 
                    <ul className="list-disc ml-5 mt-1 space-y-1 text-sm">
                      <li>Hệ thống sắp xếp các trường theo điểm phù hợp từ cao xuống thấp</li>
                      <li>Hiển thị top 5-10 trường phù hợp nhất</li>
                      <li>Mỗi trường có kèm lý do tại sao được đề xuất (ví dụ: "Có 5 ngành phù hợp với kết quả test của bạn")</li>
                    </ul>
                  </li>
                </ul>
                <div className="clay-card clay-card-green p-3 mt-3">
                  <p className="text-xs font-semibold mb-1">✅ Kết quả cuối cùng bạn nhận được:</p>
                  <ul className="list-disc ml-4 mt-1 space-y-1 text-xs">
                    <li>Danh sách top 3 nhóm ngành với độ phù hợp (ví dụ: Nhóm I - 95%, Nhóm A - 75%, Nhóm S - 60%)</li>
                    <li>Chi tiết cho mỗi nhóm: ngành học cụ thể, nghề nghiệp phù hợp, khối thi cần thiết</li>
                    <li>Danh sách top 5-10 trường đại học phù hợp nhất với điểm phù hợp</li>
                    <li>Lý do đề xuất cho từng trường (ví dụ: "Có 5 ngành phù hợp", "Trường công lập uy tín")</li>
                </ul>
                </div>
              </div>

              <div className="clay-card clay-card-purple p-5 mt-6">
                <h3 className="font-bold text-xl mb-3 text-gray-800 flex items-center gap-2">
                  <span>📊</span>
                  <span>Tóm Tắt Quy Trình Hệ Cơ Sở Tri Thức</span>
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-white/50 p-3 rounded-lg border border-purple-200">
                    <p className="font-semibold mb-2">1. Cơ Sở Tri Thức (Knowledge Base):</p>
                    <ul className="list-disc ml-5 space-y-1 text-xs">
                      <li>Giống như một cuốn sách hướng dẫn chứa tất cả các quy tắc về ngành học và nghề nghiệp</li>
                      <li>Chứa bảng chuyển đổi: Nhóm tính cách → Nhóm ngành → Ngành học cụ thể</li>
                      <li>Chứa danh sách tất cả các trường đại học và ngành học của từng trường</li>
                      <li>Chứa các quy tắc để điều chỉnh kết quả dựa trên MBTI, sở thích, năng lực</li>
                    </ul>
                  </div>
                  <div className="bg-white/50 p-3 rounded-lg border border-purple-200">
                    <p className="font-semibold mb-2">2. Bộ Nhớ Làm Việc (Working Memory):</p>
                    <ul className="list-disc ml-5 space-y-1 text-xs">
                      <li>Giống như một tờ giấy nháp, lưu trữ tất cả thông tin trong quá trình xử lý</li>
                      <li>Lưu kết quả các bài test bạn đã làm (RIASEC, MBTI, Sở thích, Năng lực)</li>
                      <li>Lưu điểm số sau khi tính toán và quy nạp</li>
                      <li>Lưu kết quả cuối cùng: danh sách nhóm ngành và trường được đề xuất</li>
                    </ul>
                  </div>
                  <div className="bg-white/50 p-3 rounded-lg border border-purple-200">
                    <p className="font-semibold mb-2">3. Bộ Suy Luận (Inference Engine):</p>
                    <ul className="list-disc ml-5 space-y-1 text-xs">
                      <li>Giống như bộ não của hệ thống, thực hiện tất cả các phép tính và suy luận</li>
                      <li><strong>Quy trình suy luận:</strong> Lấy dữ liệu từ bộ nhớ → Áp dụng quy tắc từ cơ sở tri thức → Tạo ra kết quả mới</li>
                      <li>Bước 1: Tổng hợp kết quả từ tất cả các bài test</li>
                      <li>Bước 2: Điều chỉnh và quy nạp dữ liệu</li>
                      <li>Bước 3: Đề xuất nhóm ngành dựa trên quy tắc</li>
                      <li>Bước 4: Đề xuất trường đại học phù hợp</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                    <p className="font-semibold mb-2 text-green-700">🎯 Ưu Điểm Của Hệ Cơ Sở Tri Thức:</p>
                    <ul className="list-disc ml-5 space-y-1 text-xs">
                      <li>✅ <strong>Dễ hiểu:</strong> Quy tắc rõ ràng, có thể giải thích được tại sao đưa ra đề xuất này</li>
                      <li>✅ <strong>Dễ cập nhật:</strong> Có thể thêm quy tắc mới hoặc sửa quy tắc cũ mà không cần viết lại toàn bộ chương trình</li>
                      <li>✅ <strong>Mô phỏng chuyên gia:</strong> Hoạt động giống như một chuyên gia tư vấn hướng nghiệp thực sự</li>
                      <li>✅ <strong>Quy nạp thông minh:</strong> Tổng hợp nhiều nguồn thông tin khác nhau để đưa ra kết luận chính xác nhất</li>
                      <li>✅ <strong>Mở rộng dễ dàng:</strong> Có thể thêm nhiều quy tắc mới để hệ thống thông minh hơn</li>
                    </ul>
                  </div>
                </div>
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
                  <div className="bg-white/50 p- rounded-lg border border-gray-200">
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
                  <li><strong>Database:</strong> MongoDB để lưu trữ dữ liệu submissions và test results</li>
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
