export interface url {
  title: string;
  link: string;
  icon: React.ReactElement;
  items: suburl[];
}

export interface suburl {
  title: string;
  link?: string;
  icon: React.ReactElement;
  dialog?: React.ReactElement;
}
