let express = require('express')
let app = express()
app.use(express.json())

app.use((request, response, next)=> {
  response.header("Access-Control-Allow-Origin", "*")
  next()
})

app.get('/cats', (request, response)=> {
  response.json([
    { name: "Fluffy", isCute: true },
    { name: "Whiskers", isCute: true },
    { name: "Sox", isCute: true }
  ])
})

app.listen(9000, ()=> { console.log("Listening on port 9000")})
