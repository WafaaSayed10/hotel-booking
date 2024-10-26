export class Room {
  constructor(public id:number,public name:string,public price:number,public Quantity:number,public imgUrl:string,public guests:number,public size: string,public info:string,public available:string,public sizeID: number,public priceID: number,public availableID: number, public offerID:number, public offerPrice:number, public bestPrice:number, public bestRates:number, public amenities: Amenity[]){}
}
export interface Amenity {
  icon: string;
  label: string;
}
