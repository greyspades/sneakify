import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';
//import SneakersApi from 'sneaks-api'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  } 
  
  item:Item= {
    name:'airwalks',
    id:1,
    price:45

  }
  peeps={
  }
  getSneakers():void{

  }

  name:String=faker.commerce.product().toString()
  call:String='Ludex gundyr'
}



interface Item {
  name:String,
  id:Number,
  price:Number
}