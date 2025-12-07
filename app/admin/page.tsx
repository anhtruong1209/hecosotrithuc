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
    <div className="bg-gray-50 min-h-screen text-gray-800">
        <div className="max-w-6xl mx-auto py-12 px-6">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
            Quản trị - Danh sách kết quả tư vấn
          </h1>

          <div className="flex justify-between items-center mb-4">
            <div></div>
            <div>
              <form method="POST" action="/api/admin/logout" className="inline">
                <button type="submit" className="text-sm text-red-600 hover:underline">
                  Đăng xuất
                </button>
              </form>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <div className="overflow-x-auto">
              <table className="w-full table-auto">
                <thead>
                  <tr className="text-left text-sm text-gray-600 border-b">
                    <th className="p-2">ID</th>
                    <th className="p-2">Họ tên</th>
                    <th className="p-2">SĐT</th>
                    <th className="p-2">Email</th>
                    <th className="p-2">Ngành gợi ý</th>
                    <th className="p-2">Ngày gửi</th>
                    <th className="p-2">Hành động</th>
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
                      <tr key={sub.id} className="border-t">
                        <td className="p-2">{sub.id}</td>
                        <td className="p-2">{sub.fullname}</td>
                        <td className="p-2">{sub.phone}</td>
                        <td className="p-2">{sub.email}</td>
                        <td className="p-2">{sub.major}</td>
                        <td className="p-2">{new Date(sub.created_at).toLocaleDateString('vi-VN')}</td>
                        <td className="p-2">
                          <Link href={`/admin/${sub.id}`} className="text-blue-600 hover:underline">
                            Xem
                          </Link>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
  );
}

