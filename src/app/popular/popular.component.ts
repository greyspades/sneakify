import { Component, OnInit } from '@angular/core';
import { SneaksService } from '../sneaks.service';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  constructor(private sneaks:SneaksService) { }

  sneakers=<any>[]

  logData():void{
    console.log(this.sneakers)
  }

  getSneakers():void {
    this.sneaks.getSneakers()
    .subscribe((data)=>{
      //console.log(data)
      this.sneakers=data.results
    })
  }
  ngOnInit(): void {
    //this.getSneakers()
  }

}
