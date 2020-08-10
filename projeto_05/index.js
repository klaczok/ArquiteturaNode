const express = require('express')
const app = express()
const port = 3000

const logMiddleware = function(req, res, next){
    console.log("API recebeu alguma informação");

    next();//se não colocar a chamada, quebramos a cadeia de requisições do pipeline
}

app.use(express.static("./site"));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/pt', (req, res) => {
    res.send('Olá Mundo!')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})