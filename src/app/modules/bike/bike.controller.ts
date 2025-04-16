import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { BikeServices } from "./bike.service";
import { sendResponse } from "../../utils/sendResponse";
import status from "http-status";

const addBike = catchAsync(async (req: Request, res: Response) => {
  const result = await BikeServices.addBike(req.body);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Bike added successfully",
    data: result,
  });
});

const getAllBikes = catchAsync(async (req: Request, res: Response) => {
  const result = await BikeServices.getAllBikes();

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message:  "Bikes fetched successfully",
    data: result,
  });
});

const getSingleBike = catchAsync(async (req: Request, res: Response) => {
  const result = await BikeServices.getSingleBike(req?.params?.id);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message:  "Bike fetched successfully",
    data: result,
  });
});
export const BikeController = {
  addBike,
  getAllBikes,
  getSingleBike
};
