const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
    service:{
        type:String , 
        required:true,
    },
    description:{
        type:String , 
        required:true,
    },
    price:{
        type:String , 
        required:true,
    },
    provider:{
        type:String , 
        required:true,
    },
})

const Service =  mongoose.models.services ||  mongoose.model("servies",serviceSchema);

module.exports = Service;