import { pgTable, unique, serial, varchar, text } from "drizzle-orm/pg-core";

export const user = pgTable(
  "user",
  {
    id: serial().primaryKey().notNull(),
    username: varchar({ length: 50 }).notNull(),
    password: text("password").notNull(),
    email: varchar({ length: 100 }).notNull(),
  },
  (table) => [
    unique("users_username_key").on(table.username),
    unique("users_email_key").on(table.email),
  ]
);
