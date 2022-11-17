const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen (3002, ()=> console.log('hay servidor'));


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
})

app.get('/login', (req, res) => {
    let ruta = path.resolve(__dirname,"./views/login.html");
    res.sendFile(ruta)
    
})

app.get('/register',(req,res)=>{
    let ruta = path.resolve(__dirname,"./views/register.html");
    res.sendFile(ruta)
})