import { pgTable, text, integer } from "drizzle-orm/pg-core";

const group = pgTable("group", {
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

export default group;
