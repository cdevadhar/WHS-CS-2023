// This is a basic template for how you should be writing your endpoints.
// For each endpoint, create a new file in /routes and use express router
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send({"Success": true});
})

module.exports = router;