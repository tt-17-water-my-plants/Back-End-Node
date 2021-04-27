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

const checkSpecies = async(req,res,next) =>{
    let {species_name} = req.body;
    if(species_name && species_name.trim() !==''){
        species_name = species_name.trim().toLowerCase()
        const checkSpec = await Plants.getSpecies(species_name)
        if(checkSpec){
            req.plants = {...req.plants,species_id:checkSpec.species_id}
            next()
        }else{
            const check = await Plants.addSpecies({species_name})
            req.plants = {...req.plants,species_id:check.species_id}
            next()
        }
    }else{
        next()
    }
}

const checkOther = async(req,res,next) => {
    let {nickname, frequency} = req.body;
    if(!nickname && !frequency){
        next()
    } else{
        if(frequency){
            req.plants = {...req.plants,frequency:frequency}
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
    checkSpecies,
    checkOther,
    checkDecoded,
    checkNickname
}