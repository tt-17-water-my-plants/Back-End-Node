const router = require('express').Router()
const { transform, checkAccess, checkPhoneUpd } = require('../middleware/users-middleware')
const Users = require('./users-model')
const Plants = require('../plants/plants-model')
const { checkSpecs, checkOther, checkNickname} = require('../middleware/plants-middleware')

router.get('/',(req,res,next) => {
    Users.getAll()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(next)
})

router.get('/:id',checkAccess, transform, (req,res) => {
    res.status(200).json(req.transformed)
})

router.post('/:id/add',checkAccess, checkSpecs, checkOther, checkNickname,(req,res,next) => {
    let plants = req.plants
    const {id} = req.params;
    if(plants.nickname && plants.h2oFrequency && plants.specs_id){
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
        res.status(401).json({message:"please enter nickname, h2oFrequency, species"})
    }
})

router.put('/:id/update',checkAccess, checkPhoneUpd, (req,res,next) =>{
    const user = req.body;
    const {id} = req.params
    Users.update(id,user)
        .then(updated => {
            res.status(200).json(updated)
        })
        .catch(next)
})

module.exports = router