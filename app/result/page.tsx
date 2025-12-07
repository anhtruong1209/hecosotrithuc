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

  const selectedUniversity = submission.university_id 
    ? universities.find(u => u.id === submission.university_id)
    : null;
  const selectedCountry = submission.study_abroad_country
    ? studyAbroadCountries.find(c => c.id === submission.study_abroad_country)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 text-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-400/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-400/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto py-12 px-6">
        <div className="glass-card rounded-2xl p-6 md:p-8 mb-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-700 mb-3">
            Kết Quả Tư Vấn Ngành Học
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            Dựa trên thông tin bạn cung cấp, hệ chuyên gia đã phân tích và gợi ý ngành phù hợp nhất.
          </p>
        </div>

        {(submission.fullname || submission.phone || submission.email) && (
          <div className="glass-card rounded-xl p-4 mb-6">
            <h4 className="text-sm font-semibold text-blue-700 mb-2">Thông tin người tham gia</h4>
            <div className="text-xs md:text-sm text-gray-700 space-y-1">
              <div><strong>Họ tên:</strong> {submission.fullname}</div>
              <div><strong>SĐT:</strong> {submission.phone}</div>
              <div><strong>Email:</strong> {submission.email}</div>
            </div>
          </div>
        )}

        <div className="glass-card rounded-2xl p-6 md:p-8 mb-6 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-blue-700 mb-3">{submission.major}</h2>
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            {submission.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
          <div className="glass-card rounded-xl p-4 md:p-6">
            <h3 className="text-base md:text-lg font-semibold mb-3 text-blue-700">Điểm mạnh nổi bật</h3>
            <ul className="list-disc ml-5 text-xs md:text-sm text-gray-700 space-y-1">
              {submission.strengths.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="glass-card rounded-xl p-4 md:p-6">
            <h3 className="text-base md:text-lg font-semibold mb-3 text-blue-700">Các nghề nghiệp phù hợp</h3>
            <ul className="list-disc ml-5 text-xs md:text-sm text-gray-700 space-y-1">
              {submission.jobs.map((job, i) => (
                <li key={i}>{job}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="glass-card rounded-xl p-4 md:p-6 mb-6">
          <h3 className="text-base md:text-lg font-semibold mb-3 text-blue-700">Một số ngành học liên quan</h3>
          <div className="flex flex-wrap gap-2">
            {submission.related_majors.map((item, i) => (
              <span key={i} className="px-3 py-1 glass border border-blue-200/50 rounded-lg text-xs md:text-sm text-gray-700">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-xl p-4 md:p-6 mb-6">
          <h3 className="text-base md:text-lg font-semibold mb-3 text-blue-700">Gợi ý khối thi phù hợp</h3>
          {submission.suggested_blocks && submission.suggested_blocks.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {submission.suggested_blocks.map((block, i) => (
                <span key={i} className="px-3 py-1.5 glass-dark border border-blue-400/50 rounded-full font-bold text-sm text-blue-600">
                  {block}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-600">Không có gợi ý khối thi cụ thể.</p>
          )}
        </div>

        {/* University/Study Abroad Info */}
        {(selectedUniversity || selectedCountry) && (
          <div className="glass-card rounded-xl p-4 md:p-6 mb-6">
            <h3 className="text-base md:text-lg font-semibold mb-3 text-blue-700">
              {submission.study_option === 'domestic' ? '🏫 Trường đại học mong muốn' : '✈️ Quốc gia du học'}
            </h3>
            {selectedUniversity && (
              <div className="text-sm text-gray-700">
                <div className="font-semibold text-blue-700">{selectedUniversity.name}</div>
                <div className="text-xs text-gray-600 mt-1">{selectedUniversity.location}</div>
              </div>
            )}
            {selectedCountry && (
              <div className="text-sm text-gray-700">
                <div className="font-semibold text-blue-700">{selectedCountry.flag} {selectedCountry.name}</div>
              </div>
            )}
          </div>
        )}

        <div className="text-center mt-6 flex flex-col md:flex-row justify-center items-center gap-3">
          <a href="/test" className="glass-button text-white px-6 py-3 rounded-xl text-sm md:text-base font-medium">
            Thực hiện lại bài tư vấn
          </a>
          <a href="/" className="glass border border-blue-200/50 text-blue-700 px-6 py-3 rounded-xl text-sm md:text-base font-medium hover:bg-blue-50/50 transition">
            Về trang chủ →
          </a>
        </div>
      </div>
    </div>
  );
}

