/*
  Warnings:

  - You are about to drop the column `text` on the `Answer` table. All the data in the column will be lost.
  - Added the required column `title` to the `Answer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Answer` DROP COLUMN `text`,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;
