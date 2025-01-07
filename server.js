const express = require('express');
const { log } = require('node:console');
const app = express();

app.get('/', (req, res)=>{
    res.send('Hello World');
    res.end();
})

app.listen(5000, ()=>{
    console.log('Server is listening at port 5000....');
    
})