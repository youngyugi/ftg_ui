import {
  pgTable,
  unique,
  serial,
  foreignKey,
  integer,
} from "drizzle-orm/pg-core";
import { user } from "../user/schema";
import { role } from "../role/schema";

export const userroles = pgTable(
  "userroles",
  {
    id: serial().primaryKey().notNull(),
    userId: integer("user_id").notNull(),
    roleId: integer("role_id").notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: "user_roles_user_id_fkey",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.roleId],
      foreignColumns: [role.id],
      name: "user_roles_role_id_fkey",
    }).onDelete("cascade"),
    unique("user_roles_user_id_role_id_key").on(table.userId, table.roleId),
  ]
);
