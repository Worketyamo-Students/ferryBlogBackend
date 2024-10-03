/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `blog` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "blog_slug_key" ON "blog"("slug");
