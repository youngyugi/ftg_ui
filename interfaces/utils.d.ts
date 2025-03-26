import { JWTPayload } from "jose";
import { DbDevice } from "./device";
import { DbUser } from "./user";
import { DbGroup } from "./group";
export interface deleteDialogProps {
  children: React.ReactElement;
  data: DbDevice | DbUser | DbGroup;
  url: string;
}

export interface Payload extends JWTPayload {
  roles: string[];
}
