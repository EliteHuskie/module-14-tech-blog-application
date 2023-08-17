const withAuth = (redirectUrl = '/login') => (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect(redirectUrl);
    } else {
        next();
    }
};

module.exports = withAuth;