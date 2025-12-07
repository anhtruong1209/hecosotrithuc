// RIASEC calculation and expert system logic

export interface RIASECScores {
  R: number;
  I: number;
  A: number;
  S: number;
  E: number;
  C: number;
}

export function calculateRIASECScores(
  sothich: string,
  monmanh_list: string[],
  tinhcach_list: string[],
  muctieu: string
): RIASECScores {
  const r_scores: RIASECScores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };

  // Sở thích
  if (sothich === "kythuat") {
    tinhcach_list = [];
  }

  // Tính điểm từ tính cách
  for (const tinhcach of tinhcach_list) {
    switch (tinhcach) {
      case "logic":
        r_scores.I += 2;
        r_scores.C += 1;
        break;
      case "sangtao":
        r_scores.A += 2;
        r_scores.I += 1;
        break;
      case "huongngoai":
        r_scores.E += 2;
        r_scores.S += 1;
        break;
      case "tinhte":
        r_scores.C += 2;
        r_scores.I += 1;
        break;
      case "thucte":
        r_scores.R += 2;
        r_scores.I += 1;
        break;
      case "kiendinh":
        r_scores.R += 2;
        r_scores.C += 1;
        break;
      case "tomo":
        r_scores.I += 2;
        r_scores.A += 1;
        break;
      case "doclap":
        r_scores.I += 2;
        r_scores.A += 1;
        break;
      case "phantich":
        r_scores.I += 3;
        break;
      case "thantrong":
        r_scores.I += 1;
        r_scores.C += 2;
        break;
      case "tudo":
        r_scores.A += 2;
        r_scores.E += 1;
        break;
      case "bieucam":
        r_scores.A += 2;
        r_scores.S += 1;
        break;
      case "nhaycam":
        r_scores.A += 2;
        r_scores.S += 1;
        break;
      case "linhhoat":
        r_scores.A += 1;
        r_scores.E += 2;
        break;
      case "thanthien":
        r_scores.S += 2;
        r_scores.E += 1;
        break;
      case "giupdo":
        r_scores.S += 3;
        break;
      case "dongcam":
        r_scores.S += 2;
        r_scores.A += 1;
        break;
      case "tuccam":
        r_scores.E += 2;
        r_scores.R += 1;
        break;
      case "thamvong":
        r_scores.E += 3;
        break;
      case "nangdong":
        r_scores.E += 2;
        r_scores.S += 1;
        break;
      case "quyetdoan":
        r_scores.E += 2;
        r_scores.R += 1;
        break;
      case "ngannap":
        r_scores.C += 2;
        r_scores.I += 1;
        break;
      case "dangtincay":
        r_scores.C += 2;
        r_scores.S += 1;
        break;
      case "tuanthu":
        r_scores.C += 3;
        break;
    }
  }

  // Mục tiêu
  switch (muctieu) {
    case "luongcao":
      r_scores.E += 2;
      r_scores.I += 1;
      break;
    case "on_dinh":
      r_scores.C += 2;
      r_scores.S += 1;
      break;
    case "sangtao":
      r_scores.A += 2;
      r_scores.I += 1;
      break;
    case "phucvu":
      r_scores.S += 2;
      r_scores.A += 1;
      break;
    case "lanhdao":
      r_scores.E += 2;
      r_scores.S += 1;
      break;
  }

  return r_scores;
}

export function expertSystem(
  sothich: string,
  monmanh_list: string[],
  tinhcach_list: string[],
  muctieu: string,
  r_scores: RIASECScores
) {
  const R = r_scores.R;
  const I = r_scores.I;
  const A = r_scores.A;
  const S = r_scores.S;
  const E = r_scores.E;
  const C = r_scores.C;

  const riasec_map = { R, I, A, S, E, C };
  const strongest = Object.entries(riasec_map).reduce((a, b) =>
    riasec_map[a[0] as keyof RIASECScores] > riasec_map[b[0] as keyof RIASECScores] ? a : b
  )[0] as keyof RIASECScores;

  let major: string;
  let description: string;
  let strengths: string[];
  let jobs: string[];
  let related_majors: string[];

  switch (strongest) {
    case "R":
      major = "Kỹ thuật – Cơ khí – Điện tử";
      description = "Bạn phù hợp với các ngành kỹ thuật, thực hành, máy móc và công nghệ ứng dụng.";
      strengths = ["Kỹ năng thao tác", "Tư duy kỹ thuật", "Sửa chữa – vận hành tốt"];
      jobs = ["Kỹ sư cơ khí", "Kỹ thuật điện", "Kỹ thuật viên vận hành", "Lực lượng vũ trang"];
      related_majors = ["Cơ điện tử", "Tự động hóa", "Kỹ thuật ô tô", "An ninh quốc phòng"];
      break;

    case "I":
      major = "Khoa học – Công nghệ – Nghiên cứu";
      description = "Bạn yêu thích phân tích, nghiên cứu, tìm hiểu bản chất sự vật, tư duy logic mạnh.";
      strengths = ["Phân tích", "Nghiên cứu", "Tư duy hệ thống"];
      jobs = ["Nhà nghiên cứu", "Khoa học dữ liệu", "Kỹ sư AI"];
      related_majors = ["Công nghệ sinh học", "Khoa học máy tính", "Toán ứng dụng"];
      break;

    case "A":
      major = "Nghệ thuật – Thiết kế – Sáng tạo";
      description = "Bạn có trí tưởng tượng phong phú, yêu cái đẹp và thích sáng tạo.";
      strengths = ["Thẩm mỹ", "Ý tưởng sáng tạo", "Hình ảnh hóa tốt"];
      jobs = ["Designer", "UI/UX", "Họa sĩ kỹ thuật số"];
      related_majors = ["Đồ họa", "Truyền thông đa phương tiện", "Thiết kế thời trang"];
      break;

    case "S":
      major = "Giáo dục – Y tế – Công tác xã hội";
      description = "Bạn thích giúp đỡ người khác, hướng dẫn, giao tiếp và hỗ trợ xã hội.";
      strengths = ["Giao tiếp", "Đồng cảm", "Hỗ trợ người khác"];
      jobs = ["Giáo viên", "Điều dưỡng", "Tư vấn viên", "Dịch vụ", "Khách sạn", "Du lịch"];
      related_majors = ["Tâm lý học", "Công tác xã hội", "Sư phạm", "Quản trị khách sạn", "Quản trị du lịch"];
      break;

    case "E":
      major = "Kinh doanh – Quản lý – Lãnh đạo";
      description = "Bạn có tố chất lãnh đạo, thích thuyết phục, kinh doanh và tổ chức.";
      strengths = ["Thuyết phục", "Đàm phán", "Tư duy chiến lược"];
      jobs = ["Quản trị kinh doanh", "Kinh doanh", "Marketing", "Quản lý", "Quản trị khách sạn", "Quản trị du lịch"];
      related_majors = ["Kinh tế", "Marketing", "Quản trị nhân lực", "Quản trị khách sạn", "Quản trị du lịch"];
      break;

    case "C":
      major = "Kế toán – Hành chính – Văn phòng";
      description = "Bạn làm tốt với dữ liệu, quy trình, tính chính xác và làm việc có tổ chức.";
      strengths = ["Tỉ mỉ", "Chính xác", "Quản lý tài liệu"];
      jobs = ["Kế toán", "Hành chính văn phòng", "Thống kê"];
      related_majors = ["Kế toán kiểm toán", "Tài chính", "Hệ thống thông tin quản lý"];
      break;

    default:
      major = "Khoa học – Công nghệ – Nghiên cứu";
      description = "Bạn yêu thích phân tích, nghiên cứu, tìm hiểu bản chất sự vật, tư duy logic mạnh.";
      strengths = ["Phân tích", "Nghiên cứu", "Tư duy hệ thống"];
      jobs = ["Nhà nghiên cứu", "Khoa học dữ liệu", "Kỹ sư AI"];
      related_majors = ["Công nghệ sinh học", "Khoa học máy tính", "Toán ứng dụng"];
  }

  return { major, description, strengths, jobs, related_majors };
}

export function suggestExamBlocks(
  r_scores: RIASECScores,
  monmanh_list: string[]
): string[] {
  const best = Object.entries(r_scores).reduce((a, b) =>
    r_scores[a[0] as keyof RIASECScores] > r_scores[b[0] as keyof RIASECScores] ? a : b
  )[0] as keyof RIASECScores;

  const mapping: Record<string, string[]> = {
    R: ["A00", "A01", "D07"],
    I: ["A00", "A01", "B00"],
    A: ["V00", "H00", "N00"],
    S: ["C00", "C14", "D01"],
    E: ["D01", "A01"],
    C: ["A01", "D01"],
  };

  let suggested = mapping[best] || [];

  // Tăng độ chính xác bằng môn mạnh
  if (monmanh_list.includes("toan")) {
    suggested = ["A00", "A01", ...suggested];
  }
  if (monmanh_list.includes("ly")) {
    suggested = ["A00", "A01", ...suggested];
  }
  if (monmanh_list.includes("hoa")) {
    suggested = ["A00", "B00", ...suggested];
  }
  if (monmanh_list.includes("van")) {
    suggested = ["C00", "D01", ...suggested];
  }
  if (monmanh_list.includes("anh")) {
    suggested = ["D01", ...suggested];
  }
  if (monmanh_list.includes("dia")) {
    suggested = ["C00", ...suggested];
  }
  if (monmanh_list.includes("sinh")) {
    suggested = ["B00", ...suggested];
  }
  if (monmanh_list.includes("mythuat")) {
    suggested = ["V00", "H00", ...suggested];
  }
  if (monmanh_list.includes("amnhac")) {
    suggested = ["N00", ...suggested];
  }
  if (monmanh_list.includes("tinhoc")) {
    suggested = ["A01", "D01", ...suggested];
  }

  // Loại trùng và giữ thứ tự ưu tiên
  const final: string[] = [];
  for (const block of suggested) {
    if (!final.includes(block)) {
      final.push(block);
    }
  }

  return final.slice(0, 3);
}

export function slugify(text: string): string {
  if (!text) return "";
  
  // Normalize unicode
  let normalized = text.normalize("NFD");
  normalized = normalized.replace(/[\u0300-\u036f]/g, "");
  
  // Map special Vietnamese characters
  normalized = normalized.replace(/đ/g, "d").replace(/Đ/g, "D");
  
  // Lowercase
  normalized = normalized.toLowerCase();
  
  // Replace non-alphanumeric with hyphens
  normalized = normalized.replace(/[^a-z0-9]+/g, "-");
  
  // Collapse multiple hyphens
  normalized = normalized.replace(/-+/g, "-");
  
  // Trim hyphens
  normalized = normalized.replace(/^-|-$/g, "");
  
  return normalized;
}

