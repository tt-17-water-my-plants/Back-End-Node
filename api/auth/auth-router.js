const router = require('express').Router();
const Users = require('../users/users-model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const {
    checkUsernameReg,
    checkPassword,
    checkPhoneReg,
    checkPhoneLog,
    checkUsernameLog} = require('../middleware/users-middleware')

router.post('/register', checkUsernameReg, checkPassword, checkPhoneReg, (req,res,next) => {
    const user = req.body;
    const rounds = 8;
    const hash = bcrypt.hashSync(user.password, rounds)
    user.password = hash;
    Users.add(user)
        .then(newUser => {
            res.status(201).json(newUser)
        })
        .catch(next)
})

router.post('/login', checkUsernameLog, checkPassword, (req,res) => {
    const user = req.user;
    const {password} = req.body;
    if (bcrypt.compareSync(password,user.password)){
        const token = createToken(user)
        res.status(200).json({
            message:`welcome ${user.username}`,
            id:user.id,
            token
        })
    } else{
        res.status(401).json({message:"invalid credentials"})
    }
})

router.post('/login-phone', checkPhoneLog, checkPassword, (req,res) => {
    const user = req.user;
    const {password} = req.body;
    if (bcrypt.compareSync(password,user.password)){
        const token = createToken(user)
        res.status(200).json({
            message:`welcome ${user.username}`,
            id:user.id,
            token
        })
    } else{
        res.status(401).json({message:"invalid credentials"})
    }
})

function createToken(user){
    const payload = {
        id:user.id,
        username:user.username
    }
    const options = {
        expiresIn:'1d'
    }
    return jwt.sign(payload,process.env.JWT_SECRET,options)
}

module.exports = router