import {
  pgTable,
  text,
  foreignKey,
  integer,
  boolean,
} from "drizzle-orm/pg-core";
import group from "../group/schema";

const device = pgTable(
  "device",
  {
    id: integer().generatedAlwaysAsIdentity({
      name: "device_id_seq",
      startWith: 1,
      increment: 1,
      minValue: 1,
      maxValue: 2147483647,
      cache: 1,
    }),
    name: text().notNull(),
    app: text().notNull(),
    contentLink: text().notNull(),
    groupId: integer(),
    imei: text().primaryKey().notNull(),
    status: boolean().notNull(),
  },
  (table) => [
    foreignKey({
      columns: [table.groupId],
      foreignColumns: [group.id],
      name: "groupId",
    }),
  ]
);

export default device;
