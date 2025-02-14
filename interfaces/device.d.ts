export interface deviceDialogProps {
  children: React.ReactElement;
}

export interface deviceAddDialogProps {
  children: React.ReactElement;
}

export interface deviceEditProps {
  name: string;
  model: string;
  imei: string;
  app: string;
  contentLink: string;
  children: React.ReactElement;
}
