const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            res.status(201).json({ success: true, user: userData });
        });
    } catch (err) {
        res.status(400).json({ error: 'User registration failed' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            res.status(400).json({ error: 'Incorrect email or password' });
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ error: 'Incorrect email or password' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ success: true, message: 'You are now logged in', user: userData });
        });

    } catch (err) {
        res.status(400).json({ error: 'Login failed' });
    }
});

router.post('/logout', (req, res) => {
    try {
        if (req.session.logged_in) {
            req.session.destroy(() => {
                res.status(204).json({ success: true });
            });
        } else {
            res.status(400).json({ error: 'Not logged in' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Logout failed' });
    }
});

module.exports = router;