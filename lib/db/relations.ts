import { relations } from "drizzle-orm/relations";
import {
  role,
  rolepermissions,
  permission,
  user,
  userpermissions,
  userroles,
  group,
  device,
} from "./schema";

export const rolepermissionsRelations = relations(
  rolepermissions,
  ({ one }) => ({
    role: one(role, {
      fields: [rolepermissions.roleId],
      references: [role.id],
    }),
    permission: one(permission, {
      fields: [rolepermissions.permissionId],
      references: [permission.id],
    }),
  })
);

export const roleRelations = relations(role, ({ many }) => ({
  rolepermissions: many(rolepermissions),
  userroles: many(userroles),
}));

export const permissionRelations = relations(permission, ({ many }) => ({
  rolepermissions: many(rolepermissions),
  userpermissions: many(userpermissions),
}));

export const userpermissionsRelations = relations(
  userpermissions,
  ({ one }) => ({
    user: one(user, {
      fields: [userpermissions.userId],
      references: [user.id],
    }),
    permission: one(permission, {
      fields: [userpermissions.permissionId],
      references: [permission.id],
    }),
  })
);

export const userRelations = relations(user, ({ many }) => ({
  userpermissions: many(userpermissions),
  userroles: many(userroles),
}));

export const userrolesRelations = relations(userroles, ({ one }) => ({
  user: one(user, {
    fields: [userroles.userId],
    references: [user.id],
  }),
  role: one(role, {
    fields: [userroles.roleId],
    references: [role.id],
  }),
}));

export const deviceRelations = relations(device, ({ one }) => ({
  group: one(group, {
    fields: [device.groupId],
    references: [group.id],
  }),
}));

export const groupRelations = relations(group, ({ many }) => ({
  devices: many(device),
}));
