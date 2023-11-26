const validator = (schema) => async(req,res,next) =>{
    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next();
    } catch (error) {
        const extraDetails = error.issues[0].message;
        // res.status(400).json({msg : errorMessage});
        const status = 400;
        const message = "validation error occured";
        const err = {
            status,
            message,
            extraDetails
        }

        next(err);
    }
}

module.exports = validator;