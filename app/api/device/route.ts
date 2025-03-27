export const dynamic = "force-dynamic";
import {
  getDevice,
  insertDevice,
  editDevice,
  deleteDevice,
} from "@/lib/db/device/service";
import {
  DbDevice,
  InsertDevice,
  UpdateDevice,
  DeleteDevice,
} from "@/interfaces/device";
import { NextRequest } from "next/server";

export async function GET() {
  const device_list: DbDevice[] = await getDevice();

  return Response.json(device_list);
}

export async function POST(request: NextRequest) {
  const data: InsertDevice = await request.json();
  const created_device: DbDevice[] = await insertDevice(data);

  return Response.json(created_device);
}

export async function PATCH(request: NextRequest) {
  const data: UpdateDevice = await request.json();
  const updated_device: DbDevice[] = await editDevice(data);

  return Response.json(updated_device);
}

export async function DELETE(request: NextRequest) {
  const data: DeleteDevice = await request.json();
  const deleted_device: DbDevice[] = await deleteDevice(data);

  return Response.json(deleted_device);
}
