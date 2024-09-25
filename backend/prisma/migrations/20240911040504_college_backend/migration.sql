-- CreateEnum
CREATE TYPE "Status" AS ENUM ('onRoll', 'Passout', 'Dropped');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('General', 'OBC', 'SC', 'Other');

-- CreateEnum
CREATE TYPE "Course" AS ENUM ('ArchitectureAssistenship', 'CivilEngg', 'ElectronicsAndCommunicationEngg', 'MechanicalEngg', 'ComputerScienceEngg', 'ElectricalEngg', 'MechanicalEnggProduction', 'Pharmacy', 'InformationTechnology');

-- CreateEnum
CREATE TYPE "scholarshipType" AS ENUM ('FullFee', 'CMS100', 'CMS90', 'CMS80', 'CMS70', 'PMS', 'FWS');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'Staff');

-- CreateEnum
CREATE TYPE "BoardName" AS ENUM ('PSEB', 'CBSE', 'ICSE', 'OpenSchool', 'other');

-- CreateEnum
CREATE TYPE "SecondaryQualificationType" AS ENUM ('NonMedical', 'Medical', 'Vocational', 'ITI', 'DiplomaAny');

-- CreateEnum
CREATE TYPE "Semester" AS ENUM ('First', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'Staff',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Student" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "motherName" TEXT NOT NULL,
    "dob" TIMESTAMP(3) NOT NULL,
    "mobile" TEXT NOT NULL,
    "parentMobile" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "rollNumber" TEXT NOT NULL,
    "regNumber" TEXT NOT NULL,
    "category" "Category" NOT NULL,
    "scholarshipType" "scholarshipType" NOT NULL,
    "adhaarNo" TEXT NOT NULL,
    "course" "Course" NOT NULL,
    "batch" TEXT NOT NULL,
    "leetStatus" BOOLEAN NOT NULL,
    "statusNow" "Status" NOT NULL,
    "bloodGroup" TEXT NOT NULL,
    "dataValidated" BOOLEAN NOT NULL,
    "email" TEXT NOT NULL,
    "familyIncome" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "familyOccupation" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Qualification" (
    "id" SERIAL NOT NULL,
    "matricBoardName" "BoardName" NOT NULL,
    "matricRollNumeber" TEXT NOT NULL,
    "matricTotalMarks" TEXT NOT NULL,
    "matricObtainedMarks" TEXT NOT NULL,
    "matricPercentage" TEXT NOT NULL,
    "leetStatus" BOOLEAN NOT NULL,
    "secondaryQualificationType" "SecondaryQualificationType" NOT NULL,
    "secondaryQualificationBoardName" "BoardName" NOT NULL,
    "secondaryQualificationRollNumber" TEXT NOT NULL,
    "secondaryQualificationTotalMarks" TEXT NOT NULL,
    "secondaryQualificationObtainedMarks" TEXT NOT NULL,
    "secondaryQualificationPercentage" TEXT NOT NULL,

    CONSTRAINT "Qualification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Fee" (
    "id" SERIAL NOT NULL,
    "feeSemester" "Semester" NOT NULL,
    "feeAmount" INTEGER NOT NULL,
    "dateOfDeposit" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Fee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Student_email_key" ON "Student"("email");
