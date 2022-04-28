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
    // SneakersApi.getMostPopular(10,(item:String[])=>{
    //   console.log(item)
    // })
  } 
  
  item:Item= {
    name:'airwalks',
    id:1,
    price:45

  }

  selectedItem?:Item

  names:Item[]=[
    {
      name:'van dera',
      id:2,
      price:2350
    },
    {
      name:'van kay',
      id:2,
      price:220
    },
    {
      name:'ludex gundyr',
      id:2,
      price:80
    },
    {
      name:'dera kay',
      id:2,
      price:20430
    },
  ]
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