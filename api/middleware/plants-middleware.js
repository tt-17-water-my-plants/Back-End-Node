const Plants = require('../plants/plants-model')

const checkIfPlantExists = async(req,res,next) => {
    const {id} = req.params;
    const check = await Plants.getPlantById(id)
    if (check){
        req.plant = check
        next()
    } else{
        res.status(401).json({message:"Plant not found!"})
    }
}

const checkspecs = async(req,res,next) =>{
    let {species} = req.body;
    if(species && species.trim() !==''){
        species = species.trim().toLowerCase()
        const checkSpec = await Plants.getspecs(species)
        if(checkSpec){
            req.plants = {...req.plants,specs_id:checkSpec.specs_id}
            next()
        }else{
            const check = await Plants.addspecs({species})
            req.plants = {...req.plants,specs_id:check.specs_id}
            next()
        }
    }else{
        next()
    }
}

const checkOther = async(req,res,next) => {
    let {nickname, h2oFrequency} = req.body;
    if(!nickname && !h2oFrequency){
        next()
    } else{
        if(h2oFrequency){
            req.plants = {...req.plants,h2oFrequency:h2oFrequency}
        }
        if(nickname){
            req.plants = {...req.plants,nickname:nickname}
        }
        next()
    }
}

const checkDecoded = (req, res, next) => {
    const checkDecoded = req.decodedToken;
    if(checkDecoded && checkDecoded.username === req.plant.owner){
        next()
    } else{
        res.status(401).json({message:`This is a content for user ${req.plant.owner}`})
    }
}

const checkNickname = async(req,res,next) => {
    const {nickname} = req.plants
    const {id} = req.params;
    const checkId = await Plants.getPlantById(id)
    const ifExist = await Plants.getPlantByFilter({nickname});
    (ifExist[0] && checkId.plant_id !== ifExist[0].plant_id)
    ? res.status(401).json({message:`plant with nickname ${nickname} already exists`})
    : next()
}

module.exports = {
    checkIfPlantExists,
    checkspecs,
    checkOther,
    checkDecoded,
    checkNickname
}