import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { SneaksService } from '../sneaks.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  constructor(
    private sneaks:SneaksService,
    private cart:CartService
    ) { }

  sneakers=<any>[]

  logData():void{
    console.log(this.sneakers)
  }

  addToCart(item:any):void{
    this.cart.add(item)
  }

  getSneakers():void {
    this.sneaks.getSneakers()
    .subscribe((data)=>{
      //console.log(data)
      this.sneakers=data.results
    })
  }
  ngOnInit(): void {
    this.getSneakers()
  }

}
