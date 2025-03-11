import { eq } from "drizzle-orm";
import { db } from "@/lib/db";
import {
  DbDevice,
  InsertDevice,
  UpdateDevice,
  DeleteDevice,
} from "@/interfaces/device";
import { device } from "./schema";

export const getDevice = async () => {
  const device_list: DbDevice[] = await db.select().from(device);

  return device_list;
};

export const insertDevice = async (request_device: InsertDevice) => {
  const new_device: typeof device.$inferInsert = {
    name: request_device["name"],
    imei: request_device["imei"],
    app: request_device["app"],
    contentLink: request_device["contentLink"],
    groupId: request_device["groupId"],
  };

  const inserted_device: DbDevice[] = await db
    .insert(device)
    .values(new_device)
    .returning();

  console.log("inserted device:", inserted_device, "into device table");

  return inserted_device;
};

export const editDevice = async (request_device: UpdateDevice) => {
  const updated_device: DbDevice[] = await db
    .update(device)
    .set({
      name: request_device["name"],
      imei: request_device["imei"],
      app: request_device["app"],
      contentLink: request_device["contentLink"],
      groupId: request_device["groupId"],
    })
    .where(eq(device.id, request_device["id"]))
    .returning();

  console.log("updated device:", updated_device);

  return updated_device;
};

export const deleteDevice = async (request_device: DeleteDevice) => {
  const deleted_device: DbDevice[] = await db
    .delete(device)
    .where(eq(device.id, request_device["id"]))
    .returning();

  console.log("deleted device:", deleted_device, "from device table");

  return deleted_device;
};
