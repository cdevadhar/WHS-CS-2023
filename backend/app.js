const express = require('express');
const app = express();
const router = express.Router();
const PORT = 3000;


// Get each of the route files in /routes
// Every time you create a new endpoint, import it here
const testEndpointRoute = require('./routes/testEndpoint');

app.use(router);
app.use(express.json());

// For each route, specify the endpoint that should be processed by that route
// For example, this means requests to /test will go to the testEndpointRoute
app.use('/test', testEndpointRoute);
app.listen(PORT, (err) => {
	if (err) console.log("Error: " + err);
	else console.log("Server running on port "+ PORT);
})
