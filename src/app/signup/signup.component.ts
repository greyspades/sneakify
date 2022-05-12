import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SneaksService } from '../sneaks.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private form:FormBuilder,
    private service:SneaksService
  ) { }

  checkoutForm = this.form.group({
    name: '',
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

  ngOnInit(): void {
  }

  onSubmit():void{
  
    // console.log(this.checkoutForm.value)
    this.service.addUser(this.checkoutForm.value).subscribe((res)=>{
      console.log(res)
    })
    this.checkoutForm.reset()
  }

}
