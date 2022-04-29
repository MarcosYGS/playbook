const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req,res) =>{
    res.send("hello world!")
})

app.get('/explorersInNode', (req,res) =>{
    const explorers={name:"explorer", mgs:"hello"}
    res.send(explorers)
})

app.get('/explorers/:explorerName', (req,res) =>{
    res.send(req.params)
})

app.get('/launchx', (req,res) =>{
    res.send("bienvenido a launchx!")
})

app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})