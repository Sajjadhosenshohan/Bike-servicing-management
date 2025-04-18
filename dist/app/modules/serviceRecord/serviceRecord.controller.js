"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRecordController = void 0;
const catchAsync_1 = require("../../utils/catchAsync");
const serviceRecord_service_1 = require("./serviceRecord.service");
const sendResponse_1 = require("../../utils/sendResponse");
const http_status_1 = __importDefault(require("http-status"));
const createServiceRecord = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield serviceRecord_service_1.ServiceRecordServices.createServiceRecord(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Service record created successfully",
        data: result,
    });
}));
const getAllServiceRecord = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield serviceRecord_service_1.ServiceRecordServices.getAllServiceRecord();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service records fetched successfully",
        data: result,
    });
}));
const getSingleServiceRecord = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield serviceRecord_service_1.ServiceRecordServices.getSingleServiceRecord(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service record fetched successfully",
        data: result,
    });
}));
const updateCompleteServiceRecord = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { completionDate } = req.body;
    const result = yield serviceRecord_service_1.ServiceRecordServices.updateCompleteServiceRecord(id, completionDate);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Service marked as completed",
        data: result,
    });
}));
const getAllOver_dueServiceRecord = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield serviceRecord_service_1.ServiceRecordServices.getAllOver_dueServiceRecord();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Overdue or pending services fetched successfully",
        data: result,
    });
}));
exports.ServiceRecordController = {
    createServiceRecord,
    getAllServiceRecord,
    getSingleServiceRecord,
    updateCompleteServiceRecord,
    getAllOver_dueServiceRecord
};
