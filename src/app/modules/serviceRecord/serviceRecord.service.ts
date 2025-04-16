import { ServiceRecord, Status } from "@prisma/client";
import { prisma } from "../../helper/prisma";

const createServiceRecord = async (payload: ServiceRecord) => {
  console.log(payload);
  const result = await prisma.serviceRecord.create({
    data: payload,
  });
  return result;
};

const getAllServiceRecord = async () => {
  const result = await prisma.serviceRecord.findMany();
  return result;
};

const getSingleServiceRecord = async (id: string) => {
  const result = await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId: id,
    },
  });
  return result;
};

const updateCompleteServiceRecord = async (
  id: string,
  completionDate: string
) => {
  const completedTime = completionDate ? new Date(completionDate) : new Date();

  await prisma.serviceRecord.findUniqueOrThrow({
    where: {
      serviceId: id,
    },
  });

  const result = await prisma.serviceRecord.update({
    where: {
      serviceId: id,
    },
    data: {
      completionDate: completedTime,
      status: Status.done,
    },
  });
  return result;
};

export const ServiceRecordServices = {
  createServiceRecord,
  getAllServiceRecord,
  getSingleServiceRecord,
  updateCompleteServiceRecord,
};
