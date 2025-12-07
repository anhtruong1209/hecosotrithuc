import { redirect } from 'next/navigation';
import { getSubmissionById } from '@/lib/db';
import { isAdmin } from '@/lib/auth';
import Link from 'next/link';

export default async function AdminDetailPage({ params }: { params: { id: string } }) {
  if (!isAdmin()) {
    redirect('/admin/login');
  }

  const id = parseInt(params.id);
  const submission = getSubmissionById(id);

  if (!submission) {
    redirect('/admin');
  }

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
        <div className="max-w-4xl mx-auto py-12 px-6">
          <Link href="/admin" className="text-blue-600 hover:underline mb-4 inline-block">
            ← Quay lại danh sách
          </Link>
          <h1 className="text-2xl font-bold text-blue-700 mb-4">
            Chi tiết kết quả tư vấn #{submission.id}
          </h1>

          <div className="bg-white rounded-2xl shadow p-6 mb-6">
            <h3 className="font-semibold mb-2">Thông tin người tham gia</h3>
            <div className="mt-2 space-y-1">
              <div><strong>Họ tên:</strong> {submission.fullname}</div>
              <div><strong>SĐT:</strong> {submission.phone}</div>
              <div><strong>Email:</strong> {submission.email}</div>
              <div><strong>Gửi lúc:</strong> {new Date(submission.created_at).toLocaleString('vi-VN')}</div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6 mb-6">
            <h3 className="font-semibold mb-2">Kết quả</h3>
            <div className="mt-2 space-y-2">
              <div><strong>Sở thích:</strong> {submission.sothich}</div>
              <div><strong>Mục tiêu:</strong> {submission.muctieu}</div>
              <div><strong>Ngành gợi ý:</strong> {submission.major}</div>
              <div><strong>Mô tả:</strong> {submission.description}</div>
              <div className="mt-3">
                <strong>Khối thi gợi ý:</strong>
                <div className="flex flex-wrap gap-2 mt-1">
                  {submission.suggested_blocks.map((block, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 rounded">
                      {block}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow p-6">
            <h3 className="font-semibold mb-3">Chi tiết dữ liệu thu thập</h3>
            <pre className="mt-3 text-sm text-gray-700 overflow-auto bg-gray-50 p-4 rounded">
              {JSON.stringify(submission, null, 2)}
            </pre>
          </div>
        </div>
  );
}

