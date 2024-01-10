const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

// GET /flights (index)
router.get('/', flightsCtrl.index)

// GET /flights (new Action)
router.get('/new', flightsCtrl.new);

//POST /flights (create Action)
router.post('/', flightsCtrl.create);

// GET /flights/:id (show funtionality)
router.get('/:id', flightsCtrl.show);

module.exports = router;