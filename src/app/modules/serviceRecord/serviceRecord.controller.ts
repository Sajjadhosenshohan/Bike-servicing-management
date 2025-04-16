import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { ServiceRecordServices } from "./serviceRecord.service";
import { sendResponse } from "../../utils/sendResponse";
import status from "http-status";

const createServiceRecord = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceRecordServices.createServiceRecord(req.body);

  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Service record created successfully",
    data: result,
  });
});

const getAllServiceRecord = catchAsync(async (req: Request, res: Response) => {
    const result = await ServiceRecordServices.getAllServiceRecord();
  
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Service records fetched successfully",
      data: result,
    });
  });
  
  const getSingleServiceRecord = catchAsync(async (req: Request, res: Response) => {
    const result = await ServiceRecordServices.getSingleServiceRecord(req.params.id);
  
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Service record fetched successfully",
      data: result,
    });
  });

  const updateCompleteServiceRecord = catchAsync(async (req: Request, res: Response) => {
    const {id} = req.params;
    const {completionDate} = req.body;
    const result = await ServiceRecordServices.updateCompleteServiceRecord(id,completionDate);
  
    sendResponse(res, {
      statusCode: status.OK,
      success: true,
      message: "Service marked as completed",
      data: result,
    });
  });
  
export const ServiceRecordController = {
  createServiceRecord,
  getAllServiceRecord,
  getSingleServiceRecord,
  updateCompleteServiceRecord
};
