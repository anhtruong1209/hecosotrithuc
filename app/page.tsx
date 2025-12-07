export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <section className="text-center py-12 md:py-16 px-4">
          <div className="glass-card rounded-2xl p-6 md:p-8 max-w-4xl mx-auto border border-white/20">
            <h1 className="text-2xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Hệ Chuyên Gia Tư Vấn Chọn Ngành Học
            </h1>
            <p className="text-sm md:text-base max-w-2xl mx-auto text-gray-300 mb-6">
              Khám phá ngành học phù hợp với tính cách, năng lực và sở thích của bạn.
            </p>
            <div className="mt-6 flex justify-center items-center gap-3 flex-wrap">
              <a href="/majors" className="glass-button text-white px-4 py-2 rounded-xl text-sm font-medium hover:scale-105 transition-transform">
                📚 Ngành học
              </a>
              <a href="/tests" className="glass-button text-white px-4 py-2 rounded-xl text-sm font-medium hover:scale-105 transition-transform">
                🧪 Chọn test
              </a>
              <a href="/test" className="glass-button text-white px-6 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border-blue-400/50 hover:scale-105 transition-transform">
                🚀 Bắt đầu →
              </a>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12 px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto relative z-10">
          <div className="glass-card rounded-xl p-4 md:p-6 text-center border border-white/20 hover:border-white/30 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="text-2xl md:text-3xl mb-2">🧠</div>
            <h3 className="text-sm md:text-base font-semibold mb-2 text-white">Phân tích thông minh</h3>
            <p className="text-xs md:text-sm text-gray-300">Dựa trên thuật toán và tập luật chuyên gia định hướng nghề nghiệp.</p>
          </div>
          <div className="glass-card rounded-xl p-4 md:p-6 text-center border border-white/20 hover:border-white/30 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="text-2xl md:text-3xl mb-2">🎯</div>
            <h3 className="text-sm md:text-base font-semibold mb-2 text-white">Gợi ý ngành phù hợp</h3>
            <p className="text-xs md:text-sm text-gray-300">Đề xuất ngành học theo mô hình RIASEC và năng lực học tập.</p>
          </div>
          <div className="glass-card rounded-xl p-4 md:p-6 text-center border border-white/20 hover:border-white/30 hover:scale-105 transition-all duration-300 cursor-pointer">
            <div className="text-2xl md:text-3xl mb-2">🚀</div>
            <h3 className="text-sm md:text-base font-semibold mb-2 text-white">Định hướng tương lai</h3>
            <p className="text-xs md:text-sm text-gray-300">Cung cấp khối thi, nghề nghiệp và lộ trình phát triển phù hợp.</p>
          </div>
        </section>

        <section className="py-8 md:py-12 px-4 md:px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="glass-card rounded-2xl p-6 md:p-8 border border-white/20">
              <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Hệ thống hoạt động thế nào?
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                <div className="glass-dark rounded-xl p-4 border border-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 text-white mx-auto flex items-center justify-center rounded-full text-sm md:text-base font-bold mb-2 shadow-lg">1</div>
                  <h4 className="text-xs md:text-sm font-semibold text-white">Nhập thông tin</h4>
                </div>
                <div className="glass-dark rounded-xl p-4 border border-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-pink-500 text-white mx-auto flex items-center justify-center rounded-full text-sm md:text-base font-bold mb-2 shadow-lg">2</div>
                  <h4 className="text-xs md:text-sm font-semibold text-white">Phân tích</h4>
                </div>
                <div className="glass-dark rounded-xl p-4 border border-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 text-white mx-auto flex items-center justify-center rounded-full text-sm md:text-base font-bold mb-2 shadow-lg">3</div>
                  <h4 className="text-xs md:text-sm font-semibold text-white">Suy luận</h4>
                </div>
                <div className="glass-dark rounded-xl p-4 border border-white/10 hover:border-white/20 hover:scale-110 transition-all duration-300 cursor-pointer">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-emerald-500 text-white mx-auto flex items-center justify-center rounded-full text-sm md:text-base font-bold mb-2 shadow-lg">4</div>
                  <h4 className="text-xs md:text-sm font-semibold text-white">Gợi ý ngành</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center py-8 md:py-12 px-4 relative z-10">
          <div className="glass-card rounded-2xl p-6 md:p-8 max-w-4xl mx-auto border border-white/20">
            <h2 className="text-lg md:text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Sẵn sàng khám phá ngành học phù hợp?
            </h2>
            <p className="text-gray-300 mb-6 text-xs md:text-sm">Bắt đầu hành trình tìm kiếm ngành học lý tưởng của bạn ngay hôm nay</p>
            <div className="flex justify-center gap-3 flex-wrap">
              <a href="/tests" className="glass-button text-white px-4 py-2 rounded-xl text-xs md:text-sm font-medium hover:scale-105 transition-transform">
                🧪 Xem test
              </a>
              <a href="/test" className="glass-button text-white px-4 py-2 rounded-xl text-xs md:text-sm font-medium bg-gradient-to-r from-blue-500/30 to-cyan-500/30 border-blue-400/50 hover:scale-105 transition-transform">
                Bắt đầu →
              </a>
            </div>
          </div>
        </section>

        <footer className="text-center py-4 md:py-6 text-gray-400 text-xs relative z-10 glass-dark border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            © 2025 Hệ Chuyên Gia Hướng Nghiệp
            <div className="mt-1 text-gray-500 text-xs">CNTT 2025.1</div>
          </div>
        </footer>
      </div>
    </div>
  );
}

