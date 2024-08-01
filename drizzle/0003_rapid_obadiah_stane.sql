ALTER TABLE "warehouse" ADD COLUMN "status" text NOT NULL;--> statement-breakpoint
ALTER TABLE "warehouse" DROP COLUMN IF EXISTS "name";--> statement-breakpoint
ALTER TABLE "warehouse" DROP COLUMN IF EXISTS "amount";