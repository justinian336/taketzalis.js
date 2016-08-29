//Run only once to populate the database with the content of the file diccionario.json
'use strict';

var mongoose = require('mongoose'),
    Palabra = require('./models/palabra'),
    diccionario = require('./assets/diccionario.json');

mongoose.connect(process.env.Mongo_URI);
console.log("Populating database");

var i = 0;
diccionario.map(function(word){
    var palabra = new Palabra({
       palabra:word.palabra,
       significados:word.significados,
       tg:word.tg
    });
    
    palabra.save(function(err){
        if(err){console.log("hey!")}
        i++;
        console.log(i+"/"+diccionario.length+" palabras transferidas.");
        if(i === diccionario.length){
            console.log("Transferencia terminada.");
            console.log(i +" términos transferidos a la base de datos Taketzalis.");
            console.log("Cerrando la conexión.");
            mongoose.disconnect();
        }
    });
});
