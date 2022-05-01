import { Component, OnInit } from '@angular/core';
import { SneaksService } from '../sneaks.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  handleClick():void{
    console.log('that ne clisked')
  }
  constructor(private sneakers:SneaksService) { }

  sneaks=[]
  
  getSneakers():void{
    this.sneakers.getSneakers()
    .subscribe((item)=>this.sneaks=item.response)
  }

  logdata(message:string):void{
    console.log(message)
  }

  ngOnInit(): void {
    // this.getSneakers
  }

}
