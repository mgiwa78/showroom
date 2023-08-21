export type Category = {
  _id: string;
  name: string;
  description: string;
  categoryBanner: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  organization: string;
};

export type Room = {
  _id: string;
  title: string;
  description: string;
  roomBanner: string;
  organization: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
export type Product = {
  _id: string;
  name: string;
  description: string;
  profilePicture: string;
  otherPictures: Array<string>;
  category: Array<string>;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
