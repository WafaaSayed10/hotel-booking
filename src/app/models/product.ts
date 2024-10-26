export class Product {
  id:number;
  name:string;
  quantity:number;
  price:number;
  imgUrl:string;
  categoryID:number;
  
  constructor(id:number,name:string,price:number,quantity:number,imgUrl:string,catId:number){
    this.id=id
    this.name=name
    this.price=price
    this.quantity=quantity
    this.imgUrl=imgUrl
    this.categoryID=catId
}
}
