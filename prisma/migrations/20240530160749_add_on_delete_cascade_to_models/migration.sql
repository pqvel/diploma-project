/*
  Warnings:

  - You are about to drop the column `correctAnswerId` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the `Answer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Answer` DROP FOREIGN KEY `Answer_questionId_fkey`;

-- DropForeignKey
ALTER TABLE `Lecture` DROP FOREIGN KEY `Lecture_lessonId_fkey`;

-- DropForeignKey
ALTER TABLE `Question` DROP FOREIGN KEY `Question_correctAnswerId_fkey`;

-- DropForeignKey
ALTER TABLE `Question` DROP FOREIGN KEY `Question_testId_fkey`;

-- DropForeignKey
ALTER TABLE `Test` DROP FOREIGN KEY `Test_lessonId_fkey`;

-- AlterTable
ALTER TABLE `Question` DROP COLUMN `correctAnswerId`,
    ADD COLUMN `answer` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `title` VARCHAR(191) NOT NULL DEFAULT '';

-- DropTable
DROP TABLE `Answer`;

-- AddForeignKey
ALTER TABLE `Lecture` ADD CONSTRAINT `Lecture_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `Lesson`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Test` ADD CONSTRAINT `Test_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `Lesson`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Question` ADD CONSTRAINT `Question_testId_fkey` FOREIGN KEY (`testId`) REFERENCES `Test`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
