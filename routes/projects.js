var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Project = require('../models/Project.js');

/* GET /Project listing. */
router.get('/', function(req, res, next) {
  Project.find(function (err, todos) {
    if (err) return next(err);
    res.json(todos);
  });
});

/* POST /Project */
router.post('/', function(req, res, next) {
  Project.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /Project/id */
router.get('/:id', function(req, res, next) {
  Project.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /Project/:id */
router.put('/:id', function(req, res, next) {
  Project.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* DELETE /Project/:id */
router.delete('/:id', function(req, res, next) {
  Project.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;