import { IconType } from "react-icons";

export interface LinkItem {
  name: string;
  icon: IconType;
}


export interface Movie {
  id: number,
  title: {
    native: string
  },
  externalLinks: {
    url?: string
  }
}