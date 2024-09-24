-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(63) NOT NULL,
    "email" VARCHAR(127) NOT NULL,
    "phone_number" INTEGER NOT NULL,
    "password" VARCHAR(127) NOT NULL,
    "birthday_at" DATE NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
