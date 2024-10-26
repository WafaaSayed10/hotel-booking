import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewsComponent } from './components/news/news.component';
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { BookingComponent } from './components/booking/booking.component';
import { AboutUsComponent } from './components/about/about-us.component';

export const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'news',component:NewsComponent},
  {path:'details',component:RoomDetailsComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'rooms',component:RoomsComponent},
  {path:'booking',component:BookingComponent},
  {path:'about',component:AboutUsComponent},
  {path:'booking/:id',component:BookingComponent}
];
