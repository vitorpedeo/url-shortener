const express = require('express');
const router = express.Router();
const URL = require('../models/URL');

router.get('/', async (req,res) => {
    const URLs = await URL.find({});
    res.render('home', {
        URLs: URLs
    });
});

router.post('/shrinker', async (req,res) => {
    const newURL = new URL({
        original: req.body.url
    });

    await newURL.save();

    res.redirect('/');
});

module.exports = router;