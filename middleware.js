function checkRole(requiredRole) {
  return (req, res, next) => {
    const userRole = req.headers['user-role'];
    if (userRole === requiredRole) {
      next();
    } else {
      res.status(403).json({ error: 'Access denied' });
    }
  };
}

module.exports = { checkRole };
