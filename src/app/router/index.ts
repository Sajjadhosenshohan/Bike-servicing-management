import { Router } from "express";
import customerRoutes from "../modules/customer/customer.route";
import bikeRoutes from "../modules/bike/bike.route";

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
]

moduleRouter.forEach((singleRoute)=> router.use(singleRoute.path, singleRoute.route))

export default router;