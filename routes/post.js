const express = require('express');
const router = express.Router();
const { authenticateJWT, jwt } = require('../auth/auth');
const bcrypt = require('bcrypt');
const User = require('../db/tables/users');
const Cards = require('../db/tables/cards');

router.post('/register', async (req, res) => {
    const { username, password } = req.body;
    !password ? res.status(400).json({ message: 'Password is required' }) : null;
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        await User.create({ username, password: hashedPassword });
        res.redirect('/login');
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });
    const validPassword = await bcrypt.compare(password, user.password);
  
    !user ? res.status(404).json({ message: 'User not found' }) : null;
    !validPassword ? res.status(401).json({ message: 'Invalid password' }) : null;
  
    const token = jwt.sign({ userId: user.id }, 'your_jwt_secret');
  
    res.cookie('token', token, { httpOnly: true, secure: true });
  
    res.redirect('/home');
  })

router.post('/createCard', authenticateJWT, (req, res) => {
    const userId = req.user.userId;
    console.log(userId);
    Cards.create({ userId });
    res.redirect('/home');
    // You can now use the userId to associate the card with the user
});

router.post('/createTask', authenticateJWT, async (req, res) => {
    console.log(req);
    // try {
    //     await card.createTask({ cardId, description });
    //     res.redirect('/home');
    // } catch (error) {
    //     res.status(500).json({ message: 'Error creating task', error });
    // }
});

module.exports = router;