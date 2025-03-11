import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import { DbUser, UpdateUser, DeleteUser, InsertUser } from "@/interfaces/user";
import { user } from "./schema";

export const getUser = async () => {
  const user_list: DbUser[] = await db.select().from(user);

  return user_list;
};

export const insertUser = async (request_user: InsertUser) => {
  // add password hash
  const new_user: typeof user.$inferInsert = {
    username: request_user["username"],
    password: request_user["password"],
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
  // add password hash
  const updated_user: DbUser[] = await db
    .update(user)
    .set({
      username: request_user["username"],
      password: request_user["password"],
      email: request_user["email"],
    })
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
