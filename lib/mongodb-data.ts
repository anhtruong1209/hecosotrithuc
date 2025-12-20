import { MongoClient, Db, Collection } from 'mongodb';

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

// Collections cho dữ liệu tĩnh
export async function getQuestionsCollection(testType: string): Promise<Collection> {
  const database = await getDb();
  return database.collection(`questions_${testType}`);
}

export async function getMajorGroupsCollection(): Promise<Collection> {
  const database = await getDb();
  return database.collection('major_groups');
}

export async function getUniversitiesCollection(): Promise<Collection> {
  const database = await getDb();
  return database.collection('universities');
}

export async function getStudyAbroadCountriesCollection(): Promise<Collection> {
  const database = await getDb();
  return database.collection('study_abroad_countries');
}

// Helper functions để lấy dữ liệu
export async function getQuestions(testType: string): Promise<any[]> {
  try {
    const collection = await getQuestionsCollection(testType);
    const questions = await collection.find({}).sort({ id: 1 }).toArray();
    return questions;
  } catch (error) {
    console.error(`Error getting questions for ${testType}:`, error);
    return [];
  }
}

export async function getMajorGroups(): Promise<any[]> {
  try {
    const collection = await getMajorGroupsCollection();
    const groups = await collection.find({}).sort({ code: 1 }).toArray();
    return groups;
  } catch (error) {
    console.error('Error getting major groups:', error);
    return [];
  }
}

export async function getUniversities(): Promise<any[]> {
  try {
    const collection = await getUniversitiesCollection();
    const universities = await collection.find({}).sort({ name: 1 }).toArray();
    return universities;
  } catch (error) {
    console.error('Error getting universities:', error);
    return [];
  }
}

export async function getStudyAbroadCountries(): Promise<any[]> {
  try {
    const collection = await getStudyAbroadCountriesCollection();
    const countries = await collection.find({}).sort({ name: 1 }).toArray();
    return countries;
  } catch (error) {
    console.error('Error getting study abroad countries:', error);
    return [];
  }
}

