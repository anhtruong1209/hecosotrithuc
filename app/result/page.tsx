import { redirect } from 'next/navigation';
import { getSubmissionById } from '@/lib/db';
import { universities, studyAbroadCountries } from '@/lib/universities';

export default async function ResultPage({ searchParams }: { searchParams: { id?: string } }) {
  const id = searchParams.id ? parseInt(searchParams.id) : null;
  
  if (!id) {
    redirect('/test');
  }

  const submission = getSubmissionById(id);
  
  if (!submission) {
    redirect('/test');
  }

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
        <div className="max-w-4xl mx-auto py-12 px-6">
          <h1 className="text-4xl font-bold text-center text-blue-700 mb-6">
            Kết Quả Tư Vấn Ngành Học
          </h1>
          <p className="text-center text-gray-600 mb-10">
            Dựa trên thông tin bạn cung cấp, hệ chuyên gia đã phân tích và gợi ý ngành phù hợp nhất.
          </p>

          {(submission.fullname || submission.phone || submission.email) && (
            <div className="bg-white rounded-2xl border shadow p-4 mb-6">
              <h4 className="text-md font-semibold text-gray-700 mb-2">Thông tin người tham gia</h4>
              <div className="text-gray-700">
                <div><strong>Họ tên:</strong> {submission.fullname}</div>
                <div><strong>SĐT:</strong> {submission.phone}</div>
                <div><strong>Email:</strong> {submission.email}</div>
              </div>
            </div>
          )}

          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-10">
            <h2 className="text-3xl font-bold text-blue-600 mb-4 text-center">{submission.major}</h2>
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              {submission.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white rounded-2xl border shadow p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Điểm mạnh nổi bật</h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                {submission.strengths.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl border shadow p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Các nghề nghiệp phù hợp</h3>
              <ul className="list-disc ml-6 text-gray-700 space-y-1">
                {submission.jobs.map((job, i) => (
                  <li key={i}>{job}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl border shadow p-6 mb-10">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">Một số ngành học liên quan</h3>
            <ul className="list-disc ml-6 text-gray-700 space-y-1">
              {submission.related_majors.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl border shadow p-6 mb-10">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">Gợi ý khối thi phù hợp</h3>
            {submission.suggested_blocks && submission.suggested_blocks.length > 0 ? (
              <div className="flex flex-wrap gap-3">
                {submission.suggested_blocks.map((block, i) => (
                  <span key={i} className="px-3 py-2 bg-blue-50 text-blue-700 rounded-full border">
                    {block}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">Không có gợi ý khối thi cụ thể.</p>
            )}
          </div>

          <div className="text-center mt-10 flex flex-col md:flex-row justify-center items-center gap-4">
            <a href="/test" className="px-8 py-3 bg-blue-600 text-white rounded-2xl text-lg font-semibold hover:bg-blue-700">
              Thực hiện lại bài tư vấn
            </a>
            <a href="/" className="px-8 py-3 bg-white border border-blue-600 text-blue-600 rounded-2xl text-lg font-semibold hover:bg-gray-50">
              Về trang chủ →
            </a>
          </div>
        </div>
    </div>
  );
}

