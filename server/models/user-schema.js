const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    isAdmin: {
        type: Boolean,
        require: true,
        default: false
    },
})

//secure the password..............
userSchema.pre('save', async function (next) {
    const user_details = this;

    if(!user_details.isModified('password')){
        next();
    }

    try {

        const saltRound = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hashSync(user_details.password, saltRound);
        user_details.password = hashPassword;
        console.log(user_details);

    } catch (error) {
        next(error);
    }
})

userSchema.methods.generateToken = async function () {
    try {
        return jwt.sign({
            userid: this._id.toString(),
            email: this.email,
            isAdmin: this.isAdmin
        },
        process.env.JWT_SECRET_KEY,
        {
            expiresIn:"30d",
        }
        )        
    } catch (error) {
        console.error(error);
    }
}

const User = mongoose.models.users || mongoose.model('users', userSchema);
module.exports = User;