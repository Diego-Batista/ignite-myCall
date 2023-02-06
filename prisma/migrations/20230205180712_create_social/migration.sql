/*
  Warnings:

  - You are about to drop the column `github` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `instagram` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `github`,
    DROP COLUMN `instagram`;
