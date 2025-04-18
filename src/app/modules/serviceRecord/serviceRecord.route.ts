import { validationRequest } from './../../middlewares/validationRequest';
import { Router } from "express";
import { ServiceRecordController } from './serviceRecord.controller';
import { ServiceRecordSchemaValidation } from './serviceRecord.validation';

const serviceRecordRoutes = Router();

serviceRecordRoutes.post("/",validationRequest(ServiceRecordSchemaValidation.createServiceRecordSchemaValidation),ServiceRecordController.createServiceRecord)

serviceRecordRoutes.get("/", ServiceRecordController.getAllServiceRecord)
serviceRecordRoutes.get("/status", ServiceRecordController.getAllOver_dueServiceRecord)

serviceRecordRoutes.get("/:id", ServiceRecordController.getSingleServiceRecord)
serviceRecordRoutes.put("/:id/complete",validationRequest(ServiceRecordSchemaValidation.updateServiceRecordSchemaValidation), ServiceRecordController.updateCompleteServiceRecord)

export default serviceRecordRoutes;