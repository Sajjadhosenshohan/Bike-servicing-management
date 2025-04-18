-- DropForeignKey
ALTER TABLE "bikes" DROP CONSTRAINT "bikes_customerId_fkey";

-- DropForeignKey
ALTER TABLE "serviceRecords" DROP CONSTRAINT "serviceRecords_bikeId_fkey";

-- AddForeignKey
ALTER TABLE "bikes" ADD CONSTRAINT "bikes_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("customerId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "serviceRecords" ADD CONSTRAINT "serviceRecords_bikeId_fkey" FOREIGN KEY ("bikeId") REFERENCES "bikes"("bikeId") ON DELETE CASCADE ON UPDATE CASCADE;
