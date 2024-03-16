const express = require('express');
const router = express.Router();
const { authenticateJWT, jwt } = require('../auth/auth');

router.get('/home', authenticateJWT, (req, res) => {
    res.render('home');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;    