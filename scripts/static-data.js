// Static data extracted from components
// This file contains all static data that will be migrated to MongoDB

// RIASEC 20 Questions
exports.riasec20Questions = [
  {
    id: 1,
    question: 'Bạn thích làm việc với máy móc, công cụ hơn là làm việc với con người?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { R: 3, I: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { R: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { S: 1, E: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { S: 2, E: 2 } }
    ]
  },
  {
    id: 2,
    question: 'Bạn thích nghiên cứu, tìm hiểu các vấn đề khoa học?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { I: 3, A: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { I: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { E: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { E: 2 } }
    ]
  },
  {
    id: 3,
    question: 'Bạn có khả năng sáng tạo và thích các hoạt động nghệ thuật?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { A: 3, I: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { A: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { C: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { C: 2 } }
    ]
  },
  {
    id: 4,
    question: 'Bạn thích giúp đỡ, chăm sóc và hướng dẫn người khác?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { S: 3, A: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { S: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { I: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { I: 2 } }
    ]
  },
  {
    id: 5,
    question: 'Bạn có khả năng thuyết phục và lãnh đạo người khác?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { E: 3, S: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { E: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { C: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { C: 2 } }
    ]
  },
  {
    id: 6,
    question: 'Bạn thích làm việc với dữ liệu, số liệu và quy trình có tổ chức?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { C: 3, I: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { C: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { A: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { A: 2 } }
    ]
  },
  {
    id: 7,
    question: 'Bạn thích sửa chữa, lắp ráp hoặc vận hành thiết bị?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { R: 3, C: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { R: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { S: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { S: 2 } }
    ]
  },
  {
    id: 8,
    question: 'Bạn thích đọc sách, nghiên cứu và học hỏi kiến thức mới?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { I: 3 } },
      { value: 'agree', label: 'Đồng ý', scores: { I: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { E: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { E: 2 } }
    ]
  },
  {
    id: 9,
    question: 'Bạn thích vẽ, thiết kế hoặc tạo ra các sản phẩm nghệ thuật?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { A: 3, I: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { A: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { R: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { R: 2 } }
    ]
  },
  {
    id: 10,
    question: 'Bạn thích làm việc trong môi trường giáo dục, y tế hoặc dịch vụ xã hội?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { S: 3, A: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { S: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { E: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { E: 2 } }
    ]
  },
  {
    id: 11,
    question: 'Bạn thích kinh doanh, bán hàng hoặc quản lý?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { E: 3, S: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { E: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { I: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { I: 2 } }
    ]
  },
  {
    id: 12,
    question: 'Bạn thích làm việc với các con số, bảng tính và tài liệu?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { C: 3, I: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { C: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { A: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { A: 2 } }
    ]
  },
  {
    id: 13,
    question: 'Bạn thích làm việc ngoài trời, với thiên nhiên hoặc động vật?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { R: 3, I: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { R: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { C: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { C: 2 } }
    ]
  },
  {
    id: 14,
    question: 'Bạn thích giải quyết các vấn đề phức tạp bằng tư duy logic?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { I: 3, C: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { I: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { S: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { S: 2 } }
    ]
  },
  {
    id: 15,
    question: 'Bạn thích biểu diễn, trình bày hoặc thể hiện bản thân qua nghệ thuật?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { A: 3, E: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { A: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { C: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { C: 2 } }
    ]
  },
  {
    id: 16,
    question: 'Bạn thích làm việc với trẻ em, người già hoặc người cần hỗ trợ?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { S: 3 } },
      { value: 'agree', label: 'Đồng ý', scores: { S: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { I: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { I: 2 } }
    ]
  },
  {
    id: 17,
    question: 'Bạn thích đàm phán, thuyết phục và xây dựng mối quan hệ?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { E: 3, S: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { E: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { I: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { I: 2 } }
    ]
  },
  {
    id: 18,
    question: 'Bạn thích làm việc trong môi trường ổn định, có quy trình rõ ràng?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { C: 3, S: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { C: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { A: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { A: 2 } }
    ]
  },
  {
    id: 19,
    question: 'Bạn thích xây dựng, lắp đặt hoặc tạo ra các sản phẩm vật chất?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { R: 3, C: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { R: 2 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { A: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { A: 2 } }
    ]
  },
  {
    id: 20,
    question: 'Bạn thích làm việc độc lập, tự chủ hơn là làm việc nhóm?',
    options: [
      { value: 'strongly_agree', label: 'Rất đồng ý', scores: { I: 2, A: 1, R: 1 } },
      { value: 'agree', label: 'Đồng ý', scores: { I: 1 } },
      { value: 'neutral', label: 'Trung lập', scores: {} },
      { value: 'disagree', label: 'Không đồng ý', scores: { E: 1, S: 1 } },
      { value: 'strongly_disagree', label: 'Hoàn toàn không đồng ý', scores: { E: 2, S: 2 } }
    ]
  }
];

// Study Abroad Countries
exports.studyAbroadCountries = [
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

// Note: Major Groups and Universities will be imported from their respective files
// For now, we'll create a simpler migration script that reads from the actual component files

