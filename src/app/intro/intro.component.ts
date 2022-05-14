import { Component, OnInit } from '@angular/core';
import { SneaksService } from '../sneaks.service';
import { Observable, of } from 'rxjs';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

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

  platform?:string

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
