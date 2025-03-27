import { pgTable, unique, serial, varchar, text } from "drizzle-orm/pg-core";

const permission = pgTable(
  "permission",
  {
    id: serial().primaryKey().notNull(),
    name: varchar({ length: 50 }).notNull(),
    description: text(),
  },
  (table) => [unique("permissions_name_key").on(table.name)]
);

export default permission;
