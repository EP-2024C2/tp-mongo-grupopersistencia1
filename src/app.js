const express = require('express')
const {connectToDatabase} = require('./config/mongoDb')
const cleanAndSeed = require('./seeds')
const router = require('./routes')
const PORT = process.env.PORT || 3000  
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use(router)

app.listen(PORT,async()=>{
    mongoose.set('strictQuery', false)
    await connectToDatabase()
    await cleanAndSeed()
    console.log(`Server running on port ${PORT}`)
})