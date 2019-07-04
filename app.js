const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine','pug');

const port = process.env.PORT || 3000;

app.get('/', function(req,res){
    console.log("Hello");
    res.render('map');
})

app.listen(port);
console.log("Listening to port " + port);