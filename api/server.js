const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const usersRouter = require('./users/users-router')
const plantsRouter = require('./plants/plants-router')
const authRouter = require('./auth/auth-router')
const {restricted} = require('./middleware/users-middleware')
const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

server.use('/api/users',restricted,usersRouter)
server.use('/api/',authRouter)
server.use('/api/plants',restricted,plantsRouter)

server.use('*',(req,res) => {
    res.status(404).json({message:"Page not found!"})
})
server.use((err,req,res,next) => {
    res.status(500).json({message:'Error!', error:err.message})
})

module.exports = server
