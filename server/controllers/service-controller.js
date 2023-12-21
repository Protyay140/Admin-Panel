const Service = require('../models/service-schema'); 

const services = async(req,res)=>{
    try {
        const data = await Service.find();
        res.status(200).json(data);
    } catch (error) {
        return res.status(505).json({msg:"error in getting services....."});
    }
}

module.exports = services;