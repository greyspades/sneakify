import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart=JSON.parse(localStorage.getItem('cart3')!)

  getCart(){
    var it:any=localStorage.getItem('cart')
    console.log('local storage is'+it)
  }
  
  add(item:any):void{
    //  console.log(item)
    if (localStorage.getItem('cart3') == null) {
      var temp=[]
      temp.push(item)
      // var local=localStorage.getItem('cart')
      localStorage.setItem('cart3', JSON.stringify(temp));
      return;
   }
  else {
    var arr=[]
    var local=localStorage.getItem('cart3')
    var temp1=JSON.parse(local!)
    // arr.push(item)
    temp1.push(item)
    console.log(temp1)
    localStorage.setItem('cart3',JSON.stringify(temp1))
  }



  }

  constructor() { }
}
