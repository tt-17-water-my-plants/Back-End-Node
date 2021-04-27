const Users = require('../users/users-model');

const checkUsernameReg = async(req,res,next) => {
    let {username} = req.body;
    if(!username){
        res.status(401).json({message:"username is missing. Please enter a username"})
    } else{
        username = username.trim();
        if (username !== ''){
            const check = await Users.getBy({username}).first()
            if(!check){
                req.body.username= username;
                next()
            } else{
                res.status(401).json({message:"username already exists"})
            }
        } else {
            res.status(401).json({message:"username is missing. Please enter a username"})
        }
    }
}

const checkPassword = (req,res,next) => {
    const {password} = req.body;
    if (!password || password===''){
        res.status(401).json({message:"password is missing. Please enter a password"})
    } else if(typeof password !== 'string'){
        res.status(401).json({message:"password must be a string"})
    } else{
        next()
    }
}

const checkPhoneReg = async(req,res,next) => {
    let {phone_number} = req.body;
    if (!phone_number){
        res.status(401).json({message:"phone number is missing. Please enter a phone number"})
    } else if(typeof phone_number !== 'string'){
        res.status(401).json({message:"phone number must be a string"})
    } else if(phone_number.trim().length !== 10){
        res.status(401).json({message:"phone number must be valid and contain 10 numbers"})
    } else{
         phone_number = phone_number.trim()
        const check = await Users.getBy({phone_number}).first()
        if(!check){
            req.body.phone_number = phone_number
            next()
        } else{
            res.status(401).json({message:"phone number already exists"})
        }
    }
}

const checkPhoneLog = async (req,res,next) => {
    const {phone_number} = req.body;
    if(phone_number){
        const check = await Users.getBy({phone_number}).first()
        if(!check){
            res.status(401).json({message:"User not found with provided phone number"})
        } else{
            req.user = check
            next()
        }
    } else{
        res.status(401).json({message:"please enter phone number"})
    }
}

const checkUsernameLog = async (req,res,next) => {
    const {username} = req.body;
    if(username){
    const check = await Users.getBy({username}).first()
    if(!check){
        res.status(401).json({message:"User not found with provided username"})
    } else{
        req.user = check
        next()
    }
     } else{
        res.status(401).json({message:"please enter username"})
    }
}

const transform = async (req,res,next) => {
    const {id} = req.params;
    const check = await Users.getPlants(id);
    if (check.length>0){
        const plants_list = check.map(plant => {
            const exist = {
                plant_id:plant.plant_id,
                nickname:plant.nickname,
                species:plant.species_name,
                frequency:plant.frequency
            }
            if (exist.plant_id === null){
                return null
            } else{
                return exist
            }
        })
        const transformed = {
            id:check[0].id,
            username:check[0].username,
            phone_number:check[0].phone_number,
            plants: plants_list[0] === null  ? [] : plants_list
        }
        req.transformed = transformed
        next()
    } else{
        res.status(401).json({
            message:"user not found"
        })
    }
} 

module.exports = {
    checkUsernameReg,
    checkPassword,
    checkPhoneReg,
    checkPhoneLog,
    checkUsernameLog,
    transform
}