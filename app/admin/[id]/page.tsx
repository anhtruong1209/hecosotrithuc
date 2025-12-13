import { redirect } from 'next/navigation';
import { getSubmissionById } from '@/lib/db';
import { isAdmin } from '@/lib/auth';
import Link from 'next/link';
import DeleteButtonDetail from '../../components/DeleteButtonDetail';

export const dynamic = 'force-dynamic';

export default async function AdminDetailPage({ params }: { params: Promise<{ id: string }> | { id: string } }) {
  // Handle both Promise and direct params for Next.js compatibility
  const resolvedParams = params instanceof Promise ? await params : params;
  
  if (!(await isAdmin())) {
    redirect('/admin/login');
  }

  const id = parseInt(resolvedParams.id);
  if (isNaN(id)) {
    redirect('/admin');
  }

  let submission;
  try {
    submission = getSubmissionById(id);
  } catch (error) {
    console.error('Error fetching submission:', error);
    redirect('/admin');
  }

  if (!submission) {
    console.error(`Submission not found with ID: ${id}`);
    redirect('/admin');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto py-12 px-6">
        <Link href="/admin" className="glass-button text-white px-4 py-2 rounded-xl text-sm font-medium mb-4 inline-block">
          ← Quay lại danh sách
        </Link>
        
        <div className="glass-card rounded-2xl p-4 md:p-6 mb-6">
          <h1 className="text-lg md:text-xl font-bold mb-4 text-blue-700">
            Chi tiết kết quả tư vấn #{submission.id}
          </h1>
        </div>

        <div className="glass-card rounded-2xl p-4 md:p-6 mb-6">
          <h3 className="font-semibold mb-3 text-blue-700">Thông tin người tham gia</h3>
          <div className="mt-2 space-y-2 text-sm">
            <div className="text-gray-700"><strong className="text-blue-700">Họ tên:</strong> {submission.fullname || '-'}</div>
            <div className="text-gray-700"><strong className="text-blue-700">SĐT:</strong> {submission.phone || '-'}</div>
            <div className="text-gray-700"><strong className="text-blue-700">Email:</strong> {submission.email || '-'}</div>
            <div className="text-gray-700"><strong className="text-blue-700">IP Address:</strong> <span className="font-mono">{submission.ip_address || '-'}</span></div>
            <div className="text-gray-700"><strong className="text-blue-700">Gửi lúc:</strong> {new Date(submission.created_at).toLocaleString('vi-VN')}</div>
          </div>
        </div>

        {submission.tests_completed && submission.tests_completed.length > 0 && (
          <div className="glass-card rounded-2xl p-4 md:p-6 mb-6">
            <h3 className="font-semibold mb-3 text-blue-700">Các bài test đã làm</h3>
            <div className="space-y-4">
              {submission.tests_completed.map((test, index) => {
                const testNames: Record<string, string> = {
                  'mbti': 'Test Tính Cách MBTI',
                  'interest': 'Test Sở Thích Nghề Nghiệp',
                  'aptitude': 'Test Năng Lực Học Tập',
                  'riasec': 'Test RIASEC 20'
                };
                const testIcons: Record<string, string> = {
                  'mbti': '🧠',
                  'interest': '❤️',
                  'aptitude': '📚',
                  'riasec': '⚡'
                };
                return (
                  <div key={index} className="border border-blue-200/50 rounded-xl p-4 bg-blue-50/30">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{testIcons[test.test_type] || '📝'}</span>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">{test.test_name || testNames[test.test_type] || 'Bài test'}</h4>
                        <p className="text-xs text-gray-600">Hoàn thành: {new Date(test.completed_at).toLocaleString('vi-VN')}</p>
                      </div>
                    </div>
                    <div className="mt-3 p-3 bg-white/50 rounded-lg border border-blue-200/30">
                      <pre className="text-xs text-gray-700 overflow-auto max-h-40">
                        {JSON.stringify(test.result, null, 2)}
                      </pre>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div className="glass-card rounded-2xl p-4 md:p-6 mb-6">
          <h3 className="font-semibold mb-3 text-blue-700">Kết quả</h3>
          <div className="mt-2 space-y-2 text-sm">
            <div className="text-gray-700"><strong className="text-blue-700">Sở thích:</strong> {submission.sothich}</div>
            <div className="text-gray-700"><strong className="text-blue-700">Mục tiêu:</strong> {submission.muctieu}</div>
            <div className="text-gray-700"><strong className="text-blue-700">Ngành gợi ý:</strong> {submission.major}</div>
            <div className="text-gray-700"><strong className="text-blue-700">Mô tả:</strong> {submission.description}</div>
            <div className="mt-3">
              <strong className="text-blue-700">Khối thi gợi ý:</strong>
              <div className="flex flex-wrap gap-2 mt-2">
                {submission.suggested_blocks && submission.suggested_blocks.length > 0 ? (
                  submission.suggested_blocks.map((block, i) => (
                    <span key={i} className="px-3 py-1 glass-dark border border-blue-400/50 text-blue-600 rounded-lg text-xs font-medium">
                      {block}
                    </span>
                  ))
                ) : (
                  <span className="text-gray-500">Không có dữ liệu</span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-4 md:p-6 mb-6">
          <h3 className="font-semibold mb-3 text-blue-700">Chi tiết dữ liệu thu thập</h3>
          <pre className="mt-3 text-xs text-gray-700 overflow-auto glass p-4 rounded-lg border border-blue-200/50">
            {JSON.stringify(submission, null, 2)}
          </pre>
        </div>

        <div className="flex gap-3 md:gap-4 flex-wrap">
          <Link href={`/result?id=${submission.id}`} className="glass-button text-white px-4 md:px-6 py-2 md:py-3 rounded-xl text-sm md:text-base font-medium transition inline-block bg-green-500/40 border-green-400/40 hover:bg-green-500/50">
            🎯 Xem kết quả tư vấn
          </Link>
          <DeleteButtonDetail id={submission.id} />
          <Link href="/admin" className="glass-button text-white px-4 md:px-6 py-2 md:py-3 rounded-xl text-sm md:text-base font-medium transition inline-block">
            ← Quay lại
          </Link>
        </div>
      </div>
    </div>
  );
}

