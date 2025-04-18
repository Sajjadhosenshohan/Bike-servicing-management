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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRecordServices = void 0;
const client_1 = require("@prisma/client");
const prisma_1 = require("../../helper/prisma");
const createServiceRecord = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(payload);
    const result = yield prisma_1.prisma.serviceRecord.create({
        data: payload,
    });
    return result;
});
const getAllServiceRecord = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.serviceRecord.findMany();
    return result;
});
const getSingleServiceRecord = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.prisma.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId: id,
        },
    });
    return result;
});
const updateCompleteServiceRecord = (id, completionDate) => __awaiter(void 0, void 0, void 0, function* () {
    const completedTime = completionDate ? new Date(completionDate) : new Date();
    yield prisma_1.prisma.serviceRecord.findUniqueOrThrow({
        where: {
            serviceId: id,
        },
    });
    const result = yield prisma_1.prisma.serviceRecord.update({
        where: {
            serviceId: id,
        },
        data: {
            completionDate: completedTime,
            status: client_1.Status.done,
        },
    });
    return result;
});
const getAllOver_dueServiceRecord = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const result = yield prisma_1.prisma.serviceRecord.findMany({
        where: {
            status: { in: ["pending", "in_progress"] },
            serviceDate: {
                lt: sevenDaysAgo
            }
        },
    });
    return result;
});
exports.ServiceRecordServices = {
    createServiceRecord,
    getAllServiceRecord,
    getSingleServiceRecord,
    updateCompleteServiceRecord,
    getAllOver_dueServiceRecord,
};
