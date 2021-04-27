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
        if(nickname){
            req.plants = {...req.plants,nickname:nickname}
        }
        if(frequency){
            req.plants = {...req.plants,frequency:frequency}
        }
        next()
    }
}


module.exports = {
    checkIfPlantExists,
    checkSpecies,
    checkOther
}