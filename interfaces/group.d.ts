export interface Group {
  name: string;
  app: string;
  contentLink: string;
}

export interface groupDialogProps {
  children: React.ReactNode;
}

export interface groupEditProps extends DbGroup {
  children: React.ReactElement;
}

export interface DbGroup extends Group {
  id: number;
}

export interface InsertGroup extends Group {}

export interface UpdateGroup {
  id: number;
  name?: string;
  app?: string;
  contentLink?: string;
}

export interface DeleteGroup {
  id: number;
}
