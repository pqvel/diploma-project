/*
  Warnings:

  - You are about to drop the column `questionId` on the `Answer` table. All the data in the column will be lost.
  - You are about to drop the `Question` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[correctAnswerId]` on the table `Test` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `testId` to the `Answer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Answer` DROP FOREIGN KEY `Answer_questionId_fkey`;

-- DropForeignKey
ALTER TABLE `Question` DROP FOREIGN KEY `Question_correctAnswerId_fkey`;

-- DropForeignKey
ALTER TABLE `Question` DROP FOREIGN KEY `Question_testId_fkey`;

-- AlterTable
ALTER TABLE `Answer` DROP COLUMN `questionId`,
    ADD COLUMN `testId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Test` ADD COLUMN `correctAnswerId` INTEGER NULL;

-- DropTable
DROP TABLE `Question`;

-- CreateIndex
CREATE UNIQUE INDEX `Test_correctAnswerId_key` ON `Test`(`correctAnswerId`);

-- AddForeignKey
ALTER TABLE `Test` ADD CONSTRAINT `Test_correctAnswerId_fkey` FOREIGN KEY (`correctAnswerId`) REFERENCES `Answer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Answer` ADD CONSTRAINT `Answer_testId_fkey` FOREIGN KEY (`testId`) REFERENCES `Test`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
