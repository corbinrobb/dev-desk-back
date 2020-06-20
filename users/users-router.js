const router = require('express').Router();
const Users = require('./users-models.js');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { username, is_helper, email } = await Users.getBy({id});

    res.status(200).json({ id, username, is_helper, email });
  } catch(err) {
    console.log(err);
    res.status(500).json({ error: "Could not get user from database" });
  }
})

router.get('/:id/tickets', async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.getBy({id});
    if(user.is_helper) {
      const tickets = await Users.getAssignedTickets(id);
      res.status(200).json(tickets);
    } else {
      const tickets = await Users.getUsersCreatedTickets(id);
      res.status(200).json(tickets);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Could not get user tickets from database" });
  }
})

module.exports = router;