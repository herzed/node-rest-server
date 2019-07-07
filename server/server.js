require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

app.get('/',(req,res)=>{

    res.send('Hello worrld')
});


app.get('/usuarios',(req,res)=>{
    res.send('Hola desde usuario GET');
});

app.post('/usuarios',(req,res)=>{

    let body = req.body;
    if(body.nombre === undefined){
        res.status(400).json({
            ok: false,
            mensaje: 'No se envio el campo nombre'
        });
    }else{
        res.json({
            body
        });
    }
    
});

app.put('/usuarios/:id',(req,res)=>{
    let id = req.params.id;
    res.json({
        id
    });
});

app.delete('/usuarios',(req,res)=>{
    res.send('Hola desde usuario DELETE');
});

app.listen(process.env.PORT,()=>{
    console.log('Escuchando en el puerto', process.env.PORT);
});