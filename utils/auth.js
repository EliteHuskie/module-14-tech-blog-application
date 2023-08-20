const withAuth = (req, res, next) => {
  if (!req.session.logged_in) {
    return res.redirect('/login');
  }

  // Check inactivity timeout
  const INACTIVITY_TIMEOUT = 5 * 60 * 1000; // 5 minutes in milliseconds
  const currentTime = Date.now();
  const elapsedTime = currentTime - req.session.lastActivity;

  if (elapsedTime > INACTIVITY_TIMEOUT) {
    req.session.destroy((err) => {
      if (err) {
        console.error('Error destroying session:', err);
      }
      return res.redirect('/login');
    });
    return;
  }

  // Update last activity timestamp for user
  req.session.lastActivity = currentTime;

  // Proceed to next middleware or route handler
  next();
};

module.exports = withAuth;