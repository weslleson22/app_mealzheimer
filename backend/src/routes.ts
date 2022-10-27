import express, { request, response } from "express";
import multer from "multer";

import multerConfig from './config/multer';
import PointsController from "./controllers/PointsController";
import ItemsController from "./controllers/ItemsController";

const routes = express.Router(); 
const upload = multer(multerConfig);
const pointsController = new PointsController();
const intemsController = new ItemsController();
//index, show, create, update, delete

routes.get('/items', intemsController.index);


routes.get('/points',pointsController.index);
routes.get('/points/:id',pointsController.show);

routes.post('/points',upload.single('image'), pointsController.create);
    
export default routes;