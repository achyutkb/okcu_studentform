import express from 'express';
import * as academicInfo from '../controllers/academicinfo.controller';
import isAuthenticated from '../middlewares/authenticate';
import validate from '../config/joi.validate';
import schema from '../utils/validator';

const router = express.Router();


router.route('/')

    .post(isAuthenticated, (req, res) => {
        academicInfo.store(req, res);
    })
   
    .get(isAuthenticated, (req, res) => {
        academicInfo.findAll(req, res);
    });


router.route('/:id')

    .get(isAuthenticated, (req, res) => {
        academicInfo.findById(req, res);
    })


    .put(isAuthenticated, (req, res) => {
        academicInfo.update(req, res);
    })


    .delete(isAuthenticated, (req, res) => {
        academicInfo.destroy(req, res);
    });


export default router;