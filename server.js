'use strict';

var express = require('express'),
    mongoose = require('mongoose'),
    app = express(),
    PORT = process.env.PORT,
    routes = require('./routes');
    
app.use('/source',express.static(process.cwd()+'/source/build'));
app.use('/public',express.static(process.cwd()+'/public'));

routes(app);
    
mongoose.connect('mongodb://localhost/taketzalis');

app.listen(PORT,function(){
    console.log('dancing on port: '+ PORT);
});