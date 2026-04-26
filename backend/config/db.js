const mongoose = require('mongoose');


const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://officialaman49_db_user:oQFl1qEYQdbECJku@cluster0.isddzka.mongodb.net/?appName=Cluster0', {
      
    });
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.log('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;   