const express = require('express');
const router = express.Router();

const routerComments = (connection) => {

    router.get('/', async (req, res) => {

        const items = await connection.query('SELECT * FROM `comments`');
        res.send(items)
    });

    router.get('/:id', async (req, res) => {
        const item = await connection.query('SELECT * FROM `comments` WHERE `news_id` = ?', req.params.id);

        res.send(item)
    });


    router.post('/', async (req, res) => {
        const comments = req.body;

        if (!comments.message) {
            return res.status(404).send({message: 'Please fill in all fields'})
        } else {

            if (!comments.author) comments.author = 'Anonymous';

            const item = await connection.query('INSERT INTO `comments` (`news_id`,`author`,`message`) VALUES (?,?,?)', [comments.id, comments.author, comments.message]);
            res.send({id: item.insertId});
        }


    });
    router.delete('/:id', async (req, res) => {
       await connection.query('DELETE FROM `comments` WHERE `id` = ?', req.params.id);



        res.send({message: 'delete'});


    });
    return router
};
module.exports = routerComments;