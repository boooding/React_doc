const express = require('express');
const app = express()

const portNumber = 3002;

app.listen(portNumber, () => {
    console.log('The server start at port ' + portNumber)
})