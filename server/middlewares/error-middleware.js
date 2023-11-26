const errorMiddleware = (err,req,res,next) =>{

    const status = err.status || 500;
    const message = err.message || "server error occured !!!!"
    const extraDetails = err.extraDetails || "internal server error !!!"

    return res.status(status).json({message,extraDetails});
}

module.exports = errorMiddleware;