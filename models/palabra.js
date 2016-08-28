'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var Palabra = new Schema({
    palabra:String,
    significados:[{
        significado: String,
        referencia:String,
        lecciones: [{
            num:Number,
            parte: String
        }]
    }],
    tg:Boolean
});

module.exports = mongoose.model('Palabra',Palabra);