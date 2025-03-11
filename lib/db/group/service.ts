import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import {
  DbGroup,
  InsertGroup,
  UpdateGroup,
  DeleteGroup,
} from "@/interfaces/group";
import { group } from "./schema";

export const getGroup = async () => {
  const group_list: DbGroup[] = await db.select().from(group);

  return group_list;
};

export const insertGroup = async (request_group: InsertGroup) => {
  const new_group: typeof group.$inferInsert = {
    name: request_group["name"],
    app: request_group["app"],
    contentLink: request_group["contentLink"],
  };

  const inserted_group: DbGroup[] = await db
    .insert(group)
    .values(new_group)
    .returning();

  console.log("inserted group:", inserted_group, "into group table");

  return inserted_group;
};

export const editGroup = async (request_group: UpdateGroup) => {
  const updated_group: DbGroup[] = await db
    .update(group)
    .set({
      name: request_group["name"],
      app: request_group["app"],
      contentLink: request_group["contentLink"],
    })
    .where(eq(group.id, request_group["id"]))
    .returning();

  console.log("updated group:", updated_group);

  return updated_group;
};

export const deleteGroup = async (request_group: DeleteGroup) => {
  const deleted_group: DbGroup[] = await db
    .delete(group)
    .where(eq(group.id, request_group["id"]))
    .returning();

  console.log("deleted group:", deleted_group, "from group table");

  return deleted_group;
};
