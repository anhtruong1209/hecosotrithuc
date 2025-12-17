import { MongoClient, Db, Collection } from 'mongodb';

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

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://admin:PEiD7OdhscOeawTy@warrantly-verhical.hsdx3um.mongodb.net/?appName=hecosotrithuc';
const DB_NAME = process.env.MONGODB_DB_NAME || 'hecosotrithuc';

let client: MongoClient | null = null;
let db: Db | null = null;

async function getClient(): Promise<MongoClient> {
  if (!client) {
    client = new MongoClient(MONGODB_URI);
    await client.connect();
  }
  return client;
}

async function getDb(): Promise<Db> {
  if (!db) {
    const client = await getClient();
    db = client.db(DB_NAME);
  }
  return db;
}

async function getSubmissionsCollection(): Promise<Collection<Submission>> {
  const database = await getDb();
  return database.collection<Submission>('submissions');
}

async function getAdminsCollection(): Promise<Collection<Admin>> {
  const database = await getDb();
  return database.collection<Admin>('admins');
}

// Legacy functions for backward compatibility (not used but kept for interface)
export function readDB(): Database {
  return { submissions: [], admins: [] };
}

export function writeDB(data: Database): void {
  // No-op for MongoDB
}

export async function getSubmissions(limit: number = 200): Promise<Submission[]> {
  try {
    const collection = await getSubmissionsCollection();
    const submissions = await collection
      .find({})
      .sort({ created_at: -1 })
      .limit(limit)
      .toArray();
    return submissions;
  } catch (error) {
    console.error('Error getting submissions:', error);
    return [];
  }
}

export async function getSubmissionById(id: number): Promise<Submission | null> {
  try {
    const collection = await getSubmissionsCollection();
    const submission = await collection.findOne({ id });
    if (!submission) {
      console.error(`Submission with ID ${id} not found`);
    }
    return submission;
  } catch (error) {
    console.error('Error in getSubmissionById:', error);
    return null;
  }
}

export async function getSubmissionsByEmail(email: string): Promise<Submission[]> {
  try {
    const collection = await getSubmissionsCollection();
    const submissions = await collection.find({ email }).toArray();
    return submissions;
  } catch (error) {
    console.error('Error getting submissions by email:', error);
    return [];
  }
}

export async function addTestResult(email: string, testResult: TestResult): Promise<boolean> {
  try {
    const collection = await getSubmissionsCollection();
    const submission = await collection.findOne({ email });
    if (!submission) {
      return false;
    }
    
    const tests_completed = submission.tests_completed || [];
    tests_completed.push(testResult);
    
    await collection.updateOne(
      { email },
      { $set: { tests_completed } }
    );
    return true;
  } catch (error) {
    console.error('Error adding test result:', error);
    return false;
  }
}

export async function saveSubmission(submission: Omit<Submission, 'id'>): Promise<number> {
  try {
    const collection = await getSubmissionsCollection();
    // Get the highest ID
    const lastSubmission = await collection
      .findOne({}, { sort: { id: -1 } });
    const newId = lastSubmission ? lastSubmission.id + 1 : 1;
    
    const newSubmission: Submission = {
      ...submission,
      id: newId
    };
    
    await collection.insertOne(newSubmission);
    return newId;
  } catch (error) {
    console.error('Error saving submission:', error);
    throw error;
  }
}

export async function getAdminByUsername(username: string): Promise<Admin | null> {
  try {
    const collection = await getAdminsCollection();
    const admin = await collection.findOne({ username });
    return admin || null;
  } catch (error) {
    console.error('Error getting admin by username:', error);
    return null;
  }
}

export async function getAllAdmins(): Promise<Admin[]> {
  try {
    const collection = await getAdminsCollection();
    const admins = await collection.find({}).toArray();
    return admins;
  } catch (error) {
    console.error('Error getting all admins:', error);
    return [];
  }
}

export async function createAdmin(username: string, passwordHash: string): Promise<number> {
  try {
    const collection = await getAdminsCollection();
    // Get the highest ID
    const lastAdmin = await collection
      .findOne({}, { sort: { id: -1 } });
    const newId = lastAdmin ? lastAdmin.id + 1 : 1;
    
    const newAdmin: Admin = {
      id: newId,
      username,
      password_hash: passwordHash,
      created_at: new Date().toISOString()
    };
    
    await collection.insertOne(newAdmin);
    return newId;
  } catch (error) {
    console.error('Error creating admin:', error);
    throw error;
  }
}

export async function deleteSubmission(id: number): Promise<boolean> {
  try {
    const collection = await getSubmissionsCollection();
    const result = await collection.deleteOne({ id });
    return result.deletedCount > 0;
  } catch (error) {
    console.error('Error deleting submission:', error);
    return false;
  }
}

export async function updateSubmission(id: number, updates: Partial<Submission>): Promise<boolean> {
  try {
    const collection = await getSubmissionsCollection();
    const result = await collection.updateOne(
      { id },
      { $set: updates }
    );
    return result.matchedCount > 0;
  } catch (error) {
    console.error('Error updating submission:', error);
    return false;
  }
}

// Initialize admin if not exists
export async function initAdmin(): Promise<void> {
  try {
    const existingAdmin = await getAdminByUsername('admin');
    if (!existingAdmin) {
      // Password: admin@123
      // Hash will be set via environment variable or generated
      const bcrypt = require('bcryptjs');
      const hash = process.env.ADMIN_PASS_HASH || bcrypt.hashSync('admin@123', 10);
      await createAdmin('admin', hash);
    }
  } catch (error) {
    console.error('Error initializing admin:', error);
  }
}


