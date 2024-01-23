import { Injectable } from '@angular/core';
import { Product } from '../DataTypes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor() { }
  Products: Product[] = [
    new Product("10010", "HP", 90000, "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", 2),
    new Product("10010", "HP", 90000, "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", 3),
    new Product("10010", "HP", 90000, "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", 1),
    new Product("10010", "HP", 90000, "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", 5),
    new Product("10010", "HP", 90000, "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", 5),
    new Product("10010", "HP", 90000, "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", 4),
    new Product("10010", "HP", 90000, "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", 5),
    new Product("10010", "HP", 90000, "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", 5),
    new Product("10010", "HP", 90000, "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", 1),
  ]
  Categories: Array<any> = [
    {
      id: 0,
      name: "All",
      desciption: "This is description"
    },
    {
      id: 1,
      name: "Laptops",
      desciption: "This is description"
    },
    {
      id: 2,
      name: "Tablets",
      desciption: "This is description"
    },
    {
      id: 3,
      name: "Mobiles",
      desciption: "This is description"
    },
    {
      id: 4,
      name: "Accessories",
      desciption: "This is description"
    }
  ]


}
