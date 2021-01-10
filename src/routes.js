
import express from 'express';
const {validateCustomersBody, validate} = require('./config/validation');
import costumersController from './controllers/customers.controller';
import verify from './config/verify';
export default function setRoutes(app) {

    const router = express.Router();
    
    router.route('/costumer').post(validateCustomersBody(),validate,verify.checkDuplicateEmail,costumersController.create);
    router.route('/costumer').get(costumersController.getAll);
    router.route('/costumer/:id').get(costumersController.get);
    router.route('/costumer/:id').put(validateCustomersBody(),validate,costumersController.put);
    router.route('/costumer/:id').delete(costumersController.delete);

app.use('/', router);
}