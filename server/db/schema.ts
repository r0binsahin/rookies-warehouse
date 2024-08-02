import { pgTable, text, serial, varchar } from "drizzle-orm/pg-core";

export const warehouse = pgTable("warehouse", {
  id: serial("id").primaryKey(),
  status: text("status").notNull(),
  car_id: varchar("car_id").notNull(),
});
