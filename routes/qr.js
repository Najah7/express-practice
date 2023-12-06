const fetchQR = require('../lib/qr').fetchQR;
var express = require('express');
var router = express.Router();

router.get('/', async function (req, res, next) {
    const { url } = req.query;
    const html = await fetchQR(url);
    res.send(html);
});

module.exports = router;