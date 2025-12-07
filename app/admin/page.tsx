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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto py-12 px-6">
        <div className="glass-card rounded-2xl p-6 border border-white/20 mb-6">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Quản trị - Danh sách kết quả tư vấn
            </h1>
            <form method="POST" action="/api/admin/logout" className="inline">
              <button type="submit" className="glass-button text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-red-500/30 border-red-400/30">
                Đăng xuất
              </button>
            </form>
          </div>
        </div>

        <div className="glass-card rounded-2xl border border-white/20 overflow-hidden">
            <div className="overflow-x-auto p-6">
              <table className="w-full table-auto">
                <thead>
                  <tr className="text-left text-xs md:text-sm text-gray-300 border-b border-white/10">
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
                      <td colSpan={7} className="p-4 text-center text-gray-400">
                        Chưa có dữ liệu
                      </td>
                    </tr>
                  ) : (
                    submissions.map((sub) => (
                      <tr key={sub.id} className="border-t border-white/10 hover:bg-white/5 transition">
                        <td className="p-2 md:p-3 text-gray-200">{sub.id}</td>
                        <td className="p-2 md:p-3 text-gray-200">{sub.fullname}</td>
                        <td className="p-2 md:p-3 text-gray-300 hidden md:table-cell">{sub.phone}</td>
                        <td className="p-2 md:p-3 text-gray-300 hidden lg:table-cell text-xs">{sub.email}</td>
                        <td className="p-2 md:p-3 text-gray-200 text-xs md:text-sm">{sub.major}</td>
                        <td className="p-2 md:p-3 text-gray-300 hidden md:table-cell text-xs">{new Date(sub.created_at).toLocaleDateString('vi-VN')}</td>
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
                              <button type="submit" className="px-3 py-1 bg-red-500/30 hover:bg-red-500/40 text-red-300 hover:text-red-200 rounded-lg text-xs font-medium border border-red-400/30 transition">
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