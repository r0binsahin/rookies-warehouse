import { integer, pgTable, serial, varchar } from 'drizzle-orm/pg-core';

export const payments = pgTable('payments', {
  id: serial('id').primaryKey(),
  name: varchar('name'),
  amount: integer('amount'),
});
