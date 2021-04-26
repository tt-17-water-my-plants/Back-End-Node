const router = require('express').Router()

router.get('/',(req,res,next) => {
    res.status(200).json({message:"good"})
})

module.exports = router