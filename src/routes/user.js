'use strict'

const router = require('express').Router();

const permissions = require('../middlewares/permissions');
const user = require('../controllers/user');

// URL: /users

router.route('/')
    .get(permissions.isLogin, user.list)
    .post(user.create);

router.route('/:id')
    .get(permissions.isLogin, user.list)
    .put(permissions.isLogin, user.update)
    .patch(permissions.isLogin, user.update)
    .delete(permissions.isAdmin, user.delete);

module.exports = router;