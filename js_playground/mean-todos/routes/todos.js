var express = require("express");
var mongojs = require('mongojs');
var router = express.Router();

var db = mongojs('mongodb://laertispappas:pappaspappas@ds157819.mlab.com:57819/meantodosapp', ['todos']);

// GET all todos
router.get('/todos', function(req, res, next){
    db.todos.find(function(err, todos){
        if (err) {
            res.send(err);
        } else {
            res.json(todos);
        }
    });
});


// GET TODO
router.get('/todos/:id', function(req, res, next){
    db.todos.findOne({
        _id: mongojs.ObjectId(req.params.id)
    }, function(err, todo){
        if(err) { 
            res.send(err) 
        } else { 
            res.send(todo) 
        }
    });    
});

// Create TODO
router.post('/todos', function(req, res, next) {
    var todo = req.body;
    if (!todo.text || !(todo.isCompleted + '')){
        res.status(400);
        res.json({
            "error": "Invalid data"
        })
    } else {
        db.todos.save(todo, function(err, result){
            if(err) {
                res.send(err);
            } else {
                res.json(result);
            }
        });
    }
});


// Update todo
router.put('/todos/:id', function(req, res, next){
    var todo = req.body;
    var updObj = {};

    if (todo.isCompleted) {
        updObj.isCompleted = todo.isCompleted;        
    }

    if(todo.text) {
        updObj.text = todo.text;
    }

    if(!updObj) {
        res.status(400);
        res.json({
            "error": "Invalid data"
        })
    } else {
        db.todos.update({
            _id: mongojs.ObjectId(req.params.id)
        }, updObj, {}, function(err, result){
            if(err) {
                res.send(err);
            } else {
                res.json(result);
            }            
        });
    }
});


// delete todos
router.delete('/todos/:id', function(req, res, next){
    db.todos.remove({
        _id: mongojs.ObjectId(req.params.id)
    }, '', function(err, result){
        if(err){
            res.send(err); 
        } else {
            res.json(result);
        }
    });
});

module.exports = router;