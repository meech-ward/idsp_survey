/*
  Warnings:

  - Added the required column `role` to the `Survey` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Survey" ADD COLUMN     "role" STRING NOT NULL;
