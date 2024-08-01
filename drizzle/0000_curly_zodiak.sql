CREATE TABLE IF NOT EXISTS "warehouse" (
	"id" serial PRIMARY KEY NOT NULL,
	"status" text NOT NULL,
	"car_id" varchar NOT NULL
);
