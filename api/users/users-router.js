const router = require('express').Router()
const { transform } = require('../middleware/users-middleware')
const Users = require('./users-model')

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



module.exports = router