const { MongoClient } = require('mongodb');

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://admin:PEiD7OdhscOeawTy@warrantly-verhical.hsdx3um.mongodb.net/?appName=hecosotrithuc';
const DB_NAME = process.env.MONGODB_DB_NAME || 'hecosotrithuc';

// Sample data for random generation
const fullnames = [
  'Nguyễn Văn An', 'Trần Thị Bình', 'Lê Văn Cường', 'Phạm Thị Dung', 'Hoàng Văn Đức',
  'Vũ Thị Em', 'Đặng Văn Phong', 'Bùi Thị Giang', 'Đỗ Văn Hải', 'Ngô Thị Hoa',
  'Lý Văn Hùng', 'Võ Thị Lan', 'Phan Văn Minh', 'Trương Thị Nga', 'Đinh Văn Oanh',
  'Dương Thị Phương', 'Lưu Văn Quang', 'Chu Thị Quỳnh', 'Tôn Văn Sơn', 'Vương Thị Tâm',
  'Đào Văn Tuấn', 'Lâm Thị Uyên', 'Hồ Văn Việt', 'Mai Thị Xuân', 'Bạch Văn Yên',
  'Cao Thị Anh', 'Đinh Văn Bảo', 'Hà Thị Chi', 'Kiều Văn Dũng', 'Lê Thị Hạnh',
  'Nguyễn Thị Hương', 'Trần Văn Khánh', 'Lê Thị Linh', 'Phạm Văn Long', 'Hoàng Thị Mai',
  'Vũ Văn Nam', 'Đặng Thị Oanh', 'Bùi Văn Phúc', 'Đỗ Thị Quyên', 'Ngô Văn Sơn',
  'Lý Thị Thanh', 'Võ Văn Thành', 'Phan Thị Uyên', 'Trương Văn Việt', 'Đinh Thị Yến'
];

const phones = [
  '0912345678', '0987654321', '0901234567', '0976543210', '0923456789',
  '0965432109', '0934567890', '0954321098', '0945678901', '0998765432',
  '0881234567', '0897654321', '0865432109', '0854321098', '0845678901',
  '0321234567', '0337654321', '0345432109', '0354321098', '0365678901'
];

const emails = [
  'nguyenvanan@gmail.com', 'tranthibinh@yahoo.com', 'levancuong@outlook.com',
  'phamthidung@gmail.com', 'hoangvanduc@yahoo.com', 'vuthiem@gmail.com',
  'dangvanphong@outlook.com', 'buithigiang@gmail.com', 'dovanhai@yahoo.com',
  'ngothihoa@gmail.com', 'lyvanhung@outlook.com', 'vothilan@gmail.com',
  'phanvanminh@yahoo.com', 'truongthinga@gmail.com', 'dinhvanoanh@outlook.com',
  'duongthiphuong@gmail.com', 'luuvanquang@yahoo.com', 'chuthiquynh@outlook.com',
  'tonvanson@gmail.com', 'vuongthitam@yahoo.com'
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
const universityIds = ['hust', 'neu', 'vnu', 'hust-hcm', 'hcmus', 'ueh', 'fpt', 'rmit', 'hust-med', 'hcm-med', 'ftu'];
const countries = ['us', 'uk', 'au', 'ca', 'sg', 'jp', 'kr'];

// Major groups mapping
const majorGroups = {
  'R': {
    name: 'Kỹ thuật – Cơ khí – Điện tử',
    description: 'Nhóm ngành phù hợp với những người yêu thích làm việc với máy móc, kỹ thuật, thực hành và công nghệ ứng dụng.',
    strengths: ['Kỹ năng thao tác', 'Tư duy kỹ thuật', 'Sửa chữa – vận hành tốt'],
    jobs: ['Kỹ sư cơ khí', 'Kỹ thuật điện', 'Kỹ thuật viên vận hành'],
    related_majors: ['Cơ điện tử', 'Tự động hóa', 'Kỹ thuật ô tô', 'Kỹ thuật cơ khí', 'Kỹ thuật điện', 'Kỹ thuật điện tử'],
    suggested_blocks: ['A00', 'A01', 'D07']
  },
  'I': {
    name: 'Khoa học – Công nghệ – Nghiên cứu',
    description: 'Nhóm ngành dành cho những người yêu thích phân tích, nghiên cứu, tìm hiểu bản chất sự vật và có tư duy logic mạnh.',
    strengths: ['Phân tích', 'Nghiên cứu', 'Tư duy hệ thống'],
    jobs: ['Nhà nghiên cứu', 'Khoa học dữ liệu', 'Kỹ sư AI'],
    related_majors: ['Công nghệ sinh học', 'Khoa học máy tính', 'Toán ứng dụng', 'Vật lý học', 'Hóa học', 'Sinh học'],
    suggested_blocks: ['A00', 'A01', 'B00']
  },
  'A': {
    name: 'Nghệ thuật – Thiết kế – Sáng tạo',
    description: 'Nhóm ngành phù hợp với những người có trí tưởng tượng phong phú, yêu cái đẹp và thích sáng tạo.',
    strengths: ['Thẩm mỹ', 'Ý tưởng sáng tạo', 'Hình ảnh hóa tốt'],
    jobs: ['Designer', 'UI/UX Designer', 'Họa sĩ kỹ thuật số'],
    related_majors: ['Đồ họa', 'Truyền thông đa phương tiện', 'Thiết kế thời trang', 'Kiến trúc', 'Mỹ thuật'],
    suggested_blocks: ['V00', 'H00', 'N00']
  },
  'S': {
    name: 'Giáo dục – Y tế – Công tác xã hội',
    description: 'Nhóm ngành dành cho những người thích giúp đỡ người khác, hướng dẫn, giao tiếp và hỗ trợ xã hội.',
    strengths: ['Giao tiếp', 'Đồng cảm', 'Hỗ trợ người khác'],
    jobs: ['Giáo viên', 'Điều dưỡng', 'Tư vấn viên'],
    related_majors: ['Tâm lý học', 'Công tác xã hội', 'Sư phạm', 'Y học', 'Điều dưỡng'],
    suggested_blocks: ['C00', 'C14', 'D01']
  },
  'E': {
    name: 'Kinh doanh – Quản lý – Lãnh đạo',
    description: 'Nhóm ngành phù hợp với những người có tố chất lãnh đạo, thích thuyết phục, kinh doanh và tổ chức.',
    strengths: ['Thuyết phục', 'Đàm phán', 'Tư duy chiến lược'],
    jobs: ['Quản trị kinh doanh', 'Kinh doanh', 'Marketing'],
    related_majors: ['Kinh tế', 'Marketing', 'Quản trị nhân lực', 'Quản trị kinh doanh', 'Tài chính'],
    suggested_blocks: ['D01', 'A01']
  },
  'C': {
    name: 'Kế toán – Hành chính – Văn phòng',
    description: 'Nhóm ngành dành cho những người làm tốt với dữ liệu, quy trình, tính chính xác và làm việc có tổ chức.',
    strengths: ['Tỉ mỉ', 'Chính xác', 'Quản lý tài liệu'],
    jobs: ['Kế toán', 'Hành chính văn phòng', 'Thống kê'],
    related_majors: ['Kế toán kiểm toán', 'Tài chính', 'Hệ thống thông tin quản lý', 'Quản trị văn phòng'],
    suggested_blocks: ['A01', 'D01']
  }
};

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function randomItems(array, min = 1, max = 3) {
  const count = Math.floor(Math.random() * (max - min + 1)) + min;
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Generate RIASEC scores with realistic distribution
// Top group should have highest score, others should be lower
function generateRealisticRScores(topGroup = null) {
  const groups = ['R', 'I', 'A', 'S', 'E', 'C'];
  const selectedTop = topGroup || randomItem(groups);
  
  const scores = {};
  
  // Top group: 30-50 points
  scores[selectedTop] = Math.floor(Math.random() * 21) + 30;
  
  // Second group: 20-35 points (lower than top)
  const secondGroup = randomItem(groups.filter(g => g !== selectedTop));
  scores[secondGroup] = Math.floor(Math.random() * 16) + 20;
  
  // Third group: 15-25 points
  const remainingGroups = groups.filter(g => g !== selectedTop && g !== secondGroup);
  const thirdGroup = randomItem(remainingGroups);
  scores[thirdGroup] = Math.floor(Math.random() * 11) + 15;
  
  // Other groups: 5-15 points
  groups.forEach(group => {
    if (!scores[group]) {
      scores[group] = Math.floor(Math.random() * 11) + 5;
    }
  });
  
  return { scores, topGroup: selectedTop };
}

function generateSubmission(id) {
  const hasFullInfo = Math.random() > 0.2; // 80% có đầy đủ thông tin
  const studyOption = randomItem(studyOptions);
  
  // Generate realistic RIASEC scores
  const { scores, topGroup } = generateRealisticRScores();
  const majorInfo = majorGroups[topGroup];
  
  // Generate test results for some submissions
  const testsCompleted = [];
  if (Math.random() > 0.3) { // 70% có test results
    const testTypes = ['riasec', 'mbti', 'interest', 'aptitude'];
    const selectedTests = randomItems(testTypes, 1, 3);
    selectedTests.forEach(testType => {
      testsCompleted.push({
        test_type: testType,
        test_name: testType === 'riasec' ? 'RIASEC 20 Câu' : 
                   testType === 'mbti' ? 'Test Tính Cách MBTI' :
                   testType === 'interest' ? 'Test Sở Thích Nghề Nghiệp' :
                   'Test Năng Lực Học Tập',
        result: testType === 'riasec' ? { 
          topType: topGroup, 
          scores: scores 
        } : {},
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
    r_scores: scores,
    major: majorInfo.name,
    description: majorInfo.description,
    strengths: majorInfo.strengths,
    jobs: majorInfo.jobs,
    related_majors: majorInfo.related_majors,
    suggested_blocks: majorInfo.suggested_blocks,
    created_at: new Date(Date.now() - Math.random() * 60 * 24 * 60 * 60 * 1000).toISOString()
  };

  if (testsCompleted.length > 0) {
    submission.tests_completed = testsCompleted;
  }

  return submission;
}

async function generateAndInsertData() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB\n');
    
    const db = client.db(DB_NAME);
    const submissionsCollection = db.collection('submissions');
    
    // Clear existing submissions
    await submissionsCollection.deleteMany({});
    console.log('🗑️  Cleared existing submissions\n');
    
    // Generate 200 submissions
    const submissions = [];
    for (let i = 1; i <= 200; i++) {
      submissions.push(generateSubmission(i));
    }
    
    // Insert into MongoDB
    const result = await submissionsCollection.insertMany(submissions);
    console.log(`✅ Đã tạo thành công ${result.insertedCount} submissions trong MongoDB`);
    console.log(`\n📊 Thống kê:`);
    console.log(`   - Có email: ${submissions.filter(s => s.email).length}`);
    console.log(`   - Có phone: ${submissions.filter(s => s.phone).length}`);
    console.log(`   - Có fullname: ${submissions.filter(s => s.fullname).length}`);
    console.log(`   - Có test results: ${submissions.filter(s => s.tests_completed && s.tests_completed.length > 0).length}`);
    
    // Thống kê theo nhóm ngành
    const majorStats = {};
    submissions.forEach(s => {
      const major = s.major;
      majorStats[major] = (majorStats[major] || 0) + 1;
    });
    console.log(`\n📈 Phân bố theo nhóm ngành:`);
    Object.entries(majorStats).sort((a, b) => b[1] - a[1]).forEach(([major, count]) => {
      console.log(`   - ${major}: ${count} submissions`);
    });
    
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  } finally {
    await client.close();
  }
}

// Run generation
generateAndInsertData();

