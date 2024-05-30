/*
  Warnings:

  - You are about to drop the `ExercisesWithOneAnswer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `ExercisesWithOneAnswer` DROP FOREIGN KEY `ExercisesWithOneAnswer_lessonId_fkey`;

-- DropTable
DROP TABLE `ExercisesWithOneAnswer`;

-- CreateTable
CREATE TABLE `ExerciseWithOneAnswer` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lessonId` INTEGER NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `order` INTEGER NOT NULL,
    `type` ENUM('Lecture', 'ExerciseWithOneAnswer', 'Correlate') NOT NULL DEFAULT 'ExerciseWithOneAnswer',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ExerciseWithOneAnswer` ADD CONSTRAINT `ExerciseWithOneAnswer_lessonId_fkey` FOREIGN KEY (`lessonId`) REFERENCES `Lesson`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
