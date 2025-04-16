import { prodactname } from "../types/typse";

export interface IProduct {
  id?: string 
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  category: {
    name: string;
    imageURL: string;
  };
}


export interface Iform{
   id:string
    name:prodactname
    label: string
    type :string
}
export interface ICategory {
  id :string
  name:string
  imageURL :string
}