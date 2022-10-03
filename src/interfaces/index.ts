export interface Nav {
  title: string;
  url?: string;
  submenuMob?: LinkType[];
  submenuDesk?: LinkType[];
}

export interface Home {
  hero: { title: string };
  about: { text1: string; text2: string; text3: string };
  services: {
    title: string;
    subtitle: string;
    card: { location: string; text: string; services: string };
  };
}

export interface Footer {
  text: string;
  social: LinkType[];
  contact: {
    title: string;
    tel: string;
    email: string;
  };
  proposition: LinkType[];
  subText: string;
}

export interface Hotels {
  img: string;
  iconType: string;
  title: string;
  activity: string;
  price: string;
}

export interface LinkType {
  title: string;
  url: string;
}
