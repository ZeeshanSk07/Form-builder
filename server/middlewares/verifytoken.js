const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const verifyToken = (req, res, next) => {
    try {
      const token = req.header('Authorization').split(' ')[1];
      if (!token) return res.status(401).json({ message: 'Token not found or valid' });
  
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded; // Attach user data to request object
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Token not found or valid' });
    }
  };
module.exports = {verifyToken};