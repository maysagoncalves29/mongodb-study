import { Router } from "express";
import multer from "multer";
import uploadConfig from './config/upload'

import SessionController from "./controller/SessionController";
import CoffeeController from './controller/CoffeeController';
import DashboardController from './controller/DashboardController';


const routes = new Router();
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store);

routes.post('/coffee', upload.single('photo'), CoffeeController.store);
routes.get('/coffee', CoffeeController.index);
routes.put('/coffee/:coffee_id', upload.single('photo'), CoffeeController.update);
routes.delete('/coffee', CoffeeController.destroy);

routes.get('/dashboard', DashboardController.show);




export default routes;