"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSchemaValidation = void 0;
const zod_1 = require("zod");
const createCustomerRequestSchemaValidation = zod_1.z.object({
    name: zod_1.z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
    }),
    email: zod_1.z
        .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
    })
        .email("Invalid email format"),
    phone: zod_1.z.string({
        required_error: "Phone number is required",
        invalid_type_error: "Phone number must be a string",
    }),
});
const updateCustomerRequestSchemaValidation = zod_1.z.object({
    name: zod_1.z.string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
    }).optional(),
    email: zod_1.z
        .string({
        required_error: "Email is required",
        invalid_type_error: "Email must be a string",
    })
        .email("Invalid email format").optional(),
    phone: zod_1.z.string({
        required_error: "Phone number is required",
        invalid_type_error: "Phone number must be a string",
    }).optional(),
});
exports.CustomerSchemaValidation = {
    createCustomerRequestSchemaValidation,
    updateCustomerRequestSchemaValidation
};
