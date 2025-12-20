const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://admin:PEiD7OdhscOeawTy@warrantly-verhical.hsdx3um.mongodb.net/?appName=hecosotrithuc';
const DB_NAME = process.env.MONGODB_DB_NAME || 'hecosotrithuc';

// Import static data
const staticData = require('./static-data');

// Helper function to extract data from TypeScript files
function extractMajorGroups() {
  // Read the majors page file
  const majorsFile = path.join(__dirname, '../app/majors/page.tsx');
  const content = fs.readFileSync(majorsFile, 'utf8');
  
  // Extract fallbackMajorGroups array using regex
  const match = content.match(/const fallbackMajorGroups[^=]*=\s*(\[[\s\S]*?\]);/);
  if (match) {
    try {
      // Clean up the match to make it valid JSON
      let data = match[1];
      // Replace single quotes with double quotes
      data = data.replace(/'/g, '"');
      // Fix object keys
      data = data.replace(/(\w+):/g, '"$1":');
      return JSON.parse(data);
    } catch (e) {
      console.error('Error parsing major groups:', e.message);
      return [];
    }
  }
  return [];
}

function extractUniversities() {
  // Read the universities file
  const universitiesFile = path.join(__dirname, '../lib/universities.ts');
  const content = fs.readFileSync(universitiesFile, 'utf8');
  
  // Extract universities array
  const match = content.match(/export const universities[^=]*=\s*(\[[\s\S]*?\]);/);
  if (match) {
    try {
      let data = match[1];
      data = data.replace(/'/g, '"');
      data = data.replace(/(\w+):/g, '"$1":');
      return JSON.parse(data);
    } catch (e) {
      console.error('Error parsing universities:', e.message);
      return [];
    }
  }
  return [];
}

async function migrateStaticData() {
  const client = new MongoClient(MONGODB_URI);
  
  try {
    await client.connect();
    console.log('✅ Connected to MongoDB\n');
    
    const db = client.db(DB_NAME);
    
    // Migrate RIASEC 20 questions
    if (staticData.riasec20Questions && staticData.riasec20Questions.length > 0) {
      const riasec20Collection = db.collection('questions_riasec20');
      await riasec20Collection.deleteMany({});
      const result = await riasec20Collection.insertMany(staticData.riasec20Questions);
      console.log(`✅ Imported ${result.insertedCount} RIASEC 20 questions`);
    }
    
    // Migrate Major Groups
    try {
      const majorGroups = extractMajorGroups();
      if (majorGroups && majorGroups.length > 0) {
        const majorGroupsCollection = db.collection('major_groups');
        await majorGroupsCollection.deleteMany({});
        const result = await majorGroupsCollection.insertMany(majorGroups);
        console.log(`✅ Imported ${result.insertedCount} major groups`);
      }
    } catch (error) {
      console.log('⚠️  Could not import major groups automatically. Please import manually.');
    }
    
    // Migrate Universities
    try {
      const universities = extractUniversities();
      if (universities && universities.length > 0) {
        const universitiesCollection = db.collection('universities');
        await universitiesCollection.deleteMany({});
        const result = await universitiesCollection.insertMany(universities);
        console.log(`✅ Imported ${result.insertedCount} universities`);
      }
    } catch (error) {
      console.log('⚠️  Could not import universities automatically. Please import manually.');
    }
    
    // Migrate Study Abroad Countries
    if (staticData.studyAbroadCountries && staticData.studyAbroadCountries.length > 0) {
      const countriesCollection = db.collection('study_abroad_countries');
      await countriesCollection.deleteMany({});
      const result = await countriesCollection.insertMany(staticData.studyAbroadCountries);
      console.log(`✅ Imported ${result.insertedCount} study abroad countries`);
    }
    
    console.log('\n✅ Migration completed!');
    console.log('\n📝 Note: MBTI, Interest, and Aptitude questions need to be added manually');
    console.log('   You can add them using MongoDB Compass or create additional migration scripts.');
    
  } catch (error) {
    console.error('❌ Migration error:', error);
    process.exit(1);
  } finally {
    await client.close();
  }
}

// Run migration
migrateStaticData();
