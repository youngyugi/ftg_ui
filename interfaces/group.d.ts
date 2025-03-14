export interface groupDialogProps {
  children: React.ReactNode;
}

export interface groupEditProps {
  id: number;
  name: string;
  app: string;
  contentLink: string;
  children: React.ReactElement;
}

export interface Group {
  name: string;
  app: string;
  contentLink: string | null;
}

export interface DbGroup extends Group {
  id: number;
}

export interface InsertGroup extends Group {}

export interface UpdateGroup {
  id: number;
  name?: string;
  app?: string;
  contentLink?: string | null;
}

export interface DeleteGroup {
  id: number;
}
