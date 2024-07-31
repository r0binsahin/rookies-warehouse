CREATE TABLE IF NOT EXISTS "warehouse" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"amount" integer
);
--> statement-breakpoint
DROP TABLE "payments";