import { Component, OnInit } from '@angular/core';
import {MatList,MatListItem,} from '@angular/material/list';
import {MatButton,} from '@angular/material/button'

@Component({
  selector: 'app-top-brands',
  templateUrl: './top-brands.component.html',
  styleUrls: ['./top-brands.component.css']
})
export class TopBrandsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let width=window.innerWidth
    if(width<400){
      this.columns="4"
    }
    else {
      this.columns="12"
    }
  }

  columns?:string
  
  brands:Brands[]=[
    {
      name:'Puma',
      url:'/assets/images/Puma.png',
    },
    {
      name:'Adidas',
      url:    '/assets/images/Adidas.png',
    },
    {
      name:'Asics',
      url:'/assets/images/Asics.png',
    },
    {
      name:'Nike',
      url:'/assets/images/Nike.png',
    },
    {
      name:'Converse',
      url:'/assets/images/Converse.png',
    },
    {
      name:'Dior',
      url:'/assets/images/dior.png',
    },
    {
      name:'Jordan',
      url:    '/assets/images/Jordan.png',
    },
    {
      name:'Reebok',
      url:    '/assets/images/Reebok.png',
    },
    {
      name:'Chanel',
      url:'/assets/images/chanel.png',
    },
    {
      name:'Vans',
      url:'/assets/images/Vans.png',
    },
    {
      name:'Wilson',
      url:'/assets/images/Wilson.png',
    },
    // {
    //   name:'Kappa',
    //   url:'/assets/images/Kappa.png',
    // },
    {
      name:'New-Balance',
      url:'../../assets/images/New-Balance.png',
    },
    // {
    //   name:'Timberland',
    //   url:'../../assets/images/Timberland.png',
    // },
    // {
    //   name:'Skechers',
    //   url:'../../assets/images/Skechers.png',
    // },
    // {
    //   name:'',
    //   url:'../../assets/images/Merrell.png',
    // },
    // {
    //   name:'Ufoos',
    //   url:'../../assets/images/Oofos.png',
    // },
    // {
    //   name:'Umbro',
    //   url:'../../assets/images/Umbro.png',
    // },
    // {
    //   name:'Ugg',
    //   url:'../../assets/images/Ugg.png',
    // },
    // {
    //   name:'Toms',
    //   url:'../../assets/images/Toms.png',
    // },
    // {
    //   name:'Umbro',
    //   url:'../../assets/images/Umbro.png',
    // },
    // {
    //   name:'Saucony',
    //   url:'../../assets/images/Saucony.png',
    // }

  ]

  logData(name:String):void{
    console.log(name)
  }

}



interface Brands {
  name:String,
  url:String
}
