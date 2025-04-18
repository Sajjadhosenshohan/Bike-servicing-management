"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const notFoundRoute_1 = require("./app/error/notFoundRoute");
const router_1 = __importDefault(require("./app/router"));
const globalErrorHandler_1 = require("./app/error/globalErrorHandler");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cookie_parser_1.default)());
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use("/api", router_1.default);
app.use(globalErrorHandler_1.globalErrorHandler);
app.use(notFoundRoute_1.notFoundRoute);
exports.default = app;
