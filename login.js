const {MongoClient} = require('mongodb');
const express = require('express');
require('dotenv').config()
const router = express.Router();
const connectionString = process.env.connectionURI;
const client = new MongoClient(connectionString);

router.post('/', async(req, res) => {

    const obj = {
        username: req.body.username,
        password: hashCode(req.body.password)
    };

    await client.connect();
    const usernameCheck = await client.db('auth').collection('users').findOne({
        "username": req.body.username
    });
    if (usernameCheck != null){
        if (req.body.password === password){
            res.send({
                "Success": true
            })
        }
    }

});

module.exports = router;
