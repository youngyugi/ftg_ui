export const dynamic = "force-dynamic";
import {
  getGroup,
  insertGroup,
  editGroup,
  deleteGroup,
} from "@/lib/db/group/service";
import {
  DbGroup,
  InsertGroup,
  UpdateGroup,
  DeleteGroup,
} from "@/interfaces/group";
import { NextRequest } from "next/server";

export async function GET() {
  const group_list: DbGroup[] = await getGroup();

  return Response.json(group_list);
}

export async function POST(request: NextRequest) {
  const data: InsertGroup = await request.json();
  const created_group: DbGroup[] = await insertGroup(data);

  return Response.json(created_group);
}

export async function PATCH(request: NextRequest) {
  const data: UpdateGroup = await request.json();
  const updated_group: DbGroup[] = await editGroup(data);

  return Response.json(updated_group);
}

export async function DELETE(request: NextRequest) {
  const data: DeleteGroup = await request.json();
  const deleted_group: DbGroup[] = await deleteGroup(data);

  return Response.json(deleted_group);
}
