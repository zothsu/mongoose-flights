const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');


// GET /flights/:flightId/tickets/new (new functionality)
router.get('/flights/:flightId/tickets/new', ticketsCtrl.new);

// POST /flights/:flightId/tickets (create functionality)
router.post('/flights/:flightId/tickets', ticketsCtrl.create);

module.exports = router;