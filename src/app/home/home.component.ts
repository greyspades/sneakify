import { Component, OnInit } from '@angular/core';
import { SneaksService } from '../sneaks.service';
import { Observable, of } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  pageTitle:string='ludex gundyr'


  handleClick():void{
    console.log('that ne clisked')
  }
  constructor(private sneakers:SneaksService,public cart:CartService) { }

  sneaks=[]
  
  getSneakers():void{
    this.sneakers.getSneakers()
    .subscribe((item)=>this.sneaks=item.results)
  }
  

  logData(message?:string):void{
    console.log(this.sneaks)
  }

  platform:string='mobile'

  ngOnInit(): void {
    let width=window.innerWidth
    if(width<500){
      this.platform='mobile'
    }
    else{
      this.platform='desktop'
    }
  }

}
