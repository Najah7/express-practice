var express = require('express');
var router = express.Router();

// NOTE: maybe we shoul use map instead of array
const responseObjectDetails = [
    {
        id: 1,
        title: 'title of note',
        subtitle: 'subtitle of note',
        body: 'body of note',
    },
    {
        id: 2,
        title: 'title of note2',
        subtitle: 'subtitle of note2',
        body: 'body of note2',
    }
]

/**
 * list all notes
 * @return {Object[]} data
 * @return {Number} data.id
 * @return {String} data.title
 * @return {String} data.subtitle
 */
router.get('/', function(req, res, next) {
    res.json(responseObjectDetails);
});

module.exports = router;