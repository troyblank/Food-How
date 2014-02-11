var express = require('express');
var nunjucks = require('nunjucks');
var fs = require('fs');
var walk    = require('walk');

nunjucks.configure('./web/templates', { autoescape: false });

var server = {

    app:express(),
    files:[],

    initialize:function(){
        server.urlConfs();
        server.updateFileList();
    },

    startWebServer:function(){
        server.app.listen(8000);
        console.log('Listening on port 8000');
    },

    //---------------------------------------------------------------------------------------------
    //FILE HANDLING
    //---------------------------------------------------------------------------------------------

    updateFileList:function(){
        var walker  = walk.walk('./web/recipes', {followLinks:false});

        walker.on('file', function(root, stat, next){
            server.files.push(stat.name.replace(/.json/g, ''));
            next();
        });

        walker.on('end', function(){
            server.startWebServer();
        });
    },

    //---------------------------------------------------------------------------------------------
    //VIEWS
    //---------------------------------------------------------------------------------------------
    recipeListing:function(req, res){
        var links = new Array();
        var i = server.files.length-1;
        while(i >= 0){
            var name = server.files[i];
            links.push(name);
            i--;
        }
        res.send(nunjucks.render('list.html', {'links':links}));
    },

    recipeDetail:function(req, res){
        fs.readFile('./web/'+req.url+'.json', 'utf8', function(err, data){
            if(err != null){
                res.status(404).send('404 Not found');
            }else{
                res.send(nunjucks.render('recipe.html', JSON.parse(data)));
            }
        });
    },

    //---------------------------------------------------------------------------------------------
    //URL CONFS
    //---------------------------------------------------------------------------------------------
    urlConfs:function(){
        server.app.get('/', server.recipeListing);
        server.app.get('/recipes/*', server.recipeDetail);
    }
}

server.initialize();