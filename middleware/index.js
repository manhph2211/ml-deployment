const app = require('express')()
require('dotenv').config()

const PORT = process.env.PORT || 8000


app.get("/", (req, res, next) => {
    res.send("Xin chào!")
})

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})