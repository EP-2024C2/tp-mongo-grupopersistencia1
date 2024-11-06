const express = require('express')
const {connectToDatabase} = require('./config/mongoDb')
const seedDatabase = require('./seeds')
const PORT = process.env.PORT || 3000

const app = express()

app.use(express.json())

app.listen(PORT,async()=>{
    await connectToDatabase()
    await seedDatabase()
    console.log(`Server running on port ${PORT}`)
})