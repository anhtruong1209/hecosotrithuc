import fs from 'fs';
import path from 'path';

// For Vercel, use /tmp directory which is writable
const DB_PATH = (process.env.VERCEL === '1' || process.env.VERCEL_ENV)
  ? '/tmp/db.json'
  : path.join(process.cwd(), 'lib', 'db.json');

export interface TestResult {
  test_type: 'mbti' | 'interest' | 'aptitude' | 'riasec';
  test_name: string;
  result: any; // Kết quả test (có thể là MBTIResult, InterestResult, AptitudeResult, hoặc RIASEC result)
  completed_at: string;
}

export interface Submission {
  id: number;
  fullname: string;
  phone: string;
  email: string;
  ip_address?: string; // IP address của người dùng để admin check log
  sothich: string;
  monmanh: string[];
  tinhcach: string[];
  muctieu: string;
  study_option: 'domestic' | 'abroad'; // Học trong nước hoặc du học
  university_id?: string; // ID trường đại học (nếu chọn trong nước)
  study_abroad_country?: string; // Quốc gia du học (nếu chọn du học)
  r_scores: Record<string, number>;
  major: string;
  description: string;
  strengths: string[];
  jobs: string[];
  related_majors: string[];
  suggested_blocks: string[];
  tests_completed?: TestResult[]; // Danh sách các bài test đã làm
  created_at: string;
}

export interface Admin {
  id: number;
  username: string;
  password_hash: string;
  created_at: string;
}

interface Database {
  submissions: Submission[];
  admins: Admin[];
}

export function readDB(): Database {
  try {
    // Ensure directory exists
    const dir = path.dirname(DB_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    if (fs.existsSync(DB_PATH)) {
      const data = fs.readFileSync(DB_PATH, 'utf-8');
      return JSON.parse(data);
    }
  } catch (error) {
    console.error('Error reading DB:', error);
  }
  return { submissions: [], admins: [] };
}

export function writeDB(data: Database): void {
  try {
    // For Vercel /tmp, directory always exists, no need to create
    if (DB_PATH.startsWith('/tmp')) {
      fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
    } else {
      // Ensure directory exists for local development
      const dir = path.dirname(DB_PATH);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
    }
  } catch (error) {
    console.error('Error writing DB:', error);
    console.error('DB_PATH:', DB_PATH);
    throw error;
  }
}

export function getSubmissions(limit: number = 200): Submission[] {
  const db = readDB();
  return db.submissions.slice(0, limit).reverse();
}

export function getSubmissionById(id: number): Submission | null {
  const db = readDB();
  return db.submissions.find(s => s.id === id) || null;
}

export function getSubmissionsByEmail(email: string): Submission[] {
  const db = readDB();
  return db.submissions.filter(s => s.email === email);
}

export function addTestResult(email: string, testResult: TestResult): boolean {
  const db = readDB();
  const submission = db.submissions.find(s => s.email === email);
  if (!submission) {
    return false;
  }
  
  if (!submission.tests_completed) {
    submission.tests_completed = [];
  }
  
  submission.tests_completed.push(testResult);
  writeDB(db);
  return true;
}

export function saveSubmission(submission: Omit<Submission, 'id'>): number {
  const db = readDB();
  const newId = db.submissions.length > 0 
    ? Math.max(...db.submissions.map(s => s.id)) + 1 
    : 1;
  
  const newSubmission: Submission = {
    ...submission,
    id: newId
  };
  
  db.submissions.push(newSubmission);
  writeDB(db);
  return newId;
}

export function getAdminByUsername(username: string): Admin | null {
  const db = readDB();
  return db.admins.find(a => a.username === username) || null;
}

export function getAllAdmins(): Admin[] {
  const db = readDB();
  return db.admins;
}

export function createAdmin(username: string, passwordHash: string): number {
  const db = readDB();
  const newId = db.admins.length > 0 
    ? Math.max(...db.admins.map(a => a.id)) + 1 
    : 1;
  
  const newAdmin: Admin = {
    id: newId,
    username,
    password_hash: passwordHash,
    created_at: new Date().toISOString()
  };
  
  db.admins.push(newAdmin);
  writeDB(db);
  return newId;
}

export function deleteSubmission(id: number): boolean {
  const db = readDB();
  const index = db.submissions.findIndex(s => s.id === id);
  if (index === -1) {
    return false;
  }
  db.submissions.splice(index, 1);
  writeDB(db);
  return true;
}

// Initialize admin if not exists
export function initAdmin(): void {
  const db = readDB();
  const existingAdmin = db.admins.find(a => a.username === 'admin');
  if (!existingAdmin) {
    // Password: admin@123
    // Hash will be set via environment variable or generated
    const bcrypt = require('bcryptjs');
    const hash = process.env.ADMIN_PASS_HASH || bcrypt.hashSync('admin@123', 10);
    createAdmin('admin', hash);
  }
}

