import { z } from "zod";

const createCustomerRequestSchemaValidation = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email("Invalid email format"),
  phone: z.string({
    required_error: "Phone number is required",
    invalid_type_error: "Phone number must be a string",
  }),
});

const updateCustomerRequestSchemaValidation = z.object({
  name: z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  }).optional(),
  email: z
    .string({
      required_error: "Email is required",
      invalid_type_error: "Email must be a string",
    })
    .email("Invalid email format").optional(),
  phone: z.string({
    required_error: "Phone number is required",
    invalid_type_error: "Phone number must be a string",
  }).optional(),
});

export const CustomerSchemaValidation = {
    createCustomerRequestSchemaValidation,
    updateCustomerRequestSchemaValidation
}
