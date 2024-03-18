const express = require('express');
const router = express.Router();
const cards = require('../db/tables/cards');
const tasks = require('../db/tables/tasks');
const { authenticateJWT, jwt } = require('../auth/auth');

router.get('/home', authenticateJWT, async (req, res) => {
    const Cards = await cards.findAll({ where: { userId: req.user.userId }});
    const Tasks = await tasks.findAll();
    res.render('home', { Cards: Cards });
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;    