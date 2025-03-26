export interface Device {
  name: string;
  imei: stirng;
  app: string;
  contentLink: string;
  groupId: int | null;
  status: boolean;
}

export interface deviceDialogProps {
  children: React.ReactElement;
}

export interface deviceAddDialogProps {
  children: React.ReactElement;
}

export interface deviceEditProps extends DbDevice {
  children: React.ReactElement;
}

export interface DbDevice extends Device {
  id: number;
}

export interface InsertDevice extends Device {}

export interface UpdateDevice {
  id: number;
  name?: string;
  imei?: stirng;
  app?: string;
  contentLink?: string;
  groupId?: int | null;
  status?: boolean;
}

export interface DeleteDevice {
  id: number;
}
