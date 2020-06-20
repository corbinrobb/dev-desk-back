const { restart } = require('nodemon');

const router = require('express').Router();
const Tickets = require('./tickets-model.js');

router.get('/', async (req, res) => {
  try {
    const tickets = await Tickets.get();
    res.status(200).json(tickets);
  } catch(err) {
    res.status(500).json({ error: "Could not retrieve tickets" })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = await Tickets.getBy({id});
    res.status(200).json(ticket);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Could not get ticket from database" });
  }
})

module.exports = router;