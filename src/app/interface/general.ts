export interface SIDEBAR {
  icon?: string;
  goldenIcon?: string;
  showIcon: boolean;
  isOpen: boolean;
  title: string;
  route: string;
  showSubMenu: boolean;
  subMenu: { title: string; icon: string; route: string }[];
}

export interface Column {
  key: string;
  label: string;
}
