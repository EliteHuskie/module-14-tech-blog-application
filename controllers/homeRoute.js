const router = require('express').Router();
const { Comment, Post, User } = require('../models');
const withAuth = require('../utils/auth');

// Centralized error handling middleware
const handleError = (res, err) => {
    console.error(err);
    res.status(500).render('error', { error: 'An error occurred' }); // Render an error page
};

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [{ model: User, attributes: ['name'] }],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        handleError(res, err);
    }
});

router.get('/login', async (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect('/');
            return;
        }

        res.render('login');
    } catch (err) {
        handleError(res, err);
    }
});

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password', 'email'] },
            include: [{ model: Post }],
        });

        const user = userData.get({ plain: true });

        res.render('dashboard', {
            user,
            logged_in: true,
        });
    } catch (err) {
        handleError(res, err);
    }
});

router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [{ model: Comment, include: [{ model: User }] }, { model: User }],
        });

        const post = postData.get({ plain: true });

        res.render('detailedPost', {
            post,
            logged_in: true,
        });
    } catch (err) {
        handleError(res, err);
    }
});

module.exports = router;