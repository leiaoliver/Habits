/*
  Warnings:

  - You are about to drop the column `habitId` on the `habit_week_day ` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_habit_week_day " (
    "id" TEXT NOT NULL PRIMARY KEY,
    "habit_id" TEXT NOT NULL,
    "week_day" INTEGER NOT NULL,
    CONSTRAINT "habit_week_day _habit_id_fkey" FOREIGN KEY ("habit_id") REFERENCES "habits" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_habit_week_day " ("habit_id", "id", "week_day") SELECT "habit_id", "id", "week_day" FROM "habit_week_day ";
DROP TABLE "habit_week_day ";
ALTER TABLE "new_habit_week_day " RENAME TO "habit_week_day ";
CREATE UNIQUE INDEX "habit_week_day _habit_id_week_day_key" ON "habit_week_day "("habit_id", "week_day");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
