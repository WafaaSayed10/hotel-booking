import { Component } from '@angular/core';
import { ContactComponent } from '../contact/contact.component';
import { HomeComponent } from '../home/home.component';
import { RouterLink} from '@angular/router';
import { NewsComponent } from '../news/news.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [HomeComponent,ContactComponent,NewsComponent,RouterLink,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}



