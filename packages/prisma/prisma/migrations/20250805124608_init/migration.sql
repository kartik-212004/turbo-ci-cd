-- CreateTable
CREATE TABLE "public"."name" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "name_pkey" PRIMARY KEY ("id")
);
