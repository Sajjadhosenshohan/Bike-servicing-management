"use strict";
// src/app/validations/serviceRecord.validation.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRecordSchemaValidation = exports.updateServiceRecordSchemaValidation = exports.createServiceRecordSchemaValidation = void 0;
const zod_1 = require("zod");
// Enum for status
const statusEnum = zod_1.z.enum(["pending", "in-progress", "done"]);
// Create Schema
exports.createServiceRecordSchemaValidation = zod_1.z.object({
    bikeId: zod_1.z.string({
        required_error: "Bike ID is required",
    }),
    serviceDate: zod_1.z.string({
        required_error: "Service Date is required",
    }),
    completionDate: zod_1.z.string().optional(),
    description: zod_1.z.string({
        required_error: "Description is required",
    }),
    status: statusEnum,
});
// Update Schema
exports.updateServiceRecordSchemaValidation = zod_1.z.object({
    completionDate: zod_1.z.string().datetime().optional(),
});
exports.ServiceRecordSchemaValidation = {
    createServiceRecordSchemaValidation: exports.createServiceRecordSchemaValidation,
    updateServiceRecordSchemaValidation: exports.updateServiceRecordSchemaValidation,
};
