import { Router } from "express";

import SessionController from "./controller/SessionController";
import HouseController from './controller/HouseController';

const routes = new Router();

routes.post('/sessions', SessionController.store)

export default routes;