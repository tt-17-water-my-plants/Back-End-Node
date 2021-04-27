const router = require('express').Router()
const { transform } = require('../middleware/users-middleware')
const Users = require('./users-model')
const Plants = require('../plants/plants-model')
const {checkIfPlantExists, checkSpecies, checkOther} = require('../middleware/plants-middleware')


router.get('/',(req,res,next) => {
    Users.getAll()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(next)
})

router.get('/:id', transform, (req,res) => {
    res.status(200).json(req.transformed)
})

router.post('/:id/add',checkSpecies,checkOther, (req,res,next) => {
    let plants = req.plants
    const {id} = req.params;
    if(plants.nickname && plants.frequency && plants.species_id){
        plants = {...plants,user_id:id}
        Plants.addPlant(plants)
            .then(newPlant => {
                res.status(201).json({
                    message:"plant created!",
                    plant:newPlant
                })
            })
            .catch(next)
    } else{
        res.status(401).json({message:"please enter nickname, frequency, species_name"})
    }

})



module.exports = router