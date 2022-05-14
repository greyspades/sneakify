import { Component, Input, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-sneaks-card',
  templateUrl: './sneaks-card.component.html',
  styleUrls: ['./sneaks-card.component.css']
})


export class SneaksCardComponent implements OnInit {

  constructor(
    public cart:CartService
  ) { }
  
  @Input() data!:any;

  sneaks:any[]=[]

  ngOnInit(): void {
  }

}

interface Sneak {
  name:string,
  brand:string,
  smallImageUrl:string,
  price:number
}
