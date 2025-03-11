import { JWTPayload } from "jose";

export interface deleteDialogProps {
  children: React.ReactElement;
  groupId: number;
  itemImei: string;
}

export interface Payload extends JWTPayload {
  roles: string[];
}
