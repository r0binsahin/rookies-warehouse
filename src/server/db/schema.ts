import { integer, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const car = pgTable('car', {
  id: serial('id').primaryKey(),
  name: varchar('name'),
  amount: integer('amount'),
});
