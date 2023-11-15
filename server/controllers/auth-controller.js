const User = require('../models/user-schema');

const home = async (req, res) => {
    try {
        res.status(200).send("this is home page of our website");
    } catch (error) {
        console.log(error);
    }
}

const register = async (req, res) => {

    try {
        console.log(req.body);

        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });

        if(userExist){
           return res.status(404).json({msg:"user already exists"});
        }

        const userCreated = await User.create({username, email, phone, password});

        console.log("user is successfully created");
        res.status(200).json({msg : userCreated});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"internal server error"});
    }
}

module.exports = { home, register };