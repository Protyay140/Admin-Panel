const mongoose = require('mongoose');
const URL = "mongodb://127.0.0.1:27017/mern_admin";
const connectDb = async ()=>{
    try {
        await mongoose.connect(URL);
        console.log("database is successfully connected....");
    } catch (error) {
        console.log("failed to connect");
    }
}
module.exports = connectDb;