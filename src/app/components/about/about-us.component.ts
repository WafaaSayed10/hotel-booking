import { Component, OnInit} from '@angular/core';
import { ApiProductsService } from '../../services/api-products.service';
import { Room } from '../../models/room';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit{
  roomid:string|null=null;
  bestRates:Room[]=[];
  constructor(private _ApiProductsService:ApiProductsService, private router:Router){};
  ngOnInit() {
    this._ApiProductsService.getAllBestRates().subscribe({
      next:(res)=>{
        this.bestRates=res
      }
    })
  };
  more(id:number){
    this._ApiProductsService.idRoom=id;
    this.router.navigate(['/details']);
  }

}
