import { Component, OnInit } from '@angular/core';
import { SneaksService } from '../sneaks.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  constructor(
    private service:SneaksService,
    private route:ActivatedRoute,
    private location:Location
  ) { }

  platform?:string

  sneakers:any=[]

  brand?:any

  ngOnInit(): void {
    let width=window.innerWidth
    if(width<500){
      this.platform='mobile'
    }
    else{
      this.platform='desktop'
    }

    const id = this.route.snapshot.paramMap.get('id');
    this.brand=id
    
    this.getBrand(id!,this.page)
  }

  page:number=1

  prevPage():void{
    if(this.page>1){
      this.page-=1
      this.getBrand(this.brand,this.page)
    }
  }

  nextPage():void{
    this.page+=1
    this.getBrand(this.brand,this.page)
  }

  getBrand(id:string,page:number):void{
    this.service.getBrand(id!,page!)
    .subscribe((res)=>{
      console.log(res)
      this.sneakers=res.results
    })
  }

  drawerOpened:boolean=false
  
  toggleDrawer():void{
    if(this.drawerOpened){
      this.drawerOpened=false
    }
    else if(!this.drawerOpened){
      this.drawerOpened=true
    }
  }

}
