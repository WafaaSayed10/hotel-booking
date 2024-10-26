import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room } from '../../models/room';
import { ApiProductsService } from '../../services/api-products.service';
import { RouterLink } from '@angular/router';
import { RoomDetailsComponent } from '../room-details/room-details.component';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule,RouterLink,RoomDetailsComponent],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css',
})
export class NewsComponent{
  filteredRooms:Room[]=[];
  constructor(private _ApiProductsService:ApiProductsService){}
  ngOnInit() {
    this._ApiProductsService.getAll().subscribe({
      next:(res)=>{
        this.filteredRooms=res
      }
    })
  }
  /*show(idCard:number){
    this._ApiProductsService.getRoomByID(idCard).subscribe({
      next:(res)=>{
        this._ApiProductsService.detailsRoom=res
      }
    })
  }*/
  show(idCard:number){
    this._ApiProductsService.idRoom=idCard
  }
}
