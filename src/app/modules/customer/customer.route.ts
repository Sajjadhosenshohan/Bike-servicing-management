import { validationRequest } from './../../middlewares/validationRequest';
import { Router } from "express";
import { CustomerController } from "./customer.controller";
import { CustomerSchemaValidation } from './customer.validation';

const customerRoutes = Router();

customerRoutes.post("/",validationRequest(CustomerSchemaValidation.createCustomerRequestSchemaValidation),CustomerController.createCustomer)


customerRoutes.get("/",CustomerController.getAllCustomer)
customerRoutes.get("/:id",CustomerController.getSingleCustomer)
customerRoutes.put("/:id",validationRequest(CustomerSchemaValidation.updateCustomerRequestSchemaValidation),CustomerController.updateCustomerDetails)
customerRoutes.delete("/:id",CustomerController.deleteCustomer)

export default customerRoutes;