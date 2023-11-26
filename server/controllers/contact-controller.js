const Contact = require("../models/contact-schema");

const contactForm = async (req,res)=>{
    try {
        const respnse = await Contact.create(req.body);
        return res.status(200).json({msg:"message is delivered successfully "}); 
    } catch (error) {
        return res.status(500).json({msg:"message not delivered!!!"});
    }
}

module.exports = contactForm;