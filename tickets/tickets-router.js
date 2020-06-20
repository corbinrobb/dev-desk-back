const router = require('express').Router();
const Tickets = require('./tickets-model.js');
const { validateTicketBody } = require('../middleware');

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

router.post('/', validateTicketBody, async (req, res) => {
  try {
    const ticket = req.body;
    const newTicket = await Tickets.add(ticket);
    res.status(200).json(newTicket);
  } catch (err) {
    res.status(500).json({ error: "Could not add ticket to database" })
  }
})

router.put('/:id', validateTicketBody, async (req, res) => {
  try {
    const { id } = req.params;
    const ticket = req.body;
    const updatedTicket = await Tickets.update(id, ticket);
    res.status(200).json(updatedTicket);
  } catch (err) {
    res.status(500).json({ error: "Could not update ticket in database" })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const removedTicket = await Tickets.remove(id);
    res.status(200).json(removedTicket);
  } catch (err) {
    res.status(500).json({ error: "Could not add ticket to database" })
  }
})

module.exports = router;