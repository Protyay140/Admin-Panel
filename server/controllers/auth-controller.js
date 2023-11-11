const home = async (req,res)=>{
    try {
        res.status(200).send("this is home page of our website");
    } catch (error) {
        console.log(error);
    }
}

const register = async (req,res)=>{
    try {
        console.log(req.body);
        res.status(200).json(req.body);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {home,register};