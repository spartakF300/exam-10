const express = require('express');
const cors = require('cors');
const mysql = require('promise-mysql');
const comments = require('./app/comments');
const news = require('./app/news');

const config = require('./config');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const run = async () => {
    const connection = await mysql.createConnection(config.database);

    app.use('/comments', comments(connection));
    app.use('/news', news(connection));

    app.listen(config.port, () => {
        console.log('HTTP server started ' + config.port)
    });
    process.on('exit',()=>{
        connection.end()
    })

};

run().catch(e => {
    console.error(e)
});