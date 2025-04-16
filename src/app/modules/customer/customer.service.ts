import { prisma } from "../../helper/prisma";
import { TCustomer } from "./customer.interface";

const createCustomer = async (payload: TCustomer) => {
  const result = await prisma.customer.create({
    data: payload,
  });
  return result;
};


const getAllCustomer = async () => {
  const result = await prisma.customer.findMany();
  return result;
};

const getSingleCustomer = async (id:string) => {
  const result = await prisma.customer.findUniqueOrThrow({
    where: {
        customerId: id
    }
  });
  return result;
};

const updateCustomerDetails = async (id:string,payload:Partial<TCustomer>) => {
  const result = await prisma.customer.update({
    where: {
        customerId: id
    },
    data: payload
  });
  return result;
};

const deleteCustomer = async (id:string) => {
  const result = await prisma.customer.delete({
    where: {
        customerId: id
    }
  });
  return result;
};

export const CustomerServices = {
  createCustomer,
  getAllCustomer,
  getSingleCustomer,
  updateCustomerDetails,
  deleteCustomer
};
