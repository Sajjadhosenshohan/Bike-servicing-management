import { Router } from "express";
import customerRoutes from "../modules/customer/customer.route";
import bikeRoutes from "../modules/bike/bike.route";
import serviceRecordRoutes from "../modules/serviceRecord/serviceRecord.route";

const router = Router();

const moduleRouter = [
    {
        path: "/customers",
        route: customerRoutes
    },
    {
        path: "/bikes",
        route: bikeRoutes
    },
    {
        path: "/services",
        route: serviceRecordRoutes
    },
]

moduleRouter.forEach((singleRoute)=> router.use(singleRoute.path, singleRoute.route))

export default router;