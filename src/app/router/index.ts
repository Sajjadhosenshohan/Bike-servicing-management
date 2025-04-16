import { Router } from "express";
import customerRoutes from "../modules/customer/customer.route";

const router = Router();

const moduleRouter = [
    {
        path: "/customers",
        route: customerRoutes
    },
]

moduleRouter.forEach((singleRoute)=> router.use(singleRoute.path, singleRoute.route))

export default router;