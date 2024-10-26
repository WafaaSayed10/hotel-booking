import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiProductsService } from '../../services/api-products.service';
import { Room } from '../../models/room';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Information } from '../../models/information';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  Title: string = 'Booking';
  roomId: string | null = null;
  roomDetails: Room | null = null;
  info:Information[]=[];
  arrival:string="I do not know";

  constructor(private route: ActivatedRoute, private _ApiProductsService: ApiProductsService,private _HttpClient:HttpClient, private router:Router) {

  }

  ngOnInit(): void {
    this.roomId = this.route.snapshot.paramMap.get('id');
    if (this.roomId) {
      this._ApiProductsService.getRoomsByID(this.roomId).subscribe({
        next: (room: Room) => {
          this.roomDetails = room;
          // console.log('Room Details:', this.roomDetails);
        },
        error: (error) => {
          console.error('Error fetching room details:', error);
        }
        // complete: () => {
          // console.log('Room fetching completed.');
        // }
      });
    // } else {
      // console.log('Routing problem: room ID not found.');
    }
    this._ApiProductsService.idSearchRoom=this.roomId
  }


  getUsersFormData(data:any){
    this._ApiProductsService.idRoom=Number(this.roomId);
    this._ApiProductsService.saveUser(data).subscribe((res)=>{
      console.log(res)
    })
    this.router.navigate(['/checkout']);
  }
}
