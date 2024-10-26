import { Component, OnInit } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Room } from '../../models/room';
import { ApiProductsService } from '../../services/api-products.service';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [MatStepperModule, FormsModule, MatCardModule, CommonModule, RouterModule],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css'],
})
export class RoomsComponent implements OnInit {
  Title: string = 'Search';
  activeMenu: string = 'stayPrice';
  checkInDate: string = '';
  checkOutDate: string = '';
  nights: number = 0;
  adults: number = 1;
  rooms: Room[] = [];
  newRooms: Room = {} as Room;
  filteredRooms: Room[] = [];

  constructor(private _ApiProductsService: ApiProductsService, private router: Router) {}
  show(idCard:number){
    this._ApiProductsService.idRoom=idCard
  }

  ngOnInit(): void {
    this.getRooms();
  }

  toggleUnderline(menu: string) {
    this.activeMenu = menu;
  }

  onCheckInDateChange() {
    if (this.checkInDate && this.checkOutDate) {
      this.calculateNights();
    }
  }

  onCheckOutDateChange() {
    if (this.checkInDate && this.checkOutDate) {
      this.calculateNights();
    }
  }

  calculateNights() {
    const checkIn = new Date(this.checkInDate);
    const checkOut = new Date(this.checkOutDate);
    const timeDiff = checkOut.getTime() - checkIn.getTime();
    const daysDiff = timeDiff / (1000 * 3600 * 24);
    this.nights = daysDiff > 0 ? daysDiff : 0;
  }

  increaseAdults() {
    this.adults++;
  }

  decreaseAdults() {
    if (this.adults > 1) {
      this.adults--;
    }
  }
  detalis(id:number){
    this._ApiProductsService.idRoom=id;
  }

  getRooms() {
    this._ApiProductsService.getRooms().subscribe((room) => {
      this.rooms = room;
      this.filteredRooms = this.rooms;
    });
  }

  // Added the trackBy function to optimize *ngFor
  trackRoomById(index: number, room: Room): number {
    return room.id;
  }

  // Example method for booking a room
  bookRoom(room: Room) {
    console.log('Booking room:', room);
  }

  filterRooms(filterType: string) {
    switch (filterType) {
      case 'lowestPrice':
        this.filteredRooms = [...this.rooms].sort((a, b) => (a.price as number) - (b.price as number));
        break;
      case 'highestPrice':
        this.filteredRooms = [...this.rooms].sort((a, b) => (b.price as number) - (a.price as number));
        break;
      /*case 'largestRoom':
        this.filteredRooms = [...this.rooms].sort((a, b) => (b.size as number) - (a.size as number));
        break;
      case 'smallestRoom':
        this.filteredRooms = [...this.rooms].sort((a, b) => (a.size as number) - (b.size as number));
        break;*/
      default:
        this.filteredRooms = [...this.rooms]; // Show all rooms if no filter applied
    }
  }

}





