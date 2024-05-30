-- DropForeignKey
ALTER TABLE `Question` DROP FOREIGN KEY `Question_correctAnswerId_fkey`;

-- AlterTable
ALTER TABLE `Answer` MODIFY `title` VARCHAR(191) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `Question` MODIFY `title` VARCHAR(191) NOT NULL DEFAULT '';

-- AddForeignKey
ALTER TABLE `Question` ADD CONSTRAINT `Question_correctAnswerId_fkey` FOREIGN KEY (`correctAnswerId`) REFERENCES `Answer`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
