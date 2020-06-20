const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets.js');

const validateUserBody = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password){
    return res.status(400).json({ error: 'Provide both a username and password' }); 
  }
  next();
}

const validateTicketBody = (req, res, next) => {
  const { title, description, tried, created_by } = req.body;

  if (!title || !description || !tried || !created_by) {
    return res.status(400).json({ error: 'Provide title, description, tried, and created_by' });
  }
  next();
}

const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;

  if(token) {
    jwt.verify(token, secrets.jwtSecret, (err, decoded) => {
      if(err) return res.status(401).json({ error: 'Incorrect token provided' });
      req.decoded = decoded;
      next()
    })
  } else {
    return res.status(400).json({ error: 'Must provide a token in authorization header' })
  }
}

module.exports = {
  validateUserBody,
  validateTicketBody,
  authenticateUser
}