import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.css']
})
export class AppbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let width=window.innerWidth

    if(width<400){
      this.platform='mobile'
    }
    else {
      this.platform='desktop'
    }
  }

  platform?:string

}
