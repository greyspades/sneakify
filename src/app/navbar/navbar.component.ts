import { Component, OnInit } from '@angular/core';
import { faker } from '@faker-js/faker';
// import SneakersApi from 'sneaks-api'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let width=window.innerWidth
    if(width<500){
      this.platform='mobile'
    }
    else{
      this.platform='desktop'
    }
  } 
  
  item:Item= {
    name:'airwalks',
    id:1,
    price:45

  }

  platform?:string

  selectedItem?:Item

  windowWidth?:string
  peeps={
  }
  getSneakers():void{

  }
  getItem(item:Item):void{
    this.selectedItem=item
  }


  name:String=faker.commerce.product().toString()
  call:String='Ludex gundyr'
}



interface Item {
  name:String,
  id:Number,
  price:Number
}