import {
  pgTable,
  unique,
  serial,
  varchar,
  text,
  timestamp,
  foreignKey,
  integer,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const role = pgTable(
  "role",
  {
    id: serial().primaryKey().notNull(),
    name: varchar({ length: 50 }).notNull(),
    description: text(),
  },
  (table) => [unique("roles_name_key").on(table.name)]
);
