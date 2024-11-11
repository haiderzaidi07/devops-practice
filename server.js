const express = require('express')
const app = express()
const PORT = 3100

app.get('/', (req, res) => {
        res.send({var1: "Test from issue 9", var2: 2, var3: true})
})

app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`)
})