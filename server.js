const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
//usually the default route is .../routes/api.js
const api = require('./server/routes/api');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname, 'dist')));
//by default it is api.js because it is using the default route
app.use('/api',api);

app.get('*',(req,res) => 
{
    res.sendFile(path.join(__dirname,'dist/index.html'));
});

const port = process.env.port || '3000';
app.set('port',port);

const server = http.createServer(app);

server.listen(port, () => console.log(`API running on localhost:${port}`));