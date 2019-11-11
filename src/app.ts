import express = require('express');

const app: express.Application = express();

app.get('/', function(req, res) {
    res.send('Hello world!!')
})

app.listen(3000, function() {
    console.log('User management app running on port 3000');
})