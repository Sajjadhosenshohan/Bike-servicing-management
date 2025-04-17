import { Bike } from "@prisma/client";
import { prisma } from "../../helper/prisma";

const addBike = async (payload: Bike) => {
  const result = await prisma.bike.create({
    data: payload,
  });
  return result;
};


const getAllBikes = async () => {
  const result = await prisma.bike.findMany();
  return result;
};

const getSingleBike = async (id:string) => {
  const result = await prisma.bike.findUniqueOrThrow({
    where: {
        bikeId: id
    }
  });
  return result;
};


export const BikeServices = {
    addBike,
    getAllBikes,
    getSingleBike
};
