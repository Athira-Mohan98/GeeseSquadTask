require('dotenv').config()
const express = require('express')
const cors = require('cors')
const route = require('./Router/route') 
const db = require('./config/db')

const app = express()

app.use(cors())         
app.use(express.json())
app.use(route)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("App listening on port", PORT)
})


