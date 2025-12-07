export default function AdminLoginPage({ searchParams }: { searchParams: { error?: string } }) {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
        <div className="max-w-md mx-auto py-20 px-6">
          <div className="bg-white p-8 rounded-2xl shadow">
            <h1 className="text-2xl font-bold text-center text-blue-700 mb-4">Đăng nhập quản trị</h1>
            
            {searchParams.error && (
              <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-sm text-red-600">
                Tên đăng nhập hoặc mật khẩu không đúng
              </div>
            )}

            <form method="POST" action="/api/admin/login">
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700">Tài khoản</label>
                <input name="username" required className="w-full p-3 border rounded-xl" />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
                <input name="password" type="password" required className="w-full p-3 border rounded-xl" />
              </div>
              <div className="text-center mt-4">
                <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-2xl">
                  Đăng nhập
                </button>
              </div>
            </form>
          </div>
        </div>
  );
}

