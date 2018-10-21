import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from "@angular/forms"

@Component({
  selector: 'mfo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   myForm: FormGroup;
   loading = false;
   success = false;
   homepage = false;
   userName = 'monaja';
   passWord = 'Mon123';
  constructor(private fb: FormBuilder) { 

  }

  ngOnInit() {
    this.myForm =  this.fb.group({
      username:['',[Validators.required]],
      password:['',[Validators.required,]]
    })
  }
  async submitHandler(){
    if(this.myForm.value.username == this.userName && this.myForm.value.password == this.passWord){
      this.loading = true;
      this.success = true;
      this.homepage = true;
     } 
  }
  async onLogOut(){
    this.loading = false;
    this.success = false;
    this.homepage = false;
    this.myForm.value.username = '';
    this.myForm.value.password = '';
  }
   
  get username(){
    return this.myForm.get('username');
  }
  get password(){
    return this.myForm.get('password');
  }

}
