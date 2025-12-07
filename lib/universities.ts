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
  // Top trường công lập - Hà Nội
  {
    id: 'hust',
    name: 'Đại học Bách khoa Hà Nội',
    code: 'HUST',
    type: 'public',
    location: 'Hà Nội',
    website: 'https://www.hust.edu.vn',
    majors: ['Công nghệ thông tin', 'Kỹ thuật điện', 'Kỹ thuật cơ khí', 'Kỹ thuật hóa học', 'Kỹ thuật xây dựng', 'Kỹ thuật điện tử', 'Tự động hóa', 'Cơ điện tử']
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
  },
  // Thêm các trường đại học khác
  {
    id: 'vnu-hcm',
    name: 'Đại học Quốc gia TP.HCM',
    code: 'VNU-HCM',
    type: 'public',
    location: 'TP. Hồ Chí Minh',
    majors: ['Công nghệ thông tin', 'Kinh tế', 'Luật', 'Khoa học xã hội']
  },
  {
    id: 'hust-ict',
    name: 'Học viện Công nghệ Bưu chính Viễn thông',
    code: 'PTIT',
    type: 'public',
    location: 'Hà Nội, TP.HCM',
    majors: ['Công nghệ thông tin', 'Điện tử viễn thông', 'An toàn thông tin', 'Kinh tế']
  },
  {
    id: 'hust-naval',
    name: 'Học viện Hải quân',
    code: 'NAVAL',
    type: 'public',
    location: 'Nha Trang',
    majors: ['Kỹ thuật hàng hải', 'Điều khiển tàu biển', 'Kỹ thuật điện tử']
  },
  {
    id: 'hust-military',
    name: 'Học viện Kỹ thuật Quân sự',
    code: 'MTA',
    type: 'public',
    location: 'Hà Nội',
    majors: ['Kỹ thuật quân sự', 'Công nghệ thông tin', 'Điện tử']
  },
  {
    id: 'hanoi-university',
    name: 'Đại học Hà Nội',
    code: 'HANU',
    type: 'public',
    location: 'Hà Nội',
    majors: ['Ngôn ngữ Anh', 'Ngôn ngữ Trung', 'Ngôn ngữ Nhật', 'Quan hệ quốc tế', 'Du lịch']
  },
  {
    id: 'hcm-open',
    name: 'Đại học Mở TP.HCM',
    code: 'OU',
    type: 'public',
    location: 'TP. Hồ Chí Minh',
    majors: ['Công nghệ thông tin', 'Kinh tế', 'Luật', 'Quản trị kinh doanh']
  },
  {
    id: 'hanoi-open',
    name: 'Đại học Mở Hà Nội',
    code: 'HOU',
    type: 'public',
    location: 'Hà Nội',
    majors: ['Công nghệ thông tin', 'Kinh tế', 'Luật', 'Quản trị kinh doanh']
  },
  {
    id: 'hust-transport',
    name: 'Đại học Giao thông Vận tải',
    code: 'UTC',
    type: 'public',
    location: 'Hà Nội, TP.HCM',
    majors: ['Kỹ thuật xây dựng', 'Kỹ thuật giao thông', 'Kỹ thuật cơ khí', 'Kinh tế vận tải']
  },
  {
    id: 'hust-water',
    name: 'Đại học Thủy lợi',
    code: 'TLU',
    type: 'public',
    location: 'Hà Nội',
    majors: ['Kỹ thuật xây dựng', 'Kỹ thuật môi trường', 'Công nghệ thông tin', 'Kinh tế']
  },
  {
    id: 'hust-forestry',
    name: 'Đại học Lâm nghiệp',
    code: 'VNUF',
    type: 'public',
    location: 'Hà Nội',
    majors: ['Lâm nghiệp', 'Quản lý tài nguyên rừng', 'Công nghệ chế biến lâm sản']
  },
  {
    id: 'hust-agriculture',
    name: 'Học viện Nông nghiệp Việt Nam',
    code: 'VNUA',
    type: 'public',
    location: 'Hà Nội',
    majors: ['Nông nghiệp', 'Chăn nuôi', 'Thú y', 'Công nghệ thực phẩm']
  },
  {
    id: 'hcm-agriculture',
    name: 'Đại học Nông Lâm TP.HCM',
    code: 'NLU',
    type: 'public',
    location: 'TP. Hồ Chí Minh',
    majors: ['Nông nghiệp', 'Lâm nghiệp', 'Thủy sản', 'Công nghệ thực phẩm']
  },
  {
    id: 'hust-fisheries',
    name: 'Đại học Thủy sản',
    code: 'NHA',
    type: 'public',
    location: 'Nha Trang',
    majors: ['Nuôi trồng thủy sản', 'Chế biến thủy sản', 'Quản lý tài nguyên biển']
  },
  {
    id: 'hust-culture',
    name: 'Đại học Văn hóa Hà Nội',
    code: 'HUC',
    type: 'public',
    location: 'Hà Nội',
    majors: ['Văn hóa học', 'Quản lý văn hóa', 'Du lịch', 'Bảo tàng học']
  },
  {
    id: 'hcm-culture',
    name: 'Đại học Văn hóa TP.HCM',
    code: 'HCMUC',
    type: 'public',
    location: 'TP. Hồ Chí Minh',
    majors: ['Văn hóa học', 'Quản lý văn hóa', 'Du lịch']
  },
  {
    id: 'hust-sports',
    name: 'Đại học Thể dục Thể thao',
    code: 'USSH',
    type: 'public',
    location: 'Hà Nội, TP.HCM',
    majors: ['Giáo dục thể chất', 'Huấn luyện thể thao', 'Y sinh học thể thao']
  },
  {
    id: 'hust-foreign-trade',
    name: 'Đại học Ngoại thương',
    code: 'FTU',
    type: 'public',
    location: 'Hà Nội, TP.HCM, Quảng Ninh',
    majors: ['Kinh tế đối ngoại', 'Thương mại quốc tế', 'Tài chính quốc tế', 'Marketing']
  },
  {
    id: 'hust-banking',
    name: 'Học viện Ngân hàng',
    code: 'BA',
    type: 'public',
    location: 'Hà Nội',
    majors: ['Tài chính - Ngân hàng', 'Kế toán', 'Quản trị kinh doanh', 'Kinh tế']
  },
  {
    id: 'hust-finance',
    name: 'Học viện Tài chính',
    code: 'AOF',
    type: 'public',
    location: 'Hà Nội',
    majors: ['Tài chính', 'Kế toán', 'Quản trị kinh doanh', 'Kinh tế']
  },
  {
    id: 'hust-diplomacy',
    name: 'Học viện Ngoại giao',
    code: 'DAV',
    type: 'public',
    location: 'Hà Nội',
    majors: ['Quan hệ quốc tế', 'Ngoại giao', 'Kinh tế quốc tế', 'Luật quốc tế']
  },
  {
    id: 'hust-journalism',
    name: 'Học viện Báo chí và Tuyên truyền',
    code: 'AJC',
    type: 'public',
    location: 'Hà Nội',
    majors: ['Báo chí', 'Truyền thông đại chúng', 'Quan hệ công chúng', 'Xuất bản']
  },
  {
    id: 'hcm-journalism',
    name: 'Học viện Cán bộ TP.HCM',
    code: 'HCMA',
    type: 'public',
    location: 'TP. Hồ Chí Minh',
    majors: ['Chính trị học', 'Quản lý nhà nước', 'Báo chí']
  },
  {
    id: 'hust-communication',
    name: 'Học viện Công nghệ Bưu chính Viễn thông',
    code: 'PTIT',
    type: 'public',
    location: 'Hà Nội, TP.HCM',
    majors: ['Công nghệ thông tin', 'Điện tử viễn thông', 'An toàn thông tin']
  },
  {
    id: 'hust-industry',
    name: 'Đại học Công nghiệp Hà Nội',
    code: 'HaUI',
    type: 'public',
    location: 'Hà Nội',
    majors: ['Công nghệ thông tin', 'Kỹ thuật điện', 'Kỹ thuật cơ khí', 'Quản trị kinh doanh']
  },
  {
    id: 'hcm-industry',
    name: 'Đại học Công nghiệp TP.HCM',
    code: 'IUH',
    type: 'public',
    location: 'TP. Hồ Chí Minh',
    majors: ['Công nghệ thông tin', 'Kỹ thuật điện', 'Kỹ thuật cơ khí', 'Quản trị kinh doanh']
  },
  {
    id: 'hust-chemistry',
    name: 'Đại học Công nghiệp Thực phẩm TP.HCM',
    code: 'HUFI',
    type: 'public',
    location: 'TP. Hồ Chí Minh',
    majors: ['Công nghệ thực phẩm', 'Công nghệ sinh học', 'Kỹ thuật hóa học']
  },
  {
    id: 'hust-textile',
    name: 'Đại học Bách khoa Hà Nội - Cơ sở 2',
    code: 'HUST2',
    type: 'public',
    location: 'Hà Nội',
    majors: ['Công nghệ dệt may', 'Thiết kế thời trang', 'Kỹ thuật dệt']
  },
  {
    id: 'hcm-textile',
    name: 'Đại học Công nghiệp Dệt May Hà Nội',
    code: 'HICT',
    type: 'public',
    location: 'Hà Nội',
    majors: ['Công nghệ dệt may', 'Thiết kế thời trang']
  },
  {
    id: 'hust-mining',
    name: 'Đại học Mỏ - Địa chất',
    code: 'HUMG',
    type: 'public',
    location: 'Hà Nội',
    majors: ['Kỹ thuật mỏ', 'Địa chất', 'Dầu khí', 'Kỹ thuật trắc địa']
  },
  {
    id: 'hust-petroleum',
    name: 'Đại học Dầu khí Việt Nam',
    code: 'PVU',
    type: 'public',
    location: 'Vũng Tàu',
    majors: ['Kỹ thuật dầu khí', 'Kỹ thuật hóa học', 'Kỹ thuật môi trường']
  },
  {
    id: 'hust-environment',
    name: 'Đại học Tài nguyên và Môi trường Hà Nội',
    code: 'HUNRE',
    type: 'public',
    location: 'Hà Nội',
    majors: ['Quản lý tài nguyên', 'Kỹ thuật môi trường', 'Biến đổi khí hậu']
  },
  {
    id: 'hcm-environment',
    name: 'Đại học Tài nguyên và Môi trường TP.HCM',
    code: 'HCMUNRE',
    type: 'public',
    location: 'TP. Hồ Chí Minh',
    majors: ['Quản lý tài nguyên', 'Kỹ thuật môi trường']
  },
  // Trường tư thục nổi tiếng
  {
    id: 'dai-hoc-duy-tan',
    name: 'Đại học Duy Tân',
    code: 'DTU',
    type: 'private',
    location: 'Đà Nẵng',
    majors: ['Công nghệ thông tin', 'Kỹ thuật', 'Kinh tế', 'Y dược', 'Du lịch']
  },
  {
    id: 'dai-hoc-phenikaa',
    name: 'Đại học Phenikaa',
    code: 'PHENA',
    type: 'private',
    location: 'Hà Nội',
    majors: ['Công nghệ thông tin', 'Kỹ thuật', 'Kinh tế']
  },
  {
    id: 'dai-hoc-van-lang',
    name: 'Đại học Văn Lang',
    code: 'VLU',
    type: 'private',
    location: 'TP. Hồ Chí Minh',
    majors: ['Công nghệ thông tin', 'Kinh tế', 'Thiết kế', 'Du lịch']
  },
  {
    id: 'dai-hoc-nguyen-tat-thanh',
    name: 'Đại học Nguyễn Tất Thành',
    code: 'NTTU',
    type: 'private',
    location: 'TP. Hồ Chí Minh',
    majors: ['Công nghệ thông tin', 'Kinh tế', 'Y dược', 'Du lịch']
  },
  {
    id: 'dai-hoc-quoc-te',
    name: 'Đại học Quốc tế - ĐHQG TP.HCM',
    code: 'IU',
    type: 'public',
    location: 'TP. Hồ Chí Minh',
    majors: ['Công nghệ thông tin', 'Kinh tế', 'Kỹ thuật', 'Y dược']
  },
  {
    id: 'dai-hoc-viet-nhat',
    name: 'Đại học Việt Nhật',
    code: 'VJU',
    type: 'public',
    location: 'Hà Nội',
    majors: ['Công nghệ thông tin', 'Kỹ thuật', 'Kinh tế', 'Quản lý']
  },
  {
    id: 'dai-hoc-viet-duc',
    name: 'Đại học Việt Đức',
    code: 'VGU',
    type: 'public',
    location: 'Bình Dương',
    majors: ['Kỹ thuật', 'Kinh tế', 'Quản lý', 'Khoa học máy tính']
  },
  {
    id: 'dai-hoc-bach-khoa-danang',
    name: 'Đại học Bách khoa Đà Nẵng',
    code: 'DUT',
    type: 'public',
    location: 'Đà Nẵng',
    majors: ['Công nghệ thông tin', 'Kỹ thuật điện', 'Kỹ thuật cơ khí', 'Kỹ thuật xây dựng']
  },
  {
    id: 'dai-hoc-kinh-te-danang',
    name: 'Đại học Kinh tế Đà Nẵng',
    code: 'DUE',
    type: 'public',
    location: 'Đà Nẵng',
    majors: ['Kinh tế', 'Quản trị kinh doanh', 'Tài chính - Ngân hàng', 'Kế toán']
  },
  {
    id: 'dai-hoc-nha-trang',
    name: 'Đại học Nha Trang',
    code: 'NTU',
    type: 'public',
    location: 'Nha Trang',
    majors: ['Công nghệ thực phẩm', 'Nuôi trồng thủy sản', 'Kinh tế', 'Du lịch']
  },
  {
    id: 'dai-hoc-tay-nguyen',
    name: 'Đại học Tây Nguyên',
    code: 'TTN',
    type: 'public',
    location: 'Đắk Lắk',
    majors: ['Nông nghiệp', 'Y dược', 'Kinh tế', 'Sư phạm']
  },
  {
    id: 'dai-hoc-an-giang',
    name: 'Đại học An Giang',
    code: 'AGU',
    type: 'public',
    location: 'An Giang',
    majors: ['Sư phạm', 'Nông nghiệp', 'Kinh tế', 'Công nghệ thông tin']
  },
  {
    id: 'dai-hoc-dong-thap',
    name: 'Đại học Đồng Tháp',
    code: 'DTHU',
    type: 'public',
    location: 'Đồng Tháp',
    majors: ['Sư phạm', 'Nông nghiệp', 'Kinh tế']
  },
  {
    id: 'dai-hoc-tien-giang',
    name: 'Đại học Tiền Giang',
    code: 'TGU',
    type: 'public',
    location: 'Tiền Giang',
    majors: ['Sư phạm', 'Nông nghiệp', 'Kinh tế']
  },
  {
    id: 'dai-hoc-tra-vinh',
    name: 'Đại học Trà Vinh',
    code: 'TVU',
    type: 'public',
    location: 'Trà Vinh',
    majors: ['Sư phạm', 'Nông nghiệp', 'Kinh tế', 'Công nghệ thông tin']
  },
  {
    id: 'dai-hoc-soc-trang',
    name: 'Đại học Sóc Trăng',
    code: 'STU',
    type: 'public',
    location: 'Sóc Trăng',
    majors: ['Sư phạm', 'Nông nghiệp', 'Kinh tế']
  },
  {
    id: 'dai-hoc-bac-lieu',
    name: 'Đại học Bạc Liêu',
    code: 'BLU',
    type: 'public',
    location: 'Bạc Liêu',
    majors: ['Sư phạm', 'Nông nghiệp', 'Kinh tế']
  },
  {
    id: 'dai-hoc-ca-mau',
    name: 'Đại học Cà Mau',
    code: 'CMU',
    type: 'public',
    location: 'Cà Mau',
    majors: ['Sư phạm', 'Nông nghiệp', 'Kinh tế']
  },
  {
    id: 'dai-hoc-quy-nhon',
    name: 'Đại học Quy Nhơn',
    code: 'QNU',
    type: 'public',
    location: 'Bình Định',
    majors: ['Sư phạm', 'Kinh tế', 'Công nghệ thông tin']
  },
  {
    id: 'dai-hoc-quang-nam',
    name: 'Đại học Quảng Nam',
    code: 'QNU',
    type: 'public',
    location: 'Quảng Nam',
    majors: ['Sư phạm', 'Kinh tế', 'Công nghệ thông tin']
  },
  {
    id: 'dai-hoc-quang-ngai',
    name: 'Đại học Phạm Văn Đồng',
    code: 'PVD',
    type: 'public',
    location: 'Quảng Ngãi',
    majors: ['Sư phạm', 'Kinh tế']
  },
  {
    id: 'dai-hoc-khanh-hoa',
    name: 'Đại học Khánh Hòa',
    code: 'KHU',
    type: 'public',
    location: 'Khánh Hòa',
    majors: ['Sư phạm', 'Kinh tế', 'Du lịch']
  },
  {
    id: 'dai-hoc-phu-yen',
    name: 'Đại học Phú Yên',
    code: 'PYU',
    type: 'public',
    location: 'Phú Yên',
    majors: ['Sư phạm', 'Kinh tế']
  },
  {
    id: 'dai-hoc-binh-duong',
    name: 'Đại học Bình Dương',
    code: 'BDU',
    type: 'private',
    location: 'Bình Dương',
    majors: ['Công nghệ thông tin', 'Kinh tế', 'Kỹ thuật']
  },
  {
    id: 'dai-hoc-lac-hong',
    name: 'Đại học Lạc Hồng',
    code: 'LHU',
    type: 'private',
    location: 'Đồng Nai',
    majors: ['Công nghệ thông tin', 'Kinh tế', 'Kỹ thuật']
  },
  {
    id: 'dai-hoc-dong-a',
    name: 'Đại học Đông Á',
    code: 'DAU',
    type: 'private',
    location: 'Đà Nẵng',
    majors: ['Công nghệ thông tin', 'Kinh tế', 'Y dược', 'Du lịch']
  },
  {
    id: 'dai-hoc-dong-do',
    name: 'Đại học Đông Đô',
    code: 'DDU',
    type: 'private',
    location: 'Hà Nội',
    majors: ['Công nghệ thông tin', 'Kinh tế', 'Luật']
  },
  {
    id: 'dai-hoc-hong-bang',
    name: 'Đại học Hồng Bàng',
    code: 'HBU',
    type: 'private',
    location: 'TP. Hồ Chí Minh',
    majors: ['Công nghệ thông tin', 'Kinh tế', 'Y dược']
  },
  {
    id: 'dai-hoc-quoc-te-sai-gon',
    name: 'Đại học Quốc tế Sài Gòn',
    code: 'SIU',
    type: 'private',
    location: 'TP. Hồ Chí Minh',
    majors: ['Công nghệ thông tin', 'Kinh tế', 'Quản trị kinh doanh']
  },
  {
    id: 'dai-hoc-tan-tao',
    name: 'Đại học Tân Tạo',
    code: 'TTU',
    type: 'private',
    location: 'Long An',
    majors: ['Công nghệ thông tin', 'Kinh tế', 'Y dược']
  },
  {
    id: 'dai-hoc-van-hien',
    name: 'Đại học Văn Hiến',
    code: 'VHU',
    type: 'private',
    location: 'TP. Hồ Chí Minh',
    majors: ['Công nghệ thông tin', 'Kinh tế', 'Du lịch', 'Thiết kế']
  },
  {
    id: 'dai-hoc-cong-nghe-sai-gon',
    name: 'Đại học Công nghệ Sài Gòn',
    code: 'STU',
    type: 'private',
    location: 'TP. Hồ Chí Minh',
    majors: ['Công nghệ thông tin', 'Kỹ thuật', 'Kinh tế']
  },
  {
    id: 'dai-hoc-nam-can-tho',
    name: 'Đại học Nam Cần Thơ',
    code: 'NCTU',
    type: 'private',
    location: 'Cần Thơ',
    majors: ['Công nghệ thông tin', 'Kinh tế', 'Y dược']
  },
  {
    id: 'dai-hoc-cu-long',
    name: 'Đại học Cửu Long',
    code: 'CLU',
    type: 'private',
    location: 'Vĩnh Long',
    majors: ['Công nghệ thông tin', 'Kinh tế']
  },
  {
    id: 'dai-hoc-lam-dong',
    name: 'Đại học Đà Lạt',
    code: 'DLU',
    type: 'public',
    location: 'Lâm Đồng',
    majors: ['Sư phạm', 'Kinh tế', 'Du lịch', 'Công nghệ thông tin']
  },
  {
    id: 'dai-hoc-tay-bac',
    name: 'Đại học Tây Bắc',
    code: 'QTU',
    type: 'public',
    location: 'Sơn La',
    majors: ['Sư phạm', 'Kinh tế', 'Nông nghiệp']
  },
  {
    id: 'dai-hoc-dien-bien',
    name: 'Đại học Điện Biên',
    code: 'DBU',
    type: 'public',
    location: 'Điện Biên',
    majors: ['Sư phạm', 'Kinh tế']
  },
  {
    id: 'dai-hoc-hung-vuong',
    name: 'Đại học Hùng Vương',
    code: 'HVU',
    type: 'public',
    location: 'Phú Thọ',
    majors: ['Sư phạm', 'Kinh tế', 'Nông nghiệp']
  },
  {
    id: 'dai-hoc-hai-phong',
    name: 'Đại học Hải Phòng',
    code: 'HPU',
    type: 'public',
    location: 'Hải Phòng',
    majors: ['Sư phạm', 'Kinh tế', 'Công nghệ thông tin', 'Kỹ thuật']
  },
  {
    id: 'dai-hoc-hai-duong',
    name: 'Đại học Hải Dương',
    code: 'HDU',
    type: 'public',
    location: 'Hải Dương',
    majors: ['Sư phạm', 'Kinh tế']
  },
  {
    id: 'dai-hoc-hung-yen',
    name: 'Đại học Sư phạm Kỹ thuật Hưng Yên',
    code: 'UTEHY',
    type: 'public',
    location: 'Hưng Yên',
    majors: ['Sư phạm kỹ thuật', 'Công nghệ thông tin', 'Kỹ thuật']
  },
  {
    id: 'dai-hoc-hai-duong-med',
    name: 'Đại học Y Dược Hải Phòng',
    code: 'HPMU',
    type: 'public',
    location: 'Hải Phòng',
    majors: ['Y đa khoa', 'Dược học', 'Điều dưỡng']
  },
  {
    id: 'dai-hoc-thai-binh',
    name: 'Đại học Thái Bình',
    code: 'TBU',
    type: 'public',
    location: 'Thái Bình',
    majors: ['Sư phạm', 'Kinh tế']
  },
  {
    id: 'dai-hoc-nam-dinh',
    name: 'Đại học Điều dưỡng Nam Định',
    code: 'NDU',
    type: 'public',
    location: 'Nam Định',
    majors: ['Điều dưỡng', 'Y tế công cộng']
  },
  {
    id: 'dai-hoc-vinh',
    name: 'Đại học Vinh',
    code: 'VINU',
    type: 'public',
    location: 'Nghệ An',
    majors: ['Sư phạm', 'Kinh tế', 'Công nghệ thông tin']
  },
  {
    id: 'dai-hoc-quang-binh',
    name: 'Đại học Quảng Bình',
    code: 'QBU',
    type: 'public',
    location: 'Quảng Bình',
    majors: ['Sư phạm', 'Kinh tế']
  },
  {
    id: 'dai-hoc-quang-tri',
    name: 'Đại học Quảng Trị',
    code: 'QTU',
    type: 'public',
    location: 'Quảng Trị',
    majors: ['Sư phạm', 'Kinh tế']
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

