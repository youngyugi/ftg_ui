import { pgTable, unique, serial, varchar, text } from "drizzle-orm/pg-core";

const role = pgTable(
  "role",
  {
    id: serial().primaryKey().notNull(),
    name: varchar({ length: 50 }).notNull(),
    description: text(),
  },
  (table) => [unique("roles_name_key").on(table.name)]
);

export default role;
