export class Product{
    ID:string;
    Name:string;
    Price:number;
    Img:string;
    rate:number
    constructor(id:string,name:string,price:number,img:string,r:number){
        this.ID = id;
        this.Name = name;
        this.Price= price
        this.Img= img
        this.rate= r
    }
}