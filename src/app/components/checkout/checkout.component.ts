import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { Information } from '../../models/information';
import { ApiProductsService } from '../../services/api-products.service';
import { CommonModule } from '@angular/common';
import { Room } from '../../models/room';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule,MatTabsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  recievedBookingInformation:Information[]=[];
  recievedBookingInfo:Information[]=[];
  recivedRoomInfo:Room[]=[];
  index:number=0;
  constructor(private _ApiProductsService:ApiProductsService){
  }
  ngOnInit() {
    this._ApiProductsService.getUserInfo().subscribe((res)=>{
      this.recievedBookingInformation=res
      this.index=this.recievedBookingInformation.length-1;
      this.recievedBookingInfo[0]=this.recievedBookingInformation[this.index];
    })
    this._ApiProductsService.getRoomByID(this._ApiProductsService.idRoom).subscribe((res)=>{
      this.recivedRoomInfo=res;
    })
  }


}
