import { redirect } from 'next/navigation';
import { getSubmissions } from '@/lib/db';
import { isAdmin } from '@/lib/auth';
import Link from 'next/link';

export default async function AdminPage() {
  if (!isAdmin()) {
    redirect('/admin/login');
  }

  const submissions = getSubmissions(500);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-12 px-6">
        <div className="glass-card rounded-2xl p-4 md:p-6 mb-6">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <h1 className="text-xl md:text-2xl font-bold text-blue-700">
              Quản trị - Danh sách kết quả tư vấn
            </h1>
            <form method="POST" action="/api/admin/logout" className="inline">
              <button type="submit" className="glass-button text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-red-500/40 border-red-400/40">
                Đăng xuất
              </button>
            </form>
          </div>
        </div>

        <div className="glass-card rounded-2xl overflow-hidden">
            <div className="overflow-x-auto p-4 md:p-6">
              <table className="w-full table-auto">
                <thead>
                  <tr className="text-left text-xs md:text-sm text-gray-700 border-b border-blue-200/30">
                    <th className="p-2 md:p-3">ID</th>
                    <th className="p-2 md:p-3">Họ tên</th>
                    <th className="p-2 md:p-3 hidden md:table-cell">SĐT</th>
                    <th className="p-2 md:p-3 hidden lg:table-cell">Email</th>
                    <th className="p-2 md:p-3">Ngành gợi ý</th>
                    <th className="p-2 md:p-3 hidden md:table-cell">Ngày gửi</th>
                    <th className="p-2 md:p-3">Hành động</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="p-4 text-center text-gray-500">
                        Chưa có dữ liệu
                      </td>
                    </tr>
                  ) : (
                    submissions.map((sub) => (
                      <tr key={sub.id} className="border-t border-blue-200/30 hover:bg-blue-50/30 transition">
                        <td className="p-2 md:p-3 text-gray-700">{sub.id}</td>
                        <td className="p-2 md:p-3 text-gray-700">{sub.fullname}</td>
                        <td className="p-2 md:p-3 text-gray-600 hidden md:table-cell">{sub.phone}</td>
                        <td className="p-2 md:p-3 text-gray-600 hidden lg:table-cell text-xs">{sub.email}</td>
                        <td className="p-2 md:p-3 text-gray-700 text-xs md:text-sm">{sub.major}</td>
                        <td className="p-2 md:p-3 text-gray-600 hidden md:table-cell text-xs">{new Date(sub.created_at).toLocaleDateString('vi-VN')}</td>
                        <td className="p-2 md:p-3">
                          <div className="flex gap-2">
                            <Link href={`/admin/${sub.id}`} className="glass-button text-white px-3 py-1 rounded-lg text-xs font-medium">
                              Xem
                            </Link>
                            <form method="POST" action={`/api/admin/submissions/${sub.id}/delete`} className="inline" onSubmit={(e) => {
                              if (!confirm('Bạn có chắc chắn muốn xóa bản ghi này? Hành động này không thể hoàn tác.')) {
                                e.preventDefault();
                              }
                            }}>
                              <button type="submit" className="px-3 py-1 bg-red-500/40 hover:bg-red-500/50 text-white rounded-lg text-xs font-medium border border-red-400/40 transition">
                                🗑️ Xóa
                              </button>
                            </form>
                          </div>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>
  );
}