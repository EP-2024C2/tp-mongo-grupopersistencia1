const express = require('express')
const {connectToDatabase} = require('./config/mongoDb')
const cleanAndSeed = require('./seeds')
const router = require('./routes')
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(router)

app.listen(PORT,async()=>{
    await connectToDatabase()
    await cleanAndSeed()
    console.log(`Server running on port ${PORT}`)
})