export const dynamic = "force-dynamic";
import {
  getUser,
  insertUser,
  editUser,
  deleteUser,
} from "@/lib/db/user/service";
import { DbUser, InsertUser, UpdateUser, DeleteUser } from "@/interfaces/user";
import { NextRequest } from "next/server";

export async function GET() {
  const user_list: DbUser[] = await getUser();

  return Response.json(user_list);
}

export async function POST(request: NextRequest) {
  const data: InsertUser = await request.json();
  const created_user: DbUser[] = await insertUser(data);

  return Response.json(created_user);
}

export async function PATCH(request: NextRequest) {
  const data: UpdateUser = await request.json();
  const updated_user: DbUser[] = await editUser(data);

  return Response.json(updated_user);
}

export async function DELETE(request: NextRequest) {
  const data: DeleteUser = await request.json();
  const deleted_user: DbUser[] = await deleteUser(data);

  return Response.json(deleted_user);
}
