import { validationRequest } from './../../middlewares/validationRequest';
import { Router } from "express";
import { BikeSchemaValidation } from './bike.validation';
import { BikeController } from './bike.controller';

const bikeRoutes = Router();

bikeRoutes.post("/",validationRequest(BikeSchemaValidation.bikeCreateZodSchema), BikeController.addBike)
bikeRoutes.get("/", BikeController.getAllBikes)
bikeRoutes.get("/:id", BikeController.getSingleBike)

export default bikeRoutes;