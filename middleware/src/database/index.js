const mongoose = require("mongoose");
const uri = `mongodb+srv://sonhm-2329:${process.env.MONGO_PWD}@cluster0.koqqw.mongodb.net/tts_test_db`;
console.log(uri);
async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Database is Connected");
  } catch (error) {
    console.log("Failed connect to database!!!");
  }
}

module.exports = { connect };
