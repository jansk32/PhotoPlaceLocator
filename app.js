const express = require('express');
const app = express();
const multer = require('multer');

app.set('views', './views');
app.set('view engine','pug');

const port = process.env.PORT || 3000;

app.get('/', function(req,res){
    console.log("Hello");
    res.render('map');
})

app.get('/create', function(req,res){
    res.render('create');
})


app.listen(port);
console.log("Listening to port " + port);