

const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', function (req,res){
    res.send('Hello World!')
})



app.listen(port, function () {
    console.log('Exemple app listening on port 3000!')
})

app.use(function(req, res, next) {
    res.status(404).sendfile(path.resolve(__dirname, '../client/dist/404.html'))
  })