const validator = (schema) => async(req,res,next) =>{
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (error) {
        const errorMessage = error.issues[0].message;
        res.status(400).json({msg : errorMessage});
    }
}

module.exports = validator;