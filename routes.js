'use strict';

var _ = require('underscore'),
    Palabras = require('./models/palabra');

module.exports = function(app){
    
    app.get('/',function(req,res){
       res.sendfile(process.cwd()+'/index.html');
    });
    
    app.get('/diccionario-NA',function(req,res){
        
        if(req.query.palabra){
            if(req.query.exacto==="verdadero"){
                Palabras.findOne({palabra:req.query.palabra},{_id:0,__v:0},function(err,result){
                    if(err){throw(err)}
                    res.json(result); 
                });
            }
            else{
                Palabras.find({palabra:{"$regex":req.query.palabra,"$options":"i"}},{_id:0,__v:0},function(err,result){
                    if(err){throw(err)}
                    res.json(result); 
                });
            }
        }
        else{
            Palabras.find({},{_id:0,__v:0},function(err,result){
                if(err){throw(err)}
                res.json(result);
            });
        }
    });
    
    app.get('/',function(req,res){
       res.sendfile(process.cwd()+'/public/index.html');
    });
    
    app.get('/diccionario-ES',function(req,res){
        
        if(req.query.palabra){
            if(req.query.exacto==="verdadero"){
                Palabras.find({"significados":{"$elemMatch":{"significado":req.query.palabra}}},{_id:0,__v:0},function(err,result){
                    if(err){throw(err)}
                    var transformedResult = result.map(function(word){
                        return {palabra:req.query.palabra, tg:word.tg, significado: word.palabra};
                    });
                    res.json(transformedResult);
                });
            }
            else{
                Palabras.find({"significados":{"$elemMatch":{"significado":{"$regex":req.query.palabra,"$options":"i"}}}},{_id:0,__v:0},function(err,result){
                    if(err){throw(err)}
                    var transformedResult = result.map(function(word){
                        return {palabra:req.query.palabra, tg:word.tg, significado: word.palabra};
                    });
                    res.json(transformedResult);
                });
            }
        }
        else{
            Palabras.find({},{_id:0,__v:0},function(err,result){
                if(err){throw(err)}
                res.json(result);
            });
        }
    });
};