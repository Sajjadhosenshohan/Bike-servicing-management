"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeSchemaValidation = exports.bikeUpdateZodSchema = exports.bikeCreateZodSchema = void 0;
const zod_1 = require("zod");
exports.bikeCreateZodSchema = zod_1.z.object({
    brand: zod_1.z.string({ required_error: "Brand is required" }),
    model: zod_1.z.string({ required_error: "Model is required" }),
    year: zod_1.z.number({ required_error: "Year is required" }),
    customerId: zod_1.z.string({ required_error: "Customer ID is required" }).uuid("Invalid UUID format"),
});
exports.bikeUpdateZodSchema = zod_1.z.object({
    brand: zod_1.z.string().optional(),
    model: zod_1.z.string().optional(),
    year: zod_1.z.number().optional(),
    customerId: zod_1.z.string().uuid().optional(),
});
exports.BikeSchemaValidation = {
    bikeCreateZodSchema: exports.bikeCreateZodSchema,
    bikeUpdateZodSchema: exports.bikeUpdateZodSchema
};
