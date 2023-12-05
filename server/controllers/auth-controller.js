const User = require('../models/user-schema');
const bcrypt = require('bcrypt');
const home = async (req, res) => {
    try {
        res.status(200).send("this is home page of our website");
    } catch (error) {
        console.log(error);
    }
}

const register = async (req, res) => {

    try {
        // console.log(req.body);

        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(404).json({ msg: "user already exists" });
        }

        const userCreated = await User.create({ username, email, phone, password });

        console.log("user is successfully created");
        res.status(200).json({
            msg: "user is successfully registered",
            token: await userCreated.generateToken(),
            userid: userCreated._id.toString()
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "internal server error" });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = await req.body;
        const loginUser = await User.findOne({ email });
        if (!loginUser) {
            return res.status(400).json({ msg: "invalid credential" });
        }
        const checkPassword = await bcrypt.compare(password, loginUser.password);
        if (checkPassword) {
            res.status(200).json({
                msg: "Login successful",
                token: await loginUser.generateToken(),
                userid: loginUser._id.toString()
            });
        } else {
            return res.status(400).json({ msg: "wrong email or password" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "internal server error" });
    }
}


module.exports = { home, register, login };