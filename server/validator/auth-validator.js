const z = require("zod");

const signupSchema = z.object({
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

    phone: z.
    string({required_error:"phone number is required"}).
    trim().
    min(10,{message : "phone number must be atleast of 10 characters"}).
    max(10,{message : "phone number must be atmax of 10 characters"}) ,

    password: z.
    string({required_error:"password is required"}).
    trim().
    min(7,{message : "password must be atleast of 7 characters"}).
    max(1024,{message : "password must be atmax of 1024 characters"}) ,

});

module.exports = signupSchema;