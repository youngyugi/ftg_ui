import {
  pgTable,
  unique,
  serial,
  foreignKey,
  integer,
} from "drizzle-orm/pg-core";
import permission from "../permission/schema";
import user from "../user/schema";

const userpermissions = pgTable(
  "userpermissions",
  {
    id: serial().primaryKey().notNull(),
    userId: integer("user_id").notNull(),
    permissionId: integer("permission_id").notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.userId],
      foreignColumns: [user.id],
      name: "user_permissions_user_id_fkey",
    }).onDelete("cascade"),
    foreignKey({
      columns: [table.permissionId],
      foreignColumns: [permission.id],
      name: "user_permissions_permission_id_fkey",
    }).onDelete("cascade"),
    unique("user_permissions_user_id_permission_id_key").on(
      table.userId,
      table.permissionId
    ),
  ]
);

export default userpermissions;
