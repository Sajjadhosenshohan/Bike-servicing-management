import { Request, Response } from "express";
import { CustomerServices } from "./customer.service";
import { sendResponse } from "../../utils/sendResponse";
import status from "http-status";
import { catchAsync } from "../../utils/catchAsync";

const createCustomer = catchAsync(async (req: Request, res: Response) => {
  const result = await CustomerServices.createCustomer(req.body);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Customer created successfully",
    data: result,
  });
});

const getAllCustomer = catchAsync(async (req: Request, res: Response) => {
  const result = await CustomerServices.getAllCustomer();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customers fetched successfully",
    data: result,
  });
});

const getSingleCustomer = catchAsync(async (req: Request, res: Response) => {
  const result = await CustomerServices.getSingleCustomer(req.params.id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customer fetched successfully",
    data: result,
  });
});

const updateCustomerDetails = catchAsync(
  async (req: Request, res: Response) => {
    const id = req?.params?.id;
    const data = req.body;
    const result = await CustomerServices.updateCustomerDetails(id, data);

    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Customer updated successfully",
      data: result,
    });
  }
);

const deleteCustomer = catchAsync(async (req: Request, res: Response) => {
  const id = req?.params?.id;
  await CustomerServices.deleteCustomer(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Customer deleted successfully",
  });
});

export const CustomerController = {
  createCustomer,
  getAllCustomer,
  getSingleCustomer,
  updateCustomerDetails,
  deleteCustomer
};
