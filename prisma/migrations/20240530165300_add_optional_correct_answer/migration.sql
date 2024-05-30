-- DropForeignKey
ALTER TABLE `Question` DROP FOREIGN KEY `Question_correctAnswerId_fkey`;

-- AlterTable
ALTER TABLE `Question` MODIFY `correctAnswerId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Question` ADD CONSTRAINT `Question_correctAnswerId_fkey` FOREIGN KEY (`correctAnswerId`) REFERENCES `Answer`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
