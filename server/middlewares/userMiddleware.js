const jwt = require("jsonwebtoken");
const User = require('../models/user-schema');
const userMiddleware = async (req, res, next) => {
    const jwtTokenData = req.header("Authorization");
    if(!jwtTokenData){
        return res.status(500).json("jwt token is not authorized...");
    }
    const jwtToken = jwtTokenData.replace("Bearer","").trim();
    // console.log("token : ",jwtToken);

    try {
        const isVarified = jwt.verify(jwtToken,process.env.JWT_SECRET_KEY);
        
        const userData = await User.findOne({email: isVarified.email}).select({
            password:0
        });
        // console.log(userData);

        req.user = userData;
        req.token = jwtTokenData;
        req.userId = userData._id;

        next();
    } catch (error) {
       return res.status(500).json({msg:"jwt verification error...."});
    }

}

module.exports = userMiddleware;