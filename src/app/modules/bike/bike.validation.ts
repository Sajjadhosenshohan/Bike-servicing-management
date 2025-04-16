import { z } from "zod";

export const bikeCreateZodSchema = z.object({
  brand: z.string({ required_error: "Brand is required" }),
  model: z.string({ required_error: "Model is required" }),
  year: z.number({ required_error: "Year is required" }),
  customerId: z.string({ required_error: "Customer ID is required" }).uuid("Invalid UUID format"),
});

export const bikeUpdateZodSchema = z.object({
    brand: z.string().optional(),
    model: z.string().optional(),
    year: z.number().optional(),
    customerId: z.string().uuid().optional(),
  });

  
  export const BikeSchemaValidation = {
    bikeCreateZodSchema,
    bikeUpdateZodSchema
  }