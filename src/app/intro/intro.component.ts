import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  handleClick():void{
    console.log('that ne clisked')
  }
  constructor() { }

  ngOnInit(): void {
  }

}
