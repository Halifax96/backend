const express = require("express");
const userSchema = require("../models/user");
const router = express.Router();

//Create user

router.post('/users', (req, res) => {
    const user = userSchema(req.body);
    user
    .save()
    .then((data)=>res.json(data))
    .catch((error)=>res.json({message:error}));
});

//GetAll users
router.get('/users', (req, res) => {
    const user = userSchema(req.body);
    userSchema
        .find()
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
});

// Get an user
router.get('/users/:id', (req, res) => {
    const user = userSchema(req.body);
    const {id} = req.params;
    userSchema
        .findById(id)
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
});

// Update an user
router.put('/users/:id', (req, res) => {
    const {id} = req.params;
    const {name, age, email} = req.body;
    userSchema
        .updateOne({_id:id},{$set:{ name, age, email }})
        .then((data)=>res.json(data))
        .catch((error)=>res.json({message:error}));
});

// Delete an user
router.delete('/users/:id', (req, res) => {
    const {id} = req.params;
    userSchema
          .deleteOne({_id:id})
          .then((data)=>res.json(data))
          .catch((error)=>res.json({message:error}));
});

// Delete all
router.delete('/users', (req, res) => {
    userSchema
          .deleteMany({})
          .then((data)=>res.json(data))
          .catch((error)=>res.json({message:error}));
});


module.exports = router;
