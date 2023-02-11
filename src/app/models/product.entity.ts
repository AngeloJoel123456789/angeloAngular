import { CategoryModel } from "./category.entity"

export interface product{
    id?:number;
    title?:string;
    price?:number;
    description?:string;
    images?:string[];
    categoryId?:number;
    CategoryID?:CategoryModel;
}

export interface Createproduct extends Omit <product, 'id' | 'category'>{
    categoryId:number;
}

export interface Updateproduct extends Partial <product>{
    categoryId?:number;
}