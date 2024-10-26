import { ChangeDetectionStrategy, Component, OnInit, OnChanges } from '@angular/core';
import { Room } from '../../models/room';
import { CommonModule } from '@angular/common';
import { ApiProductsService } from '../../services/api-products.service';
import { Router, RouterLink } from '@angular/router';
import { MultiplyPipe } from '../../pipes/multiply.pipe';

@Component({
  selector: 'app-room-details',
  standalone: true,
  imports: [CommonModule,MultiplyPipe,RouterLink],
  templateUrl: './room-details.component.html',
  styleUrl: './room-details.component.css',
})
export class RoomDetailsComponent implements OnInit{
  recievedDetailsRoom:Room[]=[]
  bestRooms:Room[]=[]
  offer:Room[]=[]
  constructor(private _ApiProductsService:ApiProductsService, private router:Router){
  }
  ngOnInit() {
    this._ApiProductsService.getAll().subscribe({
      next:(res)=>{
        this.bestRooms=res
      }
    })
    this._ApiProductsService.getAllOffers().subscribe({
      next:(res)=>{
        this.offer=res
      }
    })
    this._ApiProductsService.getRoomByID(this._ApiProductsService.idRoom).subscribe({
      next:(res)=>{
        this.recievedDetailsRoom=res
      }
    })

  }
  details(id:number){
    this._ApiProductsService.idRoom=id;
    this._ApiProductsService.getRoomByID(this._ApiProductsService.idRoom).subscribe({
      next:(res)=>{
        this.recievedDetailsRoom=res
      }
    })
  }
}
