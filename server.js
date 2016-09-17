'use strict';

var express = require('express'),
    mongoose = require('mongoose'),
    app = express(),
    PORT = process.env.PORT,
    routes = require('./routes');
    
app.use('/source',express.static(process.cwd()+'/source/build'));
app.use('/public',express.static(process.cwd()+'/public'));
app.use(function(req,res,next){
   
   res.setHeader('Access-Control-Allow-Origin','http://tajtani-justinian336.c9users.io');
   res.setHeader('Access-Control-Allow-Methods','GET');
   
   next(); 
});

routes(app);
console.log("mongo URI: ", process.env.Mongo_URI);
    
mongoose.connect(process.env.Mongo_URI);

app.listen(PORT,function(){
    console.log('dancing on port: '+ PORT);
});