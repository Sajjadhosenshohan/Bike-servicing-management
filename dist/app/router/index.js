"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const customer_route_1 = __importDefault(require("../modules/customer/customer.route"));
const bike_route_1 = __importDefault(require("../modules/bike/bike.route"));
const serviceRecord_route_1 = __importDefault(require("../modules/serviceRecord/serviceRecord.route"));
const router = (0, express_1.Router)();
const moduleRouter = [
    {
        path: "/customers",
        route: customer_route_1.default
    },
    {
        path: "/bikes",
        route: bike_route_1.default
    },
    {
        path: "/services",
        route: serviceRecord_route_1.default
    },
];
moduleRouter.forEach((singleRoute) => router.use(singleRoute.path, singleRoute.route));
exports.default = router;
