-- CreateTable
CREATE TABLE "Survey" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "user_id" STRING NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "projectId" INT4 NOT NULL,
    "question1" INT4 NOT NULL,
    "question2" INT4 NOT NULL,
    "question3" INT4 NOT NULL,
    "question4" INT4 NOT NULL,
    "comments" STRING,

    CONSTRAINT "Survey_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Survey_id_user_id_key" ON "Survey"("id", "user_id");
