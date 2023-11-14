const mongoose = require('mongoose');
// const URL = "mongodb://127.0.0.1:27017/mern_admin";
const URI = process.env.MONGODB_URI;
const connectDb = async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("database is successfully connected....");
    } catch (error) {
        console.log("failed to connect");
    }
}
module.exports = connectDb;