import { Customer } from "@prisma/client";
import { prisma } from "../../helper/prisma";
import status from "http-status";
import AppError from "../../error/AppError";

const createCustomer = async (payload: Customer) => {
  const result = await prisma.customer.create({
    data: payload,
  });
  return result;
};

const getAllCustomer = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

const getSingleCustomer = async (id: string) => {
  const result = await prisma.customer.findUniqueOrThrow({
    where: {
      customerId: id,
    },
  });
  return result;
};

const updateCustomerDetails = async (
  id: string,
  payload: Partial<Customer>
) => {
  const user = await prisma.customer.findUnique({
    where: {
      customerId: id
    },
  });
  if(!user){
    throw new AppError(status.NOT_FOUND,"User not found")
  }
  const result = await prisma.customer.update({
    where: {
      customerId: id,
    },
    data: payload,
  });
  return result;
};

const deleteCustomer = async (id: string) => {
  const result = await prisma.customer.delete({
    where: {
      customerId: id,
    },
  });
  return result;
};

export const CustomerServices = {
  createCustomer,
  getAllCustomer,
  getSingleCustomer,
  updateCustomerDetails,
  deleteCustomer,
};
