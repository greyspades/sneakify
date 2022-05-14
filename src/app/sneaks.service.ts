import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SneaksService {
  
  constructor(private http: HttpClient) { }

  //*error handler for failed api calls

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      console.log(error)
  
      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  signupResponse?:string

  headers = {'Content-type': 'application/json','Accept': 'text/plain'}

  addUser(data:any):Observable<any>{
    // console.log(data)
    return this.http.post<any>('https://sneakify.herokuapp.com/sneaks/add_user/',data)
    .pipe(
       tap((res)=>this.signupResponse=res.message),
      catchError(this.handleError<any>('getSneakers', []))
    )
  }

  login(data:any):Observable<any>{
    return this.http.post<any>('https://sneakify.herokuapp.com/sneaks/login/',data)
    .pipe(
       tap((res)=>this.signupResponse=res.message),
      catchError(this.handleError<any>('getSneakers', []))
    )
  }

  getBrand(brand:string,page:number):Observable<any>{

    return this.http.get(`https://sneakify.herokuapp.com/sneaks/sneaker_brand/${brand}/${page}`)
    .pipe(
      catchError(this.handleError<any>('getSneakers', []))
    )
  }

  

  getSneakers():Observable<any>{

  
    return this.http.get<any>('https://sneakify.herokuapp.com/sneaks/get_sneakers/')
    .pipe(
      //tap((data)=>console.log(data)),
      catchError(this.handleError<any>('getSneakers', []))
    )
  }
}
