// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Con esto inicializamos esta app
app.get('/v1/explorers',(req,res) => {
 console.log(`Api Explorer GET ALL requests ${new Date(new Date().getTime())}`)
 const explorer1 = {id:1, name:"marcos"}
 const explorer2 = {id:2, name:"yeyo"}
 const explorer3 = {id:3, name:"yehosua"}
 const explorer4 = {id:4, name:"emiliano"}
 const explorers=[explorer1, explorer2, explorer3, explorer4]
 res.status(200).json(explorers)

})

app.get('/v1/explorers/:id',(req,res) => {
    console.log(`Api explorers GET requests ${new Date()}`)
    console.log(`getting explorer whit id ${req.params.id}`)
    const explorer = {id : 1, name:"yeyo"} 
    res.status(200).json(explorer)
})

app.put('/v1/explorers/:id',(req,res) => {
    console.log(`Api explorers PUT requests ${new Date()}`)
    console.log(`update explorer whit id ${req.params.id}`)
    const requestBody = req.body
    res.status(200).json({message: "updated!"})
})


app.delete('/v1/explorers/:id',(req,res) => {
    console.log(`Api explorers DELETE request ${new Date()}`)
    console.log(`update explorer whit id ${req.params.id}`)
    const requestBody = res.body
    res.status(200).json({message: "Deleted"})
})


app.post('/v1/explorers',(req,res) => {
    console.log(`Api Explorers POST request ${new Date()}`)
    const requestBody = req.body
    res.status(201).json({message: "created"})
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
   })