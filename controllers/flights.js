const Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    create,
    show
};

async function index(req, res) {
  const flights = await Flight.find( {} );
  const sortedFlights = flights.sort((a, b) => new Date(a.departs) - new Date(b.departs));
  res.render('flights/index', { title: 'Flight List', flights: sortedFlights });
}


function newFlight(req, res) {
  const newFlight = new Flight();
  // Obtain the default date
  const dt = newFlight.departs;
  let departsDate = `${dt.getFullYear() - 1}-${(dt.getMonth() + 1).toString().padStart(2, '0')}`;
  departsDate += `-${dt.getDate().toString().padStart(2, '0')}T${dt.toTimeString().slice(0, 5)}`;
  res.render('flights/new', { departsDate, title: 'Add a New Flight', errorMsg: '' });
}

async function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  try {
    await Flight.create(req.body);
    res.redirect('/flights/new');
  } catch (err) {
    console.log(err) 
    res.render('flights/new', { errorMsg: error.message });
  }
}

async function show(req, res) {
  const flight = await Flight.findById(req.params.id);
  res.render('flights/show', { title: 'Flight Detail', flight});
}