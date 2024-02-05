const express = require("express")
const app = express()

app.get('/sum', (req, res) => {
    const n1 = parseInt(req.query.a)
    const n2 = parseInt(req.query.b)
    const result=n1+n2
    return res.status(200).json({
        result
    })
})
