const express = require('express');
const app = express();
const path = require('path');
app.use(express.static('/dist'));

app.listen(process.env.PORT || 8000);

app.get('/*', function(req, res) {
    console.log('?????????? ',`${process.env.PWD}` )
    res.sendFile(`${process.env.PWD}/index.html`)
});

console.log('console listening');