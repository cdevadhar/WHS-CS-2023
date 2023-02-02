const {MongoClient} = require('mongodb');
const express = require('express');
require('dotenv').config()
const router = express.Router();
const connectionString = process.env.connectionURI;
const client = new MongoClient(connectionString);

router.post('/', async(req, res) => {

    function hashCode(str) {
        let hash = 0;
        for (let i = 0, len = str.length; i < len; i++) {
            let chr = str.charCodeAt(i);
            hash = (hash << 5) - hash + chr;
            hash |= 0;
        }
        return hash;
    }

    const obj = {
        username: req.body.username,
        password: hashCode(req.body.password)
    };

    await client.connect();
    const usernameCheck = await client.db('auth').collection('users').findOne({
        "username": req.body.username
    });
    if (usernameCheck != null){
        res.send({
            "Error": "Username already taken"
        })
        return;
    }
    client.db('auth').collection('users').insertOne(obj);
    res.send({
        "Success": true
    })

});

module.exports = router;