const z = require("zod");

const contactSchema =  z.object({

    username: z.
    string({required_error:"name is required"}).
    trim().
    min(3,{message : "name must be atleast of 3 characters"}).
    max(255,{message : "name must be atmax of 255 characters"}) ,

    email : z.
    string({required_error:"email is required"}).
    trim().
    email({message: "Invalid email address"}).
    min(3,{message : "email must be atleast of 3 characters"}).
    max(255,{message : "email must be atmax of 255 characters"}) ,

    message : z
    .string({required_error:"message field must be filled"})
    .trim()
    .min(5,{message:"message must be atleast of 5 characters"})
    .max(1024,{message:"message must be atmax of 1024 characters"}),
})

module.exports = contactSchema;