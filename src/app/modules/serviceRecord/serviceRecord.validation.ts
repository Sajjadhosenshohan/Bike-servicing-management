// src/app/validations/serviceRecord.validation.ts

import { z } from "zod";

// Enum for status
const statusEnum = z.enum(["pending", "in-progress", "done"]);

// Create Schema
export const createServiceRecordSchemaValidation = z.object({
  bikeId: z.string({
    required_error: "Bike ID is required",
  }),
  serviceDate: z.string({
    required_error: "Service Date is required",
  }),
  completionDate: z.string().optional(),
  description: z.string({
    required_error: "Description is required",
  }),
  status: statusEnum,
});

// Update Schema
export const updateServiceRecordSchemaValidation = z.object({
  completionDate: z.string().datetime().optional(),
});

export const ServiceRecordSchemaValidation = {
  createServiceRecordSchemaValidation,
  updateServiceRecordSchemaValidation,
};
