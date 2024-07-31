CREATE TABLE IF NOT EXISTS "payments" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar,
	"amount" integer
);
--> statement-breakpoint
DROP TABLE "car";