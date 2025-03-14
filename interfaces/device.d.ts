export interface deviceDialogProps {
  children: React.ReactElement;
}

export interface deviceAddDialogProps {
  children: React.ReactElement;
}

export interface deviceEditProps {
  name: string;
  imei: string;
  app: string;
  contentLink: string;
  children: React.ReactElement;
}

export interface Device {
  name: string;
  imei: stirng;
  app: string | null;
  contentLink: string | null;
  groupId: int;
}

export interface DbDevice extends Device {
  id: number;
}

export interface InsertDevice extends Device {}

export interface UpdateDevice extends Device {
  id: number;
  name?: string;
  imei?: stirng;
  app?: string | null;
  contentLink?: string | null;
  groupId?: int;
}

export interface DeleteDevice {
  id: number;
}
