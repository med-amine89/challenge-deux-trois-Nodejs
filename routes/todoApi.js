
// REST API TODO

const express = require('express');
const Todo = require('../models/todoSchema');
const router = express.Router();

router.get('/', async(req,res) => {
    const todo = await Todo.find();
    res.send(todo);
});

router.get('/:id', async(req,res) => {
    const todo = await Todo.findById(req.params.id);
    res.send(todo);
});

router.post('/', async(req,res) => {
    const todo = await Todo.create(req.body);
    res.send(todo);
});

router.put('/:id', async(req,res) => {
await Todo.findByIdAndUpdate(req.params.id, req.body);
const todo = await Todo.findById(req.params.id);
res.send(todo);
});

router.delete('/:id', async(req,res) => {
const todo = await Todo.findByIdAndDelete(req.params.id);
res.send(todo);
});
module.exports = router;