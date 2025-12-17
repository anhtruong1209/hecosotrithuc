const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

// MongoDB connection
// The connection string should have password URL-encoded
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://admin:PEiD7OdhscOeawTy@warrantly-verhical.hsdx3um.mongodb.net/?appName=hecosotrithuc';
const DB_NAME = process.env.MONGODB_DB_NAME || 'hecosotrithuc';

console.log('🔗 MongoDB URI:', MONGODB_URI.replace(/:[^:@]+@/, ':****@')); // Hide password in logs

// Path to db.json
const DB_JSON_PATH = path.join(__dirname, '..', 'lib', 'db.json');

async function migrate() {
  let client;
  
  try {
    console.log('📖 Reading db.json...');
    // Read JSON file
    if (!fs.existsSync(DB_JSON_PATH)) {
      console.error('❌ db.json file not found at:', DB_JSON_PATH);
      process.exit(1);
    }
    
    const jsonData = fs.readFileSync(DB_JSON_PATH, 'utf-8');
    const data = JSON.parse(jsonData);
    
    console.log(`✅ Found ${data.submissions?.length || 0} submissions and ${data.admins?.length || 0} admins`);
    
    // Connect to MongoDB
    console.log('🔌 Connecting to MongoDB...');
    client = new MongoClient(MONGODB_URI);
    await client.connect();
    console.log('✅ Connected to MongoDB');
    
    const db = client.db(DB_NAME);
    const submissionsCollection = db.collection('submissions');
    const adminsCollection = db.collection('admins');
    
    // Clear existing data (optional - comment out if you want to keep existing data)
    console.log('🗑️  Clearing existing collections...');
    await submissionsCollection.deleteMany({});
    await adminsCollection.deleteMany({});
    console.log('✅ Collections cleared');
    
    // Insert submissions
    if (data.submissions && data.submissions.length > 0) {
      console.log(`📝 Inserting ${data.submissions.length} submissions...`);
      // Insert in batches to avoid memory issues
      const batchSize = 100;
      for (let i = 0; i < data.submissions.length; i += batchSize) {
        const batch = data.submissions.slice(i, i + batchSize);
        await submissionsCollection.insertMany(batch);
        console.log(`   Inserted ${Math.min(i + batchSize, data.submissions.length)}/${data.submissions.length} submissions`);
      }
      console.log('✅ All submissions inserted');
    }
    
    // Insert admins
    if (data.admins && data.admins.length > 0) {
      console.log(`👤 Inserting ${data.admins.length} admins...`);
      await adminsCollection.insertMany(data.admins);
      console.log('✅ All admins inserted');
    } else {
      console.log('ℹ️  No admins to migrate');
    }
    
    // Create indexes for better performance
    console.log('📊 Creating indexes...');
    await submissionsCollection.createIndex({ id: 1 }, { unique: true });
    await submissionsCollection.createIndex({ email: 1 });
    await submissionsCollection.createIndex({ created_at: -1 });
    await adminsCollection.createIndex({ username: 1 }, { unique: true });
    await adminsCollection.createIndex({ id: 1 }, { unique: true });
    console.log('✅ Indexes created');
    
    // Verify migration
    const submissionCount = await submissionsCollection.countDocuments();
    const adminCount = await adminsCollection.countDocuments();
    
    console.log('\n🎉 Migration completed successfully!');
    console.log(`   Submissions: ${submissionCount}`);
    console.log(`   Admins: ${adminCount}`);
    
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  } finally {
    if (client) {
      await client.close();
      console.log('🔌 MongoDB connection closed');
    }
  }
}

// Run migration
migrate();

