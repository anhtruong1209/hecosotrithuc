export default function Home() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white text-gray-800 min-h-screen">
        <section className="text-center py-20 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-700">
            Hệ Chuyên Gia Tư Vấn Chọn Ngành Học
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
            Khám phá ngành học phù hợp với tính cách, năng lực và sở thích của bạn.
          </p>
          <div className="mt-6 flex justify-center items-center gap-4 flex-wrap">
            <a href="/majors" className="inline-block bg-white hover:bg-gray-100 border border-blue-600 text-blue-600 px-6 py-3 rounded-2xl text-lg font-semibold">
              Thông tin ngành học
            </a>
            <a href="/riasec20" className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl text-lg font-semibold">
              Bài RIASEC 20 câu
            </a>
            <a href="/test" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-semibold">
              Bắt đầu tư vấn →
            </a>
          </div>
        </section>

        <section className="py-16 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 text-center">
            <h3 className="text-xl font-semibold mb-2">Phân tích thông minh</h3>
            <p className="text-gray-600">Dựa trên thuật toán và tập luật chuyên gia định hướng nghề nghiệp.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 text-center">
            <h3 className="text-xl font-semibold mb-2">Gợi ý ngành phù hợp</h3>
            <p className="text-gray-600">Đề xuất ngành học theo mô hình RIASEC và năng lực học tập.</p>
          </div>
          <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200 text-center">
            <h3 className="text-xl font-semibold mb-2">Định hướng tương lai</h3>
            <p className="text-gray-600">Cung cấp khối thi, nghề nghiệp và lộ trình phát triển phù hợp.</p>
          </div>
        </section>

        <section className="py-20 bg-blue-50 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-blue-700 mb-10">Hệ thống hoạt động thế nào?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
                <div className="w-12 h-12 bg-blue-600 text-white mx-auto flex items-center justify-center rounded-full text-lg font-bold">1</div>
                <h4 className="text-xl font-semibold mt-4">Nhập thông tin</h4>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
                <div className="w-12 h-12 bg-blue-600 text-white mx-auto flex items-center justify-center rounded-full text-lg font-bold">2</div>
                <h4 className="text-xl font-semibold mt-4">Phân tích</h4>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
                <div className="w-12 h-12 bg-blue-600 text-white mx-auto flex items-center justify-center rounded-full text-lg font-bold">3</div>
                <h4 className="text-xl font-semibold mt-4">Suy luận</h4>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
                <div className="w-12 h-12 bg-blue-600 text-white mx-auto flex items-center justify-center rounded-full text-lg font-bold">4</div>
                <h4 className="text-xl font-semibold mt-4">Gợi ý ngành</h4>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center py-20 px-4">
          <h2 className="text-3xl font-bold mb-6">Sẵn sàng khám phá ngành học phù hợp?</h2>
          <a href="/test" className="px-10 py-5 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold inline-block">
            Bắt đầu ngay →
          </a>
        </section>

        <footer className="text-center py-6 text-gray-500 text-sm">
          © 2025 Hệ Chuyên Gia Hướng Nghiệp – All rights reserved.
          <div className="mt-2 text-gray-400">Bản quyền thuộc về nhóm Học viên CNTT 2025.1</div>
        </footer>
    </div>
  );
}

