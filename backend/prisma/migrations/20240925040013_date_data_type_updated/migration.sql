-- AlterTable
ALTER TABLE "Student" ALTER COLUMN "dob" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "dob" SET DATA TYPE DATE,
ALTER COLUMN "createdAt" SET DATA TYPE DATE;
