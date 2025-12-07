// Danh sách các trường đại học ở Việt Nam
export interface University {
  id: string;
  name: string;
  code: string;
  type: 'public' | 'private';
  location: string;
  website?: string;
  majors: string[]; // Các ngành đào tạo chính
}

export const universities: University[] = [
  // Top trường công lập
  {
    id: 'hust',
    name: 'Đại học Bách khoa Hà Nội',
    code: 'HUST',
    type: 'public',
    location: 'Hà Nội',
    website: 'https://www.hust.edu.vn',
    majors: ['Công nghệ thông tin', 'Kỹ thuật điện', 'Kỹ thuật cơ khí', 'Kỹ thuật hóa học', 'Kỹ thuật xây dựng']
  },
  {
    id: 'vnu',
    name: 'Đại học Quốc gia Hà Nội',
    code: 'VNU',
    type: 'public',
    location: 'Hà Nội',
    website: 'https://www.vnu.edu.vn',
    majors: ['Khoa học máy tính', 'Toán học', 'Vật lý', 'Hóa học', 'Sinh học', 'Ngôn ngữ học']
  },
  {
    id: 'hust-hcm',
    name: 'Đại học Bách khoa TP.HCM',
    code: 'HCMUT',
    type: 'public',
    location: 'TP. Hồ Chí Minh',
    website: 'https://www.hcmut.edu.vn',
    majors: ['Công nghệ thông tin', 'Kỹ thuật điện', 'Kỹ thuật cơ khí', 'Kỹ thuật hóa học']
  },
  {
    id: 'hcmus',
    name: 'Đại học Khoa học Tự nhiên TP.HCM',
    code: 'HCMUS',
    type: 'public',
    location: 'TP. Hồ Chí Minh',
    majors: ['Khoa học máy tính', 'Toán học', 'Vật lý', 'Hóa học', 'Sinh học']
  },
  {
    id: 'ueh',
    name: 'Đại học Kinh tế TP.HCM',
    code: 'UEH',
    type: 'public',
    location: 'TP. Hồ Chí Minh',
    majors: ['Kinh tế', 'Quản trị kinh doanh', 'Tài chính - Ngân hàng', 'Kế toán', 'Marketing']
  },
  {
    id: 'neu',
    name: 'Đại học Kinh tế Quốc dân',
    code: 'NEU',
    type: 'public',
    location: 'Hà Nội',
    majors: ['Kinh tế', 'Quản trị kinh doanh', 'Tài chính - Ngân hàng', 'Kế toán']
  },
  {
    id: 'ftu',
    name: 'Đại học Ngoại thương',
    code: 'FTU',
    type: 'public',
    location: 'Hà Nội',
    majors: ['Kinh tế đối ngoại', 'Quản trị kinh doanh', 'Kế toán', 'Tài chính - Ngân hàng']
  },
  {
    id: 'hust-arch',
    name: 'Đại học Kiến trúc Hà Nội',
    code: 'HAU',
    type: 'public',
    location: 'Hà Nội',
    majors: ['Kiến trúc', 'Quy hoạch đô thị', 'Xây dựng', 'Thiết kế nội thất']
  },
  {
    id: 'hcm-arch',
    name: 'Đại học Kiến trúc TP.HCM',
    code: 'UAH',
    type: 'public',
    location: 'TP. Hồ Chí Minh',
    majors: ['Kiến trúc', 'Quy hoạch đô thị', 'Xây dựng', 'Thiết kế nội thất']
  },
  {
    id: 'hust-med',
    name: 'Đại học Y Hà Nội',
    code: 'HMU',
    type: 'public',
    location: 'Hà Nội',
    majors: ['Y đa khoa', 'Dược học', 'Điều dưỡng', 'Y tế công cộng']
  },
  {
    id: 'hcm-med',
    name: 'Đại học Y Dược TP.HCM',
    code: 'UMP',
    type: 'public',
    location: 'TP. Hồ Chí Minh',
    majors: ['Y đa khoa', 'Dược học', 'Điều dưỡng']
  },
  {
    id: 'hust-law',
    name: 'Đại học Luật Hà Nội',
    code: 'HUL',
    type: 'public',
    location: 'Hà Nội',
    majors: ['Luật', 'Luật kinh tế', 'Luật quốc tế']
  },
  {
    id: 'hcm-law',
    name: 'Đại học Luật TP.HCM',
    code: 'UL',
    type: 'public',
    location: 'TP. Hồ Chí Minh',
    majors: ['Luật', 'Luật kinh tế']
  },
  {
    id: 'hust-edu',
    name: 'Đại học Sư phạm Hà Nội',
    code: 'HNUE',
    type: 'public',
    location: 'Hà Nội',
    majors: ['Sư phạm Toán', 'Sư phạm Văn', 'Sư phạm Anh', 'Giáo dục Tiểu học']
  },
  {
    id: 'hcm-edu',
    name: 'Đại học Sư phạm TP.HCM',
    code: 'HCMUE',
    type: 'public',
    location: 'TP. Hồ Chí Minh',
    majors: ['Sư phạm Toán', 'Sư phạm Văn', 'Sư phạm Anh']
  },
  {
    id: 'hust-arts',
    name: 'Đại học Mỹ thuật Việt Nam',
    code: 'VNUA',
    type: 'public',
    location: 'Hà Nội',
    majors: ['Hội họa', 'Điêu khắc', 'Thiết kế đồ họa', 'Thiết kế thời trang']
  },
  {
    id: 'hcm-arts',
    name: 'Đại học Mỹ thuật TP.HCM',
    code: 'HCMUFA',
    type: 'public',
    location: 'TP. Hồ Chí Minh',
    majors: ['Hội họa', 'Thiết kế đồ họa', 'Thiết kế thời trang']
  },
  // Trường tư thục nổi tiếng
  {
    id: 'fpt',
    name: 'Đại học FPT',
    code: 'FPT',
    type: 'private',
    location: 'Hà Nội, TP.HCM, Đà Nẵng',
    website: 'https://www.fpt.edu.vn',
    majors: ['Công nghệ thông tin', 'Kinh doanh', 'Thiết kế đồ họa', 'Ngôn ngữ Anh']
  },
  {
    id: 'rmit',
    name: 'Đại học RMIT Việt Nam',
    code: 'RMIT',
    type: 'private',
    location: 'TP. Hồ Chí Minh, Hà Nội',
    website: 'https://www.rmit.edu.vn',
    majors: ['Công nghệ thông tin', 'Kinh doanh', 'Truyền thông', 'Thiết kế']
  },
  {
    id: 'ton-duc-thang',
    name: 'Đại học Tôn Đức Thắng',
    code: 'TDTU',
    type: 'private',
    location: 'TP. Hồ Chí Minh',
    majors: ['Công nghệ thông tin', 'Kinh tế', 'Kỹ thuật', 'Y dược']
  },
  {
    id: 'hutech',
    name: 'Đại học Công nghệ TP.HCM',
    code: 'HUTECH',
    type: 'private',
    location: 'TP. Hồ Chí Minh',
    majors: ['Công nghệ thông tin', 'Kỹ thuật', 'Kinh tế', 'Thiết kế']
  },
  {
    id: 'greenwich',
    name: 'Đại học Greenwich Việt Nam',
    code: 'GREENWICH',
    type: 'private',
    location: 'Hà Nội, TP.HCM, Đà Nẵng',
    majors: ['Công nghệ thông tin', 'Kinh doanh', 'Thiết kế đồ họa']
  },
  // Các trường khu vực
  {
    id: 'dut',
    name: 'Đại học Bách khoa Đà Nẵng',
    code: 'DUT',
    type: 'public',
    location: 'Đà Nẵng',
    majors: ['Công nghệ thông tin', 'Kỹ thuật điện', 'Kỹ thuật cơ khí']
  },
  {
    id: 'hue',
    name: 'Đại học Huế',
    code: 'HUE',
    type: 'public',
    location: 'Huế',
    majors: ['Khoa học máy tính', 'Kinh tế', 'Sư phạm', 'Y dược']
  },
  {
    id: 'ctu',
    name: 'Đại học Cần Thơ',
    code: 'CTU',
    type: 'public',
    location: 'Cần Thơ',
    majors: ['Công nghệ thông tin', 'Kinh tế', 'Nông nghiệp', 'Y dược']
  },
  {
    id: 'dthu',
    name: 'Đại học Thái Nguyên',
    code: 'TNU',
    type: 'public',
    location: 'Thái Nguyên',
    majors: ['Công nghệ thông tin', 'Kỹ thuật', 'Kinh tế', 'Y dược']
  }
];

// Danh sách quốc gia du học phổ biến
export const studyAbroadCountries = [
  { id: 'us', name: 'Hoa Kỳ', flag: '🇺🇸', popular: true },
  { id: 'uk', name: 'Vương quốc Anh', flag: '🇬🇧', popular: true },
  { id: 'au', name: 'Úc', flag: '🇦🇺', popular: true },
  { id: 'ca', name: 'Canada', flag: '🇨🇦', popular: true },
  { id: 'sg', name: 'Singapore', flag: '🇸🇬', popular: true },
  { id: 'jp', name: 'Nhật Bản', flag: '🇯🇵', popular: true },
  { id: 'kr', name: 'Hàn Quốc', flag: '🇰🇷', popular: true },
  { id: 'de', name: 'Đức', flag: '🇩🇪', popular: true },
  { id: 'fr', name: 'Pháp', flag: '🇫🇷', popular: true },
  { id: 'nl', name: 'Hà Lan', flag: '🇳🇱', popular: false },
  { id: 'nz', name: 'New Zealand', flag: '🇳🇿', popular: false },
  { id: 'ch', name: 'Thụy Sĩ', flag: '🇨🇭', popular: false },
  { id: 'se', name: 'Thụy Điển', flag: '🇸🇪', popular: false },
  { id: 'tw', name: 'Đài Loan', flag: '🇹🇼', popular: false },
  { id: 'cn', name: 'Trung Quốc', flag: '🇨🇳', popular: false }
];

// Hàm tìm kiếm trường theo ngành học
export function findUniversitiesByMajor(major: string): University[] {
  const majorLower = major.toLowerCase();
  return universities.filter(uni => 
    uni.majors.some(m => m.toLowerCase().includes(majorLower) || majorLower.includes(m.toLowerCase()))
  );
}

// Hàm lấy danh sách trường theo khu vực
export function getUniversitiesByLocation(location: string): University[] {
  return universities.filter(uni => 
    uni.location.toLowerCase().includes(location.toLowerCase())
  );
}

