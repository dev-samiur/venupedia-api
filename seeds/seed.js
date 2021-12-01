const User= require('../models/User');
const bcrypt = require("bcrypt");

const createUser= async () => {
    let hashedPass= await bcrypt.hash('password here', 10)
    User.create({
        email: 'test@gmail.com', 
        password: hashedPass
    })
}

createUser()