
const validateUserBody = (req, res, next) => {
  const { username, password } = req.body;
  
  if (!username || !password){
    return res.status(400).json({ error: 'Provide both a username and password' }); 
  }
  next();
}

module.exports = {
  validateUserBody
}