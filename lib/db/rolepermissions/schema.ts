import {
  pgTable,
  unique,
  serial,
  foreignKey,
  integer,
} from "drizzle-orm/pg-core";
import { role } from "../role/schema";
import { permission } from "../permission/schema";

export const rolepermissions = pgTable(
  "rolepermissions",
  {
    id: serial().primaryKey().notNull(),
    roleId: integer("role_id").notNull(),
    permissionId: integer("permission_id").notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.roleId],
      foreignColumns: [role.id],
      name: "role_permissions_role_id_fkey",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.permissionId],
      foreignColumns: [permission.id],
      name: "role_permissions_permission_id_fkey",
    }).onDelete("cascade"),
    unique("role_permissions_role_id_permission_id_key").on(
      table.roleId,
      table.permissionId
    ),
  ]
);
