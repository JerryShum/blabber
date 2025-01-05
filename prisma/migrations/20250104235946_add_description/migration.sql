/*
  Warnings:

  - Added the required column `description` to the `Blurb` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Blurb" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "estimatedRead" TEXT NOT NULL,
    CONSTRAINT "Blurb_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Blurb" ("authorId", "content", "createdAt", "estimatedRead", "id", "image", "title") SELECT "authorId", "content", "createdAt", "estimatedRead", "id", "image", "title" FROM "Blurb";
DROP TABLE "Blurb";
ALTER TABLE "new_Blurb" RENAME TO "Blurb";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
