export default function MBTIPage() {
  return (
    <div className="bg-gradient-to-b from-purple-50 via-white to-purple-50 min-h-screen text-gray-800">
      <div className="max-w-4xl mx-auto py-12 px-6">
        <div className="text-center mb-10">
          <div className="inline-block mb-4">
            <span className="text-6xl">🧠</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
            Test Tính Cách MBTI
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            Khám phá tính cách của bạn qua 16 loại tính cách MBTI
          </p>
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 max-w-2xl mx-auto">
            <p className="text-yellow-800">
              ⚠️ <strong>Đang phát triển:</strong> Bài test này đang được xây dựng và sẽ sớm có mặt. 
              Vui lòng quay lại sau hoặc thử các bài test khác.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="/tests" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-semibold inline-block">
            ← Quay lại danh sách test
          </a>
        </div>
      </div>
    </div>
  );
}

