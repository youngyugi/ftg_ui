import { pgTable, text, integer } from "drizzle-orm/pg-core";
import { db } from "@/lib/db";
import { DbGroup, Group } from "@/interfaces/group";

export const group = pgTable("group", {
  id: integer().primaryKey().generatedAlwaysAsIdentity({
    name: "group_id_seq",
    startWith: 1,
    increment: 1,
    minValue: 1,
    maxValue: 2147483647,
    cache: 1,
  }),
  name: text().notNull(),
  app: text().notNull(),
  contentLink: text(),
});

export const getGroup = async () => {
  const group_list: DbGroup[] = await db.select().from(group);

  return group_list;
};

export const insertGroup = async () => {};

export const editGroup = async () => {};

export const deleteGroup = async () => {};
