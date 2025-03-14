import { eq } from "drizzle-orm";
import db from "@/lib/db";
import { DbUser, UpdateUser, DeleteUser, InsertUser } from "@/interfaces/user";
import user from "./schema";

export const getUser = async () => {
  const user_list: DbUser[] = await db.select().from(user);

  return user_list;
};

export const insertUser = async (request_user: InsertUser) => {
  const new_user: typeof user.$inferInsert = {
    username: request_user["username"],
    password: btoa(request_user["password"]),
    email: request_user["email"],
  };

  const inserted_user: DbUser[] = await db
    .insert(user)
    .values(new_user)
    .returning();

  console.log("inserted user:", inserted_user, "into user table");

  return inserted_user;
};

export const editUser = async (request_user: UpdateUser) => {
  "password" in request_user
    ? (request_user["password"] = btoa(
        request_user["password"] ? request_user["password"] : ""
      ))
    : null;

  const updated_user: DbUser[] = await db
    .update(user)
    .set(request_user)
    .where(eq(user.id, request_user["id"]))
    .returning();

  console.log("updated user:", updated_user);

  return updated_user;
};

export const deleteUser = async (request_user: DeleteUser) => {
  const deleted_user: DbUser[] = await db
    .delete(user)
    .where(eq(user.id, request_user["id"]))
    .returning();

  console.log("deleted user:", deleted_user, "from user table");

  return deleted_user;
};
