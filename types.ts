export type CardItemT = {
  description?: string;
  hasActions?: boolean;
  hasVariant?: boolean;
  image: any;
  isOnline?: boolean;
  matches?: string;
  name: string;
};

export type IconT = {
  name: any;
  size: number;
  color: string;
  style?: any;
};

export type MessageT = {
  image: any;
  lastMessage: string;
  name: string;
};

export type ProfileItemT = {
  age?: string;
  college?: string;
  skills?: string;
  phone?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  location?: string;
  matches: string;
  name: string;
  type: string;
};

export type TabBarIconT = {
  focused: boolean;
  iconName: any;
  text: string;
};

export type DataT = {
  id: number;
  name: string;
  isOnline: boolean;
  match: string;
  description: string;
  message: string;
  image: any;
  age?: string;
  college?: string;
  skills?: string;
  phone?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  location?: string;
};
