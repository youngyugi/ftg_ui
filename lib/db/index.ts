import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import user from "./user/schema";
import group from "./group/schema";
import device from "./device/schema";
import permission from "./permission/schema";
import role from "./role/schema";
import rolepermissions from "./rolepermissions/schema";
import userpermissions from "./userpermissions/schema";
import userroles from "./userroles/schema";

const sql = neon(process.env.POSTGRES_URL!);
const db = drizzle({
  client: sql,
  schema: {
    user,
    group,
    device,
    permission,
    role,
    rolepermissions,
    userpermissions,
    userroles,
  },
});

export default db;
