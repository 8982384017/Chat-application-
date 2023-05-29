const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const registerLoad = async(req,res) => {
    try {
        res.render('register');
    } catch (error) {
        console.log(err.message);
    }

}
const register = async(req,res) => {
    try {
        const passwordHash = await bcrypt.hash(req.body.password, 10);

        const user = new User({
            name: req.body.name,
            email: req.body.email,
            image: 'image/'+req.file.filename,
            password: passwordHash
        });
        await user.save();

        res.render('register',{message:'User has been Registered'})

    } catch (error) {
        console.log(err.message);
    }
}
module.exports = {
    registerLoad,
    register
}