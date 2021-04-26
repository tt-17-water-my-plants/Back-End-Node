const router = require('express').Router()
const Users = require('./users-model')

router.get('/',(req,res,next) => {
    Users.getAll()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(next)
})

router.get('/:id',(req,res,next) => {
    const {id} = req.params
    Users.getById(id)
        .then(users => {
            res.status(200).json(users)
        })
        .catch(next)
})



module.exports = router