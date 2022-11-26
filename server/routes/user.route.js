import express from 'express';
import * as userCtrl from '../controllers/user.controller';
import isAuthenticated from '../middlewares/authenticate';
import isSuperAdmin from '../middlewares/superAdminAuthenticate';
import validate from '../config/joi.validate';
import schema from '../utils/validator';

const router = express.Router();
router.route('/')
    .post((req, res) => {
        userCtrl.store(req, res);
    })

    .get(isAuthenticated, (req, res) => {
        userCtrl.findAll(req, res);
    });

router.route('/:id')

    .get(isAuthenticated, (req, res) => {
        userCtrl.findById(req, res);
    })

    .put(isAuthenticated, (req, res) => {
        userCtrl.update(req, res);
    })

    .delete(isAuthenticated, (req, res) => {
        userCtrl.destroy(req, res);
    });

router.route('/approveUser')
    .post(isSuperAdmin, (req, res) => {
        userCtrl.approveUser(req, res);
    })


export default router;