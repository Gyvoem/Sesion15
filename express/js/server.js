const express = require('express')

const app = express()
const port = 4000

app.get(`/`, (req, res)=> {
    res.send(`5 + 5 = 10`)
})

app.listen(port,()=> {
    console.log(`Example app Listening at http://localhost:${port}`)
})