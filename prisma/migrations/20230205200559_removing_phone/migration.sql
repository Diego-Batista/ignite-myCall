/*
  Warnings:

  - You are about to drop the column `phone` on the `schedulings` table. All the data in the column will be lost.
  - You are about to drop the column `social` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `schedulings` DROP COLUMN `phone`;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `social`;
