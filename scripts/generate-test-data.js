const fs = require('fs');
const path = require('path');

// Sample data for random generation
const fullnames = [
  'Nguyễn Văn An', 'Trần Thị Bình', 'Lê Văn Cường', 'Phạm Thị Dung', 'Hoàng Văn Đức',
  'Vũ Thị Em', 'Đặng Văn Phong', 'Bùi Thị Giang', 'Đỗ Văn Hải', 'Ngô Thị Hoa',
  'Lý Văn Hùng', 'Võ Thị Lan', 'Phan Văn Minh', 'Trương Thị Nga', 'Đinh Văn Oanh',
  'Dương Thị Phương', 'Lưu Văn Quang', 'Chu Thị Quỳnh', 'Tôn Văn Sơn', 'Vương Thị Tâm',
  'Đào Văn Tuấn', 'Lâm Thị Uyên', 'Hồ Văn Việt', 'Mai Thị Xuân', 'Bạch Văn Yên',
  'Cao Thị Anh', 'Đinh Văn Bảo', 'Hà Thị Chi', 'Kiều Văn Dũng', 'Lê Thị Hạnh'
];

const phones = [
  '0912345678', '0987654321', '0901234567', '0976543210', '0923456789',
  '0965432109', '0934567890', '0954321098', '0945678901', '0998765432',
  '0881234567', '0897654321', '0865432109', '0854321098', '0845678901'
];

const emails = [
  'nguyenvanan@gmail.com', 'tranthibinh@yahoo.com', 'levancuong@outlook.com',
  'phamthidung@gmail.com', 'hoangvanduc@yahoo.com', 'vuthiem@gmail.com',
  'dangvanphong@outlook.com', 'buithigiang@gmail.com', 'dovanhai@yahoo.com',
  'ngothihoa@gmail.com', 'lyvanhung@outlook.com', 'vothilan@gmail.com',
  'phanvanminh@yahoo.com', 'truongthinga@gmail.com', 'dinhvanoanh@outlook.com'
];

const sothichOptions = ['kythuat', 'sangtao', 'congnghe', 'xahoi', 'kinhte', 'quanly', 'dichvu', 'khachsan', 'dulich', 'llvt'];
const monmanhOptions = ['toan', 'ly', 'hoa', 'van', 'anh', 'sinh', 'tinhoc', 'congnghe', 'lichsu', 'dialy', 'gdtc', 'mythuat', 'amnhac'];
const tinhcachOptions = [
  'logic', 'sangtao', 'huongngoai', 'tinhte', 'thucte', 'kiendinh', 'tomo', 'doclap',
  'phantich', 'thantrong', 'tudo', 'bieucam', 'nhaycam', 'linhhoat', 'thanthien',
  'giupdo', 'dongcam', 'tuccam', 'thamvong', 'quyetdoan', 'ngannap', 'dangtincay', 'tuanthu'
];
const muctieuOptions = ['nghiencuu', 'kinhdoanh', 'quanly', 'chuyengia', 'giaoduc', 'sangtao', 'phucvu', 'kythuat'];
const studyOptions = ['domestic', 'abroad'];
const universityIds = ['hust', 'neu', 'vnu-hn', 'hcmus', 'ueh', 'fpt', 'rmit', 'hust-hcm', 'hcmus', 'hn-med', 'hn-edu'];
const countries = ['us', 'uk', 'au', 'ca', 'sg', 'jp', 'kr'];

const majors = [
  'Kỹ thuật – Cơ khí – Điện tử',
  'Khoa học – Công nghệ – Nghiên cứu',
  'Nghệ thuật – Thiết kế – Sáng tạo',
  'Giáo dục – Y tế – Công tác xã hội',
  'Kinh doanh – Quản lý – Lãnh đạo',
  'Kế toán – Hành chính – Văn phòng'
];

const descriptions = {
  'Kỹ thuật – Cơ khí – Điện tử': 'Bạn phù hợp với các ngành kỹ thuật, thực hành, máy móc và công nghệ ứng dụng.',
  'Khoa học – Công nghệ – Nghiên cứu': 'Bạn yêu thích phân tích, nghiên cứu, tìm hiểu bản chất sự vật, tư duy logic mạnh.',
  'Nghệ thuật – Thiết kế – Sáng tạo': 'Bạn có trí tưởng tượng phong phú, yêu cái đẹp và thích sáng tạo.',
  'Giáo dục – Y tế – Công tác xã hội': 'Bạn thích giúp đỡ người khác, hướng dẫn, giao tiếp và hỗ trợ xã hội.',
  'Kinh doanh – Quản lý – Lãnh đạo': 'Bạn có tố chất lãnh đạo, thích thuyết phục, kinh doanh và tổ chức.',
  'Kế toán – Hành chính – Văn phòng': 'Bạn làm tốt với dữ liệu, quy trình, tính chính xác và làm việc có tổ chức.'
};

const strengthsMap = {
  'Kỹ thuật – Cơ khí – Điện tử': ['Kỹ năng thao tác', 'Tư duy kỹ thuật', 'Sửa chữa – vận hành tốt'],
  'Khoa học – Công nghệ – Nghiên cứu': ['Phân tích', 'Nghiên cứu', 'Tư duy hệ thống'],
  'Nghệ thuật – Thiết kế – Sáng tạo': ['Thẩm mỹ', 'Ý tưởng sáng tạo', 'Hình ảnh hóa tốt'],
  'Giáo dục – Y tế – Công tác xã hội': ['Giao tiếp', 'Đồng cảm', 'Hỗ trợ người khác'],
  'Kinh doanh – Quản lý – Lãnh đạo': ['Thuyết phục', 'Đàm phán', 'Tư duy chiến lược'],
  'Kế toán – Hành chính – Văn phòng': ['Tỉ mỉ', 'Chính xác', 'Quản lý tài liệu']
};

const jobsMap = {
  'Kỹ thuật – Cơ khí – Điện tử': ['Kỹ sư cơ khí', 'Kỹ thuật điện', 'Kỹ thuật viên vận hành'],
  'Khoa học – Công nghệ – Nghiên cứu': ['Nhà nghiên cứu', 'Khoa học dữ liệu', 'Kỹ sư AI'],
  'Nghệ thuật – Thiết kế – Sáng tạo': ['Designer', 'UI/UX', 'Họa sĩ kỹ thuật số'],
  'Giáo dục – Y tế – Công tác xã hội': ['Giáo viên', 'Điều dưỡng', 'Tư vấn viên'],
  'Kinh doanh – Quản lý – Lãnh đạo': ['Quản trị kinh doanh', 'Kinh doanh', 'Marketing'],
  'Kế toán – Hành chính – Văn phòng': ['Kế toán', 'Hành chính văn phòng', 'Thống kê']
};

const relatedMajorsMap = {
  'Kỹ thuật – Cơ khí – Điện tử': ['Cơ điện tử', 'Tự động hóa', 'Kỹ thuật ô tô'],
  'Khoa học – Công nghệ – Nghiên cứu': ['Công nghệ sinh học', 'Khoa học máy tính', 'Toán ứng dụng'],
  'Nghệ thuật – Thiết kế – Sáng tạo': ['Đồ họa', 'Truyền thông đa phương tiện', 'Thiết kế thời trang'],
  'Giáo dục – Y tế – Công tác xã hội': ['Tâm lý học', 'Công tác xã hội', 'Sư phạm'],
  'Kinh doanh – Quản lý – Lãnh đạo': ['Kinh tế', 'Marketing', 'Quản trị nhân lực'],
  'Kế toán – Hành chính – Văn phòng': ['Kế toán kiểm toán', 'Tài chính', 'Hệ thống thông tin quản lý']
};

const suggestedBlocksMap = {
  'Kỹ thuật – Cơ khí – Điện tử': ['A00', 'A01', 'D07'],
  'Khoa học – Công nghệ – Nghiên cứu': ['A00', 'A01', 'B00'],
  'Nghệ thuật – Thiết kế – Sáng tạo': ['V00', 'H00', 'N00'],
  'Giáo dục – Y tế – Công tác xã hội': ['C00', 'C14', 'D01'],
  'Kinh doanh – Quản lý – Lãnh đạo': ['D01', 'A01'],
  'Kế toán – Hành chính – Văn phòng': ['A01', 'D01']
};

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomItems(array, min = 1, max = 3) {
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

function randomRScores() {
  return {
    R: Math.floor(Math.random() * 40),
    I: Math.floor(Math.random() * 40),
    A: Math.floor(Math.random() * 40),
    S: Math.floor(Math.random() * 40),
    E: Math.floor(Math.random() * 40),
    C: Math.floor(Math.random() * 40)
  };
}

function generateSubmission(id) {
  const hasFullInfo = Math.random() > 0.3; // 70% có đầy đủ thông tin
  const major = randomItem(majors);
  const studyOption = randomItem(studyOptions);
  
  // Generate test results for some submissions
  const testsCompleted = [];
  if (Math.random() > 0.5) {
    const testTypes = ['riasec', 'mbti', 'interest', 'aptitude'];
    const selectedTests = randomItems(testTypes, 1, 2);
    selectedTests.forEach(testType => {
      testsCompleted.push({
        test_type: testType,
        test_name: testType === 'riasec' ? 'RIASEC 20 Câu' : 
                   testType === 'mbti' ? 'Test Tính Cách MBTI' :
                   testType === 'interest' ? 'Test Sở Thích Nghề Nghiệp' :
                   'Test Năng Lực Học Tập',
        result: testType === 'riasec' ? { topType: randomItem(['R', 'I', 'A', 'S', 'E', 'C']), scores: randomRScores() } : {},
        completed_at: new Date(Date.now() - Math.random() * 30 * 24 * 60 * 60 * 1000).toISOString()
      });
    });
  }

  const submission = {
    id: id,
    fullname: hasFullInfo ? randomItem(fullnames) : (Math.random() > 0.5 ? randomItem(fullnames) : ''),
    phone: hasFullInfo ? randomItem(phones) : (Math.random() > 0.5 ? randomItem(phones) : ''),
    email: hasFullInfo ? randomItem(emails) : (Math.random() > 0.5 ? randomItem(emails) : ''),
    ip_address: `192.168.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`,
    sothich: randomItem(sothichOptions),
    monmanh: randomItems(monmanhOptions, 1, 3),
    tinhcach: randomItems(tinhcachOptions, 2, 5),
    muctieu: randomItem(muctieuOptions),
    study_option: studyOption,
    university_id: studyOption === 'domestic' ? randomItem(universityIds) : undefined,
    study_abroad_country: studyOption === 'abroad' ? randomItem(countries) : undefined,
    r_scores: randomRScores(),
    major: major,
    description: descriptions[major],
    strengths: strengthsMap[major],
    jobs: jobsMap[major],
    related_majors: relatedMajorsMap[major],
    suggested_blocks: suggestedBlocksMap[major],
    created_at: new Date(Date.now() - Math.random() * 60 * 24 * 60 * 60 * 1000).toISOString()
  };

  if (testsCompleted.length > 0) {
    submission.tests_completed = testsCompleted;
  }

  return submission;
}

// Generate 100 submissions
const submissions = [];
for (let i = 1; i <= 300; i++) {
  submissions.push(generateSubmission(i));
}

// Create database structure
const db = {
  submissions: submissions,
  admins: []
};

// Write to file
const dbPath = path.join(__dirname, '..', 'lib', 'db.json');
fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), 'utf-8');

console.log(`✅ Đã tạo thành công ${submissions.length} submissions trong ${dbPath}`);
console.log(`📊 Thống kê:`);
console.log(`   - Có email: ${submissions.filter(s => s.email).length}`);
console.log(`   - Có phone: ${submissions.filter(s => s.phone).length}`);
console.log(`   - Có fullname: ${submissions.filter(s => s.fullname).length}`);
console.log(`   - Có test results: ${submissions.filter(s => s.tests_completed && s.tests_completed.length > 0).length}`);

