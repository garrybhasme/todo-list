// importing the mongoose
const mongoose=require("mongoose");

// Writing async function to connect with DB
async function connectDB(){
  try{
    // DB url is given
    const DB_URL=process.env.MONGO_URI
    // connection is set
    await mongoose.connect(DB_URL);
    // if connection is done print DB is connected
    console.log("DB Connected....");
  }
  // if error occurs print error and exit
  catch(error){
    console.log("DB Connection Error!", error.message);
    process.exit(1)    
  }

}

module.exports = connectDB;