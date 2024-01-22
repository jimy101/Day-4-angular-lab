export class Product{
    ID:string;
    Name:string;
    Price:number;
    Img:string;
    constructor(id:string,name:string,price:number,img:string){
        this.ID = id;
        this.Name = name;
        this.Price= price
        this.Img= img
    }
}