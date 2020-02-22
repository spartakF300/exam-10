const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require('path');
const config = require('../config');
const nanoid = require("nanoid");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.uploadPath)
    },
    filename: (req, file, cb) => {
        cb(null, nanoid() + path.extname(file.originalname))
    }
});

const upload = multer({storage});
const routerNews = (connection) => {

    router.get('/', async (req, res) => {

        const items = await connection.query('SELECT * FROM `news`');
        res.send(items);
        console.log('yes')
    });

    router.get('/:id', async (req, res) => {

        const item = await connection.query('SELECT * FROM `news` WHERE `id` = ?', req.params.id);
        const itemElement = item[0];
        if (!itemElement) {
            return res.status(404).send({message: 'not a found'})
        }
        res.send(item)
    });


    router.post('/', upload.single('image'), async (req, res) => {

        const news = req.body;

        news.datetime = new Date().toISOString();
        if (req.file) {
            news.image = req.file.filename
        }

        if (!news.title || !news.description) {
            return res.status(404).send({message: 'Please fill in all fields'})
        } else {
            const item = await connection.query('INSERT INTO `news` (`title`, `description`, `image` , `datetime`)' +
                'VALUES (?,?,?,?)',
                [news.title, news.description, news.image, news.datetime]);
            res.send({id: item.insertId})
        }

    });
    router.delete('/:id', async (req, res) => {

        const item = await connection.query('DELETE FROM `news` WHERE `id` = ?', req.params.id);


        res.send({message: 'delete'})


    });
    return router
};
module.exports = routerNews;