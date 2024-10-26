import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Room } from '../models/room';
import { Information } from '../models/information';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {
  detailsRoom:Room[]=[];
  idRoom:number=0;
  bookingInfo:Information[]=[];
  idSearchRoom:string | null="1";
  numOfGuests:number=0;

  constructor(private _HttpClient:HttpClient){
  }
  getAll():Observable<Room[]>{
    return this._HttpClient.get<Room[]>("http://localhost:3000/Rooms")
  }
  getRoomByID(id:number):Observable<Room[]>{
    return this._HttpClient.get<Room[]>(`http://localhost:3000/Rooms?id=${id}`)
  }
  getAllOffers():Observable<Room[]>{
    return this._HttpClient.get<Room[]>(`http://localhost:3000/Rooms?offerID=1`)
  }
  getAllBestPrices():Observable<Room[]>{
    return this._HttpClient.get<Room[]>(`http://localhost:3000/Rooms?bestPrice=1`)
  }
  getAllBestRates():Observable<Room[]>{
    return this._HttpClient.get<Room[]>(`http://localhost:3000/Rooms?bestRates=1`)
  }
  saveUser(data:any){
    return this._HttpClient.post("http://localhost:3000/information",data)
  }
  getUserInfo():Observable<Information[]>{
    return this._HttpClient.get<Information[]>("http://localhost:3000/information")
  }

  private apiUrl = 'http://localhost:3000/Rooms';
  getRooms(): Observable<Room[]> {
    return this._HttpClient.get<Room[]>(this.apiUrl);
  }
  getRoomsByID(id: string): Observable<Room> {
    return this._HttpClient.get<Room>(`${this.apiUrl}/${id}`);
  }

}
