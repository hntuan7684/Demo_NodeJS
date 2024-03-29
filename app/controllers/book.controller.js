var Book = require('../models/book.model');

exports.get_list = function(req, res) {
    Book.get_all(function(data){
        res.send({result:data});
    });
}

exports.detail = function(req, res) {
    Book.getById(req.params.id, function(respnse) {
        res.send({result: respnse});
    });
}


// body-parser

exports.add_book = function(req, res) {
    var data = req.body;
    Book.create(data, function(response) {
        res.send({result:response});
    });
}

exports.delete_book = function(req, res) {
    var id = req.params.id;
    Book.remove(id, function(response) {
        res.send({result: response});
    })
}

exports.update_book = function(req, res) {
    var data = req.body;
    Book.update(data, function(response) {
        res.send({result:response});
    });
}