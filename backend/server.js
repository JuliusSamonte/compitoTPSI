const express = require("express")
const cors = require("cors")
const fs = require("fs")

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT || 3000

app.get("/api/test", (req,res)=>{
    res.json({message:"backend online"})
})

app.listen(PORT, ()=>{
    console.log("Server running on port " + PORT)
})