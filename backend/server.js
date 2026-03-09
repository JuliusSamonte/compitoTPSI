const express = require("express")
const cors = require("cors")
const fs = require("fs")

const app = express()

app.use(cors())
app.use(express.json())

const FILE = "data.json"

app.get("/api/items", (req, res) => {
    const data = JSON.parse(fs.readFileSync(FILE))
    res.json(data)
})

app.post("/api/items", (req, res) => {
    const data = JSON.parse(fs.readFileSync(FILE))

    data.push(req.body)

    fs.writeFileSync(FILE, JSON.stringify(data))

    res.json({ message: "item aggiunto" })
})

app.listen(3000, () => {
    console.log("Server running")
})