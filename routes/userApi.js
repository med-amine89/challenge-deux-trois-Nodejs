
// REST API USER

const express = require('express');
const User = require('../models/userSchema');
const router = express.Router();

// get all users
router.get('/', (req, res) => {
    User.find({}, (err, resultat) => {
        if (err) res.send(err);
        res.send(resultat);
    });
});

// get user by id 
router.get('/:id', async (req, res) => {
    const user = await User.findById(req.params.id).populate('todos');
    res.send(user);
});

router.post('/', (req, res) => {
    User.create(req.body).then((createdUser) => {
        res.send(createdUser);
    });
});

// affecter un id de todo dans user
router.post('/affecte-todo-to-user/:idUser/:idTodo', (req, res) => {
    User.findByIdAndUpdate({ _id: req.params.idUser }, { $push: { todos: req.params.idTodo } }).then(() => {
        User.findOne({ _id: req.params.idUser, }).then((user) => {
            res.send(user);
        });
    });
});

// enlever un todo existant dans le tableau todo d'un user
router.delete('/enlever-todo-from-user/:idUser/:idTodo', (req, res) => {
    User.findByIdAndUpdate({ _id: req.params.idUser }, { $pull: { todos: req.params.idTodo } }).then(() => {
        User.findOne({ _id: req.params.idUser }).then((user) => {
            res.send(user);
        });
    });
});

router.put('/:id', async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body);
    const user = await User.findById(req.params.id);
    res.send(user);
});

router.delete('/:id', (req, res) => {
    User.findByIdAndRemove(req.params.id, (err, resultat) => {
        if (err) res.send(err);
        res.send(resultat);
    });
});

module.exports = router;