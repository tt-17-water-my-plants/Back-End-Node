const router = require('express').Router()
const Plants = require('./plants-model');
const {checkIfPlantExists, checkSpecies, checkOther, checkDecoded, checkNickname} = require('../middleware/plants-middleware')

router.get('/',(req,res,next) => {
    Plants.getAllPlants()
        .then(plants => {
            res.status(200).json(plants)
        })
        .catch(next)
})

router.get('/:id',checkIfPlantExists, checkDecoded, (req,res) => {
        res.status(200).json(req.plant)
})

router.put('/:id',checkIfPlantExists, checkSpecies, checkOther, checkDecoded, checkNickname, (req,res,next)=>{
    const {id} = req.params;
    if(req.plants){
        Plants.changePlant(id,req.plants)
        .then(plant => {
            res.status(200).json({message:"updated!", updated:plant})
        })
        .catch(next)
    }else{
        res.status(418).json({message:"nothing to update!"})
    }
})

router.delete('/:id',checkIfPlantExists, checkDecoded, (req,res,next) => {
    const {id} = req.params;
    Plants.deletePlant(id)
        .then(plant => {
            res.status(200).json({message:"deleted!", deleted:plant})
        })
        .catch(next)
})

module.exports = router;