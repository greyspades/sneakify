import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SneaksService } from '../sneaks.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private form:FormBuilder,
    private service:SneaksService
  ) { }

  checkoutForm = this.form.group({
    mail: '',
    password:''
  });

  passwordVisible:boolean=false

  passwordType:string='password'

  togglePassword():void{
    if(this.passwordType=='password'){
      this.passwordType='text'
    }
    else if(this.passwordType=='text'){
      this.passwordType='password'
    }
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

  drawerOpened:boolean=false
  
  toggleDrawer():void{
    if(this.drawerOpened){
      this.drawerOpened=false
    }
    else if(!this.drawerOpened){
      this.drawerOpened=true
    }
  }
  
  loading:boolean=false

  errorMessage:string=''

  response?:string

  onSubmit():void{
   if(this.checkoutForm.value.email!=null || this.checkoutForm.value.password!=null){
    //*sets the spinner to true
    this.loading=true

    //*calls the add user method in the sneaks service
    this.service.login(this.checkoutForm.value).subscribe((res)=>{
      this.response=res.message
      console.log(res)
      if(res.message=='LOGGED IN'){
        this.loading=false
        console.log('logged in')
      }
      if(res.message=='INCORRECT'){
        alert('Invalid login details')
        this.loading=false
      }
    })

    this.checkoutForm.reset()
   }
  //  else if(this.checkoutForm.value.password.length<8){
  //   this.errorMessage='Please choose a password with at least 8 characters'
  //   alert('Please choose a password with at least 8 characters')
  //  }
   else{
     this.errorMessage='Please fill all forms'
     alert('Please fill all forms')
   }
    // console.log(this.checkoutForm.value)
    
  }

}
